import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import { VitePWA } from "vite-plugin-pwa"

// https://astro.build/config
export default defineConfig({
	site: 'https://diegosteiner.github.io',
  base: 'yunowork',
	integrations: [tailwind()],
	plugins: [
		VitePWA({
      // add this to cache all the imports
      workbox: {
          globPatterns: ["**/*"],
      },
      // add this to cache all the
      // static assets in the public folder
      includeAssets: [
          "**/*",
      ],
      display: "standalone", 
      scope: "/",
      start_url: "/",
      manifest: {
        name: 'YUNOwork',
        short_name: 'YUNOwork',
        description: 'Kick yourself back into action',
        theme_color: '#ffffff',
        icons: [
          {
            src: 'pwa-192x192.png',
            sizes: '192x192',
            type: 'image/png'
          },
        ]
      }
    })
	]
});
