import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  assetsInclude: ['**/*.glb', '**/*.gltf', '**/*.jpg', '**/*.png', '**/*.svg', '**/*.fbx', '**/*.mp4', '**/*.mp3'],
})
