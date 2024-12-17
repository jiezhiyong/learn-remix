/* eslint-disable import/no-extraneous-dependencies */
import { vitePlugin as remix } from '@remix-run/dev';
import { defineConfig } from 'vite';
import tsconfigPaths from 'vite-tsconfig-paths';

export default defineConfig({
  plugins: [
    remix({
      basename: '/',
      future: {
        v3_fetcherPersist: true,
        v3_relativeSplatPath: true,
        v3_throwAbortReason: true,
        v3_singleFetch: true,
        v3_lazyRouteDiscovery: true,
      },
      ignoredRouteFiles: ['**/*.css'],
      routes: undefined,
      buildDirectory: 'build',
      serverBuildFile: 'index.js',
      manifest: true,
      ssr: true,
    }),
    tsconfigPaths(),
  ],
});
