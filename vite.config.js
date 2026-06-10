import { defineConfig } from 'vite';

export default defineConfig({
  // Use relative asset paths so deployment works on GitHub Pages
  // without hardcoding a repository name.
  base: './'
});
