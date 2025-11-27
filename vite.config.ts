import tailwindcss from '@tailwindcss/vite';
import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  define: {
    'import.meta.env.VERCEL_ANALYTICS_ID': JSON.stringify(process.env.VERCEL_ANALYTICS_ID)
  },
  plugins: [tailwindcss(), sveltekit()],
  resolve: {
    alias: {
      src: resolve(__dirname, 'src')
    }
  },
  assetsInclude: ['**/*.glb'] // Add this line to include .glb files as assets
});
