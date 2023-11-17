import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { nodePolyfills } from 'vite-plugin-node-polyfills'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), nodePolyfills()],
  define:{
    global:{}
  },
 /* server: {
    https: {
      key: 'key.pem', // Ruta a tu clave privada
      cert: 'cert.pem', // Ruta a tu certificado
    },
  },*/
})
