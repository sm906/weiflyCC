export default {

  async fetch(request) {

    const url = new URL(request.url);

    // Platform Status
    if (url.pathname === "/api/status") {

      return Response.json({
        platform: "WeiflyCC",
        status: "online",
        version: "1.0",
        timestamp: new Date().toISOString()
      });

    }

    // Realms
    if (url.pathname === "/api/realm") {

      return Response.json({
        realms: [
          {
            code: "INFO",
            name: "威飛文建館",
            url: "https://weiflycc.info"
          },
          {
            code: "COM",
            name: "威飛展示館",
            url: "https://weiflycc.com"
          },
          {
            code: "ORG",
            name: "威飛認證中心",
            url: "https://weiflycc.org"
          },
          {
            code: "NET",
            name: "威飛控制中心",
            url: "https://weiflycc.net"
          }
        ]
      });

    }

    // Platform
    if (url.pathname === "/api/platform") {

      return Response.json({
        name: "WeiflyCC Digital Platform",
        slogan: "不與人爭搶，只求共同成長",
        domains: [
          "weiflycc.info",
          "weiflycc.com",
          "weiflycc.org",
          "weiflycc.net"
        ]
      });

    }

    // Navigation
    if (url.pathname === "/api/navigation") {

      return Response.json({
        
        brand: "WeiflyCC",
 
        items: [
          
          {
            id: "info",
            title: "威飛文建館",
            url: "https://weiflycc.info"
          },

          {
            id: "com",
            title: "威飛展示館",
            url: "https://weiflycc.com"
          },

          {
            id: "org",
            title: "威飛認證中心",
            url: "https://weiflycc.org"
          },

          {
            id: "net",
            title: "威飛控制中心",
            url: "https://weiflycc.net"
          }
        ]
      });

    }

    // Contact
    if (url.pathname === "/api/contact") {

      return Response.json({
        email: "ice@weiflycc.com",
        brand: "WeiflyCC Digital Platform"
      });

    }

    // Version
    if (url.pathname === "/api/version") {

      return Response.json({
        platform: "WeiflyCC",
        release: "V3",
        build: "2026.10"
      });

    }

    // Health
    if (url.pathname === "/api/health") {

      return Response.json({
        worker: "weiflycc-core",
        healthy: true
      });

    }

    return Response.json(
      {
        error: "Not Found",
        path: url.pathname
      },
      {
        status: 404
      }
    );

  }

}
