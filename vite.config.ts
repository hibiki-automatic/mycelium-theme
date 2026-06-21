import { defineConfig } from 'vite'
import { resolve } from 'path'

export default defineConfig({
  build: {
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      name: 'MyceliumTheme',
      formats: ['es', 'cjs'],
      fileName: (format) => `mycelium-theme.${format === 'es' ? 'es' : 'cjs'}.js`,
    },
    cssCodeSplit: false,
  },
})
