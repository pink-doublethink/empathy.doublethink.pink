import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import filesize from 'rollup-plugin-filesize';
import legacy from '@vitejs/plugin-legacy';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    filesize({
      format: {
        exponent: 2,
        spacer: ' ',
        standard: 'iec'
      }
    }),
    legacy({
      targets: ['defaults', 'not IE 11'],
    }),
    react(), 
  ],
})
