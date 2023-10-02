import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import { baseName } from "./router";

// https://vitejs.dev/config/
export default defineConfig({
  base: '/personal-website/',
  plugins: [react()],
});
