export default {
  async fetch(request, env) {
    const url = new URL(request.url)

    // Test
    if (url.pathname === "/api/test") {
      return Response.json({
        status: "ok",
        project: "WeiflyCC"
      })
    }

    // List
    if (url.pathname === "/api/storage/list") {
      const objects = await env.STORAGE.list()

      return Response.json(
        objects.objects.map(obj => ({
          key: obj.key,
          size: obj.size,
          uploaded: obj.uploaded
        }))
      )
    }

    // Upload
    if (
      url.pathname === "/api/storage/upload" &&
      request.method === "POST"
    ) {
      const form = await request.formData()
      const file = form.get("file")

      if (!file) {
        return new Response("No file", {
          status: 400
        })
      }

      await env.STORAGE.put(
        file.name,
        file.stream(),
        {
          httpMetadata: {
            contentType: file.type
          }
        }
      )

      return Response.json({
        success: true,
        filename: file.name
      })
    }

    // Download
    if (
      url.pathname.startsWith(
        "/api/storage/download/"
      )
    ) {
      const key = decodeURIComponent(
        url.pathname.replace(
          "/api/storage/download/",
          ""
        )
      )

      const object = await env.STORAGE.get(key)

      if (!object) {
        return new Response("Not Found", {
          status: 404
        })
      }

      const headers = new Headers()

      object.writeHttpMetadata(headers)

      headers.set(
        "Content-Disposition",
        `attachment; filename="${key}"`
      )

      return new Response(object.body, {
        headers
      })
    }

    // Delete
    if (
      url.pathname.startsWith(
        "/api/storage/delete/"
      ) &&
      request.method === "DELETE"
    ) {
      const key = decodeURIComponent(
        url.pathname.replace(
          "/api/storage/delete/",
          ""
        )
      )

      await env.STORAGE.delete(key)

      return Response.json({
        success: true,
        deleted: key
      })
    }

    return new Response("Not Found", {
      status: 404
    })
  }
}
