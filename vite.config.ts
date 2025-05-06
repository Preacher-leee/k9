import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { FaInstagram, FaTwitter } from "react-icons/fa";

export default defineConfig({
  plugins: [react()],
  server: {
    hmr: {
      timeout: 5000
    }
  }
  export default {
  build: {
    rollupOptions: {
      external: ['react-icons/fa6']
    }
  }
}
});
