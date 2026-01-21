/// <reference types="vitest/config" />
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { storybookTest } from "@storybook/addon-vitest/vitest-plugin";

const dirname =
  typeof __dirname !== "undefined"
    ? __dirname
    : path.dirname(fileURLToPath(import.meta.url));

// Ubah defineConfig menjadi sebuah fungsi yang menerima 'mode'
export default defineConfig(({ mode }) => {
  // Konfigurasi dasar yang berlaku untuk semua mode
  const baseConfig = {
    plugins: [react(), tailwindcss()],
  };

  // Jika BUKAN mode 'production', maka tambahkan konfigurasi untuk 'test'
  if (mode !== "production") {
    baseConfig.test = {
      projects: [
        {
          extends: true,
          plugins: [
            storybookTest({
              configDir: path.join(dirname, ".storybook"),
            }),
          ],
          test: {
            name: "storybook",
            browser: {
              enabled: true,
              headless: true,
              provider: "playwright",
              instances: [
                {
                  browser: "chromium",
                },
              ],
            },
            setupFiles: [".storybook/vitest.setup.js"],
          },
        },
      ],
    };
  }

  // Kembalikan konfigurasi yang sudah disesuaikan
  return baseConfig;
});
