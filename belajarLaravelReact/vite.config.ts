import { wayfinder } from '@laravel/vite-plugin-wayfinder';
import react from '@vitejs/plugin-react';
import laravel from 'laravel-vite-plugin';
import tailwindcss from '@tailwindcss/vite';
import { defineConfig } from 'vite';

export default defineConfig({
    plugins: [
        react({
            include: /\.(jsx|tsx)$/,
            jsxRuntime: 'automatic',
        }),
        tailwindcss(),
        laravel({
            input: 'resources/js/app.tsx',
            ssr: 'resources/js/ssr.tsx',
            refresh: true,
        }),
        wayfinder({
            formVariants: true,
        }),
    ],
    optimizeDeps: {
        include: ['react', 'react-dom', '@inertiajs/react'],
    },
    resolve: {
        dedupe: ['react', 'react-dom'],
    },
    server: {
        hmr: {
            protocol: 'ws',
        },
    },
});
