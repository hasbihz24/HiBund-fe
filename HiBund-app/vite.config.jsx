const { defineConfig } = require('vite');
const react = require('@vitejs/plugin-react');

module.exports = defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist', // Ensure this is the correct output directory
    emptyOutDir: true, // Optionally, clean the output directory before building
  }
});
