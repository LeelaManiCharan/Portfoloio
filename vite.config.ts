import { fileURLToPath } from 'node:url';
import { defineConfig } from 'vite';
import plugin from '@vitejs/plugin-react';

const page = (file: string) => fileURLToPath(new URL(file, import.meta.url));

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [plugin()],
    server: {
        port: 49352,
    },
    build: {
        rollupOptions: {
            input: {
                // the portfolio
                main: page('./index.html'),
                // the printable resume at /resume.html
                resume: page('./resume.html'),
            },
        },
    },
})
