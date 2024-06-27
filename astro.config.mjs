import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import AstroPWA from '@vite-pwa/astro'

// https://astro.build/config
export default defineConfig({
	site: 'https://diegosteiner.github.io',
  base: 'yunowork',
	integrations: [tailwind(),
		AstroPWA({
      // add this to cache all the imports
      workbox: {

        navigateFallback: '/yunowork',
          globPatterns: ["**/*"],
      },
      // add this to cache all the
      // static assets in the public folder
      includeAssets: [
          "**/*",
      ],
      display: "standalone", 
      registerType: 'autoUpdate',
      scope: "/yunowork",
      start_url: "/yunowork",
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
