import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
 
  // ...
  assetsInclude: ['**/*.png', '**/*.jpg', '**/*.jpeg', '**/*.gif', '**/*.svg'],
  publicDir: 'public',
  plugins: [react( {
    // This is needed, or else Vite will try to find image paths (which it wont be able to find because this will be called on the web, not directly)
    // For example <img src="/images/logo.png"> will not work without the code below
    template: {
        transformAssetUrls: {
            includeAbsolute: false,
        },
    },
})],
  transformAssetUrls: {
    includeAbsolute: true,
},
paths: {"@assets/*": ["src/assets/*"]},
})
