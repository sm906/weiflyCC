export interface Env {
DB: D1Database;
STORAGE: R2Bucket;
}
 
export default {
async fetch(
request: Request,
env: Env
): Promise<Response> {
 
const url = new URL(request.url);
 
if (url.pathname === "/api/status") {
return Response.json({
system: "WeiflyCC",
version: "v1",
status: "online",
timestamp: new Date().toISOString()
});
}
 
if (url.pathname === "/api/nodes") {
const result = await env.DB
.prepare("SELECT * FROM nodes")
.all();
 
return Response.json(result.results);
}
 
if (url.pathname === "/api/services") {
const result = await env.DB
.prepare("SELECT * FROM services")
.all();
 
return Response.json(result.results);
}
 
if (url.pathname === "/api/tasks") {
const result = await env.DB
.prepare("SELECT * FROM tasks")
.all();
 
return Response.json(result.results);
}
 
if (url.pathname === "/api/storage/list") {
 
const result = await env.STORAGE.list();
 
return Response.json(
result.objects.map((obj) => ({
key: obj.key,
size: obj.size,
uploaded: obj.uploaded
}))
);
}
 
return new Response("Not Found", {
status: 404
});
}
};
