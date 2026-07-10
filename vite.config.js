import { defineConfig } from 'vite'
import react, { reactCompilerPreset } from '@vitejs/plugin-react'
import babel from '@rolldown/plugin-babel'
import { VitePWA } from 'vite-plugin-pwa'

export default defineConfig({
  plugins: [

    react(),

    babel({
      presets: [reactCompilerPreset()]
    }),

    VitePWA({

      registerType: 'autoUpdate',

      injectRegister: 'auto',

      includeAssets: [
        't3_icon_192.png',
        't3_icon_512.png'
      ],

      manifest: {
        name: 'Tic-Tac-Toe',

        short_name: 'T3 JS',

        description:
          'Minijuego de navegador de prueba para PWA, hecho en React JS',

        theme_color: '#ff0000',

        background_color: '#000000',

        display: 'standalone',

        orientation: 'portrait',

        scope: '/',

        start_url: '/',

        icons: [
          {
            src: 't3_icon_192.png',
            sizes: '192x192',
            type: 'image/png'
          },
          {
            src: 't3_icon_512.png',
            sizes: '512x512',
            type: 'image/png'
          }
        ]
      },

      workbox: {
        globPatterns: ['**/*.{js,css,html,ico,png,svg}']
      }

    })

  ]
})