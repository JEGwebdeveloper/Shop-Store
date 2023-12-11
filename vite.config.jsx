import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  
  esbuild: {
    loader: {
      '.js': 'jsx',
    },
  },
  plugins: [react()],
})
