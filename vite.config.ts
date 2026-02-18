import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import fs from "fs";
import { componentTagger } from "lovable-tagger";

// Plugin para GitHub Pages: 404.html idéntico a index.html para que las rutas SPA funcionen
function copy404Plugin() {
  return {
    name: "copy-404-for-github-pages",
    closeBundle() {
      const outDir = path.resolve(__dirname, "dist");
      const indexPath = path.join(outDir, "index.html");
      const notFoundPath = path.join(outDir, "404.html");
      if (fs.existsSync(indexPath)) {
        fs.copyFileSync(indexPath, notFoundPath);
      }
    },
  };
}

// https://vitejs.dev/config/
// Para GitHub Pages: base debe ser '/nombre-repo/' (ej: '/future-birth-blueprint/')
// En producción usamos el base del repo por defecto para que el build funcione en GitHub Pages
export default defineConfig(({ mode }) => ({
  base:
    process.env.VITE_BASE_PATH ||
    (mode === "production" ? "/future-birth-blueprint/" : "/"),
  server: {
    host: "::",
    port: 8080,
    hmr: {
      overlay: false,
    },
  },
  plugins: [
    react(),
    mode === "development" && componentTagger(),
    copy404Plugin(),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
