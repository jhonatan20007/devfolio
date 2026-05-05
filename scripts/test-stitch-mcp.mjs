import { readFileSync, existsSync } from "fs";
import { fileURLToPath } from "url";
import { dirname, join } from "path";

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, "..");
const envPath = join(root, ".env.local");
if (!existsSync(envPath)) {
  console.log("Falta .env.local con STITCH_API_KEY");
  process.exit(1);
}
const text = readFileSync(envPath, "utf8");
const line = text
  .split("\n")
  .find((l) => l.trim() && !l.trim().startsWith("#") && l.includes("STITCH_API_KEY="));
if (!line) {
  console.log("No se encontró STITCH_API_KEY en .env.local");
  process.exit(1);
}
const key = line.split("=", 2)[1]?.trim() ?? "";
if (!key) {
  console.log("STITCH_API_KEY vacía");
  process.exit(1);
}

const url = "https://stitch.googleapis.com/mcp";

async function postRpc(body) {
  const res = await fetch(url, {
    method: "POST",
    headers: { "X-Goog-Api-Key": key, "Content-Type": "application/json" },
    body: JSON.stringify(body),
  });
  const text = await res.text();
  return { status: res.status, text };
}

const init = await postRpc({
  jsonrpc: "2.0",
  id: 1,
  method: "initialize",
  params: {
    protocolVersion: "2024-11-05",
    capabilities: {},
    clientInfo: { name: "innface-mcp-smoke", version: "0" },
  },
});
console.log("initialize -> HTTP", init.status);
if (init.status !== 200) {
  console.log(init.text.slice(0, 400));
  process.exit(1);
}

const toolsList = await postRpc({
  jsonrpc: "2.0",
  id: 2,
  method: "tools/list",
  params: {},
});
console.log("tools/list -> HTTP", toolsList.status);
try {
  const j = JSON.parse(toolsList.text);
  const names = j?.result?.tools?.map((t) => t.name) ?? [];
  console.log("Herramientas:", names.length ? names.join(", ") : toolsList.text.slice(0, 500));
} catch {
  console.log(toolsList.text.slice(0, 500));
}

// Intento común: listar proyectos (nombre puede variar según el servidor)
const tryCall = await postRpc({
  jsonrpc: "2.0",
  id: 3,
  method: "tools/call",
  params: { name: "list_projects", arguments: {} },
});
console.log("tools/call list_projects -> HTTP", tryCall.status);
try {
  const j = JSON.parse(tryCall.text);
  if (j.error) console.log("Error JSON-RPC:", j.error);
  else console.log("Resultado (truncado):", JSON.stringify(j).slice(0, 1200));
} catch {
  console.log(tryCall.text.slice(0, 800));
}
