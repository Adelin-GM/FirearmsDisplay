import tailwindcss from '@tailwindcss/vite';
import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
import adapter from '@sveltejs/adapter-vercel';

// export default defineConfig({
// 	plugins: [tailwindcss(), sveltekit()]
// });


export default defineConfig({
  kit: {
    adapter: adapter(),
    // Other kit options go here
  },
  define: {
    'import.meta.env.VERCEL_ANALYTICS_ID': JSON.stringify(process.env.VERCEL_ANALYTICS_ID)
  },
  plugins: [tailwindcss(), sveltekit()]
});
