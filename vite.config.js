import { fileURLToPath, URL } from 'node:url';
import { defineConfig } from 'vite';

export default defineConfig({
  // Use relative asset paths so deployment works on GitHub Pages
  // without hardcoding a repository name.
  base: './',
  build: {
    rollupOptions: {
      input: {
        main: fileURLToPath(new URL('./index.html', import.meta.url)),
        popRush: fileURLToPath(new URL('./pop-rush.html', import.meta.url))
      }
    }
  }
});
