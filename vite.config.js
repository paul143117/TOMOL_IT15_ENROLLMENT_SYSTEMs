<<<<<<< HEAD
import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import tailwindcss from '@tailwindcss/vite';
=======
<<<<<<< HEAD
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
>>>>>>> 952db8a (Resolve merge conflict)

export default defineConfig({
<<<<<<< HEAD
=======
  plugins: [react()],
})
=======
import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
>>>>>>> 952db8a (Resolve merge conflict)
    plugins: [
        laravel({
            input: ['resources/css/app.css', 'resources/js/app.js'],
            refresh: true,
        }),
        tailwindcss(),
    ],
    server: {
        watch: {
            ignored: ['**/storage/framework/views/**'],
        },
    },
});
<<<<<<< HEAD
=======
>>>>>>> bc1a70d (fixed conflict)
>>>>>>> 952db8a (Resolve merge conflict)
