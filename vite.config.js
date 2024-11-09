import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from "path";
// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve:{
    alias:{
      '@':path.resolve(__dirname,'src'),
      '@Components':path.resolve(__dirname,'src/Components'),
      '@Styles':path.resolve(__dirname,'src/assets/Styles'),
      '@Icons':path.resolve(__dirname,'src/assets/Icons')
    }
  },
  css: {
    preprocessorOptions: {
      scss: {
        silenceDeprecations: ["legacy-js-api"],
      },
    },
  },
})
