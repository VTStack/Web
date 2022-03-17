import { defineConfig } from 'vite';
import { dependencies } from './package.json';
import tsconfigPaths from 'vite-tsconfig-paths';
import { visualizer } from 'rollup-plugin-visualizer';
import react from '@vitejs/plugin-react';
import { terser } from 'rollup-plugin-terser';

const renderChunks = (deps: Record<string, string>) => {
  const chunks: any = {};

  Object.keys(deps).forEach(key => {
    if (['react', 'react-router-dom', 'react-dom'].includes(key)) return;
    chunks[key] = [key];
  });

  return chunks;
};

export default defineConfig({
  plugins: [
    tsconfigPaths({ root: '../../' }),
    react({ jsxRuntime: 'automatic', exclude: ['**/*.spec.tsx', '**/*.stories.tsx'], include: '**/*.tsx' }),
    terser(),
    visualizer({
      sourcemap: false,
      projectRoot: '../../dist/apps/honey',
      filename: 'apps/honey/local/stats.html',
      template: 'sunburst'
    })
  ],
  envDir: '../../',

  mode: 'production',
  resolve: {
    dedupe: ['react', 'react-dom', 'react-redux', '@reduxjs/toolkit', 'react-is', 'react-router-dom']
  },
  cacheDir: './local/cache/vite',

  build: {
    assetsDir: 'assets',
    sourcemap: false,
    emptyOutDir: true,

    minify: true,

    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-router-dom', 'react-dom'],
          ...renderChunks(dependencies)
        },

        compact: true,
        generatedCode: 'es5',
        strict: true,
        esModule: false,
        format: 'es'
      },

      treeshake: {
        preset: 'recommended',
        unknownGlobalSideEffects: true,
        propertyReadSideEffects: true,
        annotations: true,
        moduleSideEffects: true
      }
    }
  },

  publicDir: './src/assets',

  server: {
    open: true,

    proxy: {
      '/api': {
        target: 'http://localhost:5000',
        changeOrigin: true
      }
    }
  }
});
