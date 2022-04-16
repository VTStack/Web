import { defineConfig } from 'vite';
import tsconfigPaths from 'vite-tsconfig-paths';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [
    // reactRefresh({ include: '../../libs/thunder' }),
    tsconfigPaths({ root: '../../' }),
    react({
      exclude: /(\.stories\.(t|j)sx$|\.spec\W.(t|j)sx$)/,
      include: '**/*.tsx',
      jsxRuntime: 'automatic',
      fastRefresh: true,
      babel: {}
    })
  ],
  envDir: '../../',

  mode: 'development',
  resolve: {
    dedupe: ['react', 'react-dom', 'react-redux', '@reduxjs/toolkit', 'react-is', 'react-router-dom']
  },
  cacheDir: './local/cache/vite',

  build: {
    assetsDir: 'assets',
    sourcemap: true,

    minify: true,

    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-router-dom', 'react-dom']
        },

        compact: true,
        generatedCode: 'es5',
        strict: false,
        esModule: false
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
    open: false

    // proxy: {
    //   '/thunder': {
    //     target: 'http://localhost:3200',
    //     changeOrigin: true
    //   }
    // }
  }
});