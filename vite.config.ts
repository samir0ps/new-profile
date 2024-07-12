// vite.config.ts
import { defineConfig } from 'vite';
import viteReact from '@vitejs/plugin-react';
import { TanStackRouterVite } from '@tanstack/router-plugin/vite';
import tsconfigPaths from 'vite-tsconfig-paths';

// Use 'any' to avoid TypeScript checking for this specific option
const serverConfig: any = {
  // @ts-ignore
  historyApiFallback: true,
};

export default defineConfig({
  plugins: [
    TanStackRouterVite(),
    viteReact(),
    tsconfigPaths(),
  ],
  base: '/new-profile/', // Ensure this matches your repository name
  server: serverConfig,
});
