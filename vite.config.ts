import { reactRouter } from '@react-router/dev/vite';
import tailwindcss from '@tailwindcss/vite';
import { defineConfig } from 'vite';
import { imagetools } from 'vite-imagetools';

export default defineConfig({
  plugins: [
    tailwindcss(),
    // PNG and JPG imports are converted to WebP: `import screen from '@/assets/x.png'` gives the WebP file's URL
    imagetools({
      include: ['**/*.{png,jpg,jpeg}', '**/*.{png,jpg,jpeg}?*'],
      defaultDirectives: new URLSearchParams({ format: 'webp' }),
    }),
    reactRouter(),
  ],
  resolve: {
    tsconfigPaths: true,
  },
});
