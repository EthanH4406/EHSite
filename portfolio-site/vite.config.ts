import {defineConfig} from 'vite';
import {resolve, dirname} from 'node:path';
import {fileURLToPath} from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const repo = 'EHSite';

export default defineConfig(({command}) => ({
    base: command === 'build' ? `/${repo}/` : '/',
    build: {
        rollupOptions: {
            input: {
                main: resolve(__dirname, 'index.html'),
                contact: resolve(__dirname, 'contact.html'),
            },
        },
    },

    css: {
        preprocessorOptions: {
            scss: {
                silenceDeprecations: ['import', 'mixed-decls', 'color-functions', 'global-builtin'],
            },
        },
    },

}));