import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'node:path';

export default defineConfig({
  plugins: [react()],
  publicDir: false,
  build: {
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      name: 'FigmaMakeKit',
      formats: ['es'],
      fileName: () => 'index.js',
      cssFileName: 'styles',
    },
    rollupOptions: {
      external: ['react', 'react-dom', 'react/jsx-runtime'],
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
          'react/jsx-runtime': 'jsxRuntime',
        },
      },
    },
    sourcemap: true,
    emptyOutDir: true,
  },
});
