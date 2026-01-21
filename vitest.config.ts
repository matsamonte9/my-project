/// <reference types="vitest" />
import { defineConfig } from 'vitest/config' // <- THIS is important
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './vitest.setup.ts', // this points to your setup file
  },
})
