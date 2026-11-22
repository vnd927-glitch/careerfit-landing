import { createServer } from "node:http";
import { readFile } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import { extname, resolve, sep } from "node:path";

const source = fileURLToPath(new URL(process.argv.includes("--dist") ? "../dist/" : "../public/", import.meta.url));
const root = resolve(source);
const port = Number(process.env.PORT || 4175);
const types = { ".html": "text/html; charset=utf-8", ".css": "text/css; charset=utf-8", ".js": "text/javascript; charset=utf-8", ".json": "application/json", ".png": "image/png", ".svg": "image/svg+xml", ".txt": "text/plain; charset=utf-8" };
const server = createServer(async (request, response) => {
  if (!["GET", "HEAD"].includes(request.method)) {
    response.writeHead(405, { Allow: "GET, HEAD" }).end();
    return;
  }
  try {
    const pathname = decodeURIComponent(new URL(request.url, "http://localhost").pathname);
    const target = resolve(root, "." + (pathname === "/" ? "/index.html" : pathname));
    if (!target.startsWith(root + sep)) {
      response.writeHead(403).end("Forbidden");
      return;
    }
    const content = await readFile(target);
    response.writeHead(200, { "Content-Type": types[extname(target)] || "application/octet-stream", "Cache-Control": "no-store" });
    response.end(request.method === "HEAD" ? undefined : content);
  } catch {
    response.writeHead(404, { "Content-Type": "text/plain; charset=utf-8" }).end("Not found");
  }
});
server.listen(port, "127.0.0.1", () => console.log("CareerFit landing: http://127.0.0.1:" + port));
for (const signal of ["SIGINT", "SIGTERM"]) process.on(signal, () => server.close(() => process.exit(0)));
