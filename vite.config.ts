import react from '@vitejs/plugin-react';
import path from 'path';
import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],
    resolve: {
        alias: [
            {
                find: '~components',
                replacement: path.resolve(__dirname, 'src/components'),
            },
            {
                find: '~context',
                replacement: path.resolve(__dirname, 'src/context'),
            },
            {
                find: '~assets',
                replacement: path.resolve(__dirname, 'src/assets'),
            },
            {
                find: '~scss',
                replacement: path.resolve(__dirname, 'src/scss'),
            },
            {
                find: '~screens',
                replacement: path.resolve(__dirname, 'src/screens'),
            },
            {
                find: '~hooks',
                replacement: path.resolve(__dirname, 'src/hooks'),
            },
            {
                find: '~interfaces',
                replacement: path.resolve(__dirname, 'src/interfaces'),
            },
            {
                find: '~constants',
                replacement: path.resolve(__dirname, 'src/constants'),
            },
            {
                find: '~services',
                replacement: path.resolve(__dirname, 'src/services'),
            },
            {
                find: '~configs',
                replacement: path.resolve(__dirname, 'src/configs'),
            },
        ],
    },
    define: {
        'process.env': process.env,
    },
});
