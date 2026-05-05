/**
 * Obtiene metadatos del MCP Stitch para un proyecto y sus pantallas.
 * Opcionalmente descarga URLs hospedadas (capturas + código), como curl -L.
 *
 * Uso:
 *   node scripts/fetch-stitch-screens.mjs
 *   node scripts/fetch-stitch-screens.mjs --download
 */
import { readFileSync, existsSync, writeFileSync, mkdirSync } from "fs";
import { fileURLToPath } from "url";
import { dirname, join, extname } from "path";

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, "..");
const envPath = join(root, ".env.local");
const doDownload = process.argv.includes("--download");

/** Datos del paso Stitch (proyecto + pantallas). */
const CONFIG = {
  projectNumericId: "13130663496182666915",
  slug: "professional-developer-portfolio-showcase",
  screens: [
    { title: "Design System", id: "asset-stub-assets-23513856b5f1409ca3b0bc423f540883-1778005949925" },
    { title: "Inicio - Portafolio Profesional", id: "41d59ae41c01417bb50f11f6257d4cbb" },
    { title: "Sobre Mí y Habilidades", id: "1c9e3cd642bf483b989c9ddec49fbbea" },
    { title: "Proyectos Destacados", id: "208948f93b084f3997543a49bc92cc55" },
    { title: "Experiencia y Contacto", id: "b32f45a9f447453eba5a7b31ee75b4d2" },
  ],
};

if (!existsSync(envPath)) {
  console.error("Falta .env.local con STITCH_API_KEY");
  process.exit(1);
}
const line = readFileSync(envPath, "utf8")
  .split("\n")
  .find((l) => l.trim() && !l.trim().startsWith("#") && l.includes("STITCH_API_KEY="));
const key = line?.split("=", 2)[1]?.trim() ?? "";
const url = "https://stitch.googleapis.com/mcp";

const PROJECT = `projects/${CONFIG.projectNumericId}`;

async function rpc(method, params = {}) {
  const res = await fetch(url, {
    method: "POST",
    headers: { "X-Goog-Api-Key": key, "Content-Type": "application/json" },
    body: JSON.stringify({
      jsonrpc: "2.0",
      id: Date.now(),
      method,
      params,
    }),
  });
  const text = await res.text();
  return JSON.parse(text);
}

function slug(s) {
  return s
    .replace(/[^a-z0-9]+/gi, "-")
    .replace(/^-|-$/g, "")
    .slice(0, 48)
    .toLowerCase();
}

/** Recoge objetos con downloadUrl en la respuesta MCP (capturas, HTML, etc.). */
function collectDownloadUrls(node, out = []) {
  if (!node || typeof node !== "object") return out;
  if (typeof node.downloadUrl === "string") {
    out.push({
      url: node.downloadUrl,
      mimeType: typeof node.mimeType === "string" ? node.mimeType : undefined,
    });
  }
  for (const v of Object.values(node)) {
    if (v && typeof v === "object") collectDownloadUrls(v, out);
  }
  return out;
}

function extFromMime(mime, fallbackUrl) {
  if (mime?.includes("html")) return ".html";
  if (mime?.includes("markdown")) return ".md";
  if (mime?.includes("jpeg")) return ".jpg";
  if (mime?.includes("png")) return ".png";
  if (mime?.includes("webp")) return ".webp";
  const u = fallbackUrl.toLowerCase();
  if (u.includes("usercontent.google.com")) return ".bin";
  return extname(new URL(fallbackUrl).pathname) || ".bin";
}

async function downloadAsset(filePath, assetUrl) {
  const res = await fetch(assetUrl, { redirect: "follow" });
  if (!res.ok) throw new Error(`${res.status} ${assetUrl.slice(0, 80)}`);
  const buf = Buffer.from(await res.arrayBuffer());
  writeFileSync(filePath, buf);
}

await rpc("initialize", {
  protocolVersion: "2024-11-05",
  capabilities: {},
  clientInfo: { name: "devporfolio-fetch", version: "0" },
});

const gp = await rpc("tools/call", {
  name: "get_project",
  arguments: { name: PROJECT },
});
writeFileSync(
  join(root, "scripts", `stitch-get-project-${CONFIG.slug}.json`),
  JSON.stringify(gp, null, 2),
  "utf8",
);
console.log("get_project isError", gp?.result?.isError);

const screens = [];
let dlDir = null;
if (doDownload) {
  dlDir = join(root, "stitch-export", CONFIG.slug);
  mkdirSync(dlDir, { recursive: true });
}

for (let i = 0; i < CONFIG.screens.length; i++) {
  const { title, id } = CONFIG.screens[i];
  const res = await rpc("tools/call", {
    name: "get_screen",
    arguments: { name: `${PROJECT}/screens/${id}` },
  });
  screens.push({ title, id, res });

  if (doDownload && dlDir) {
    const urls = collectDownloadUrls(res);
    const base = `${String(i + 1).padStart(2, "0")}-${slug(title)}`;
    for (let j = 0; j < urls.length; j++) {
      const { url: u, mimeType } = urls[j];
      const ext = extFromMime(mimeType, u);
      const suffix = urls.length > 1 ? `-${j}` : "";
      const filePath = join(dlDir, `${base}${suffix}${ext}`);
      try {
        await downloadAsset(filePath, u);
        console.log("descargado", filePath);
      } catch (e) {
        console.error("fallo descarga", u.slice(0, 100), e.message);
      }
    }
  }
}

const outPath = join(root, "scripts", `stitch-screens-${CONFIG.slug}.json`);
writeFileSync(outPath, JSON.stringify({ project: PROJECT, get_project: gp, screens }, null, 2), "utf8");
console.log("Guardado:", outPath, "pantallas:", CONFIG.screens.length);
if (doDownload && dlDir) console.log("Archivos en:", dlDir);
