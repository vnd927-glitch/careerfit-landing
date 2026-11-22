import { cp, mkdir, readFile, rm, access } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import { basename, dirname, resolve } from "node:path";

const root = fileURLToPath(new URL("../", import.meta.url)).replace(/[\\/]$/, "");
const source = resolve(root, "public");
const output = resolve(root, "dist");
const html = await readFile(resolve(source, "index.html"), "utf8");
const ids = new Set([...html.matchAll(/\bid="([^"]+)"/g)].map((match) => match[1]));
for (const [, anchor] of html.matchAll(/href="#([^"]+)"/g)) {
  if (!ids.has(anchor)) throw new Error("Missing anchor: " + anchor);
}
for (const [, asset] of html.matchAll(/(?:src|href)="([^"#]+)"/g)) {
  if (!/^(?:https?:|mailto:)/.test(asset)) await access(resolve(source, asset));
}
if (dirname(output) !== root || basename(output) !== "dist") throw new Error("Unexpected output directory");
await rm(output, { recursive: true, force: true });
await mkdir(output, { recursive: true });
await cp(source, output, { recursive: true });
console.log("Built static landing page in dist/");
