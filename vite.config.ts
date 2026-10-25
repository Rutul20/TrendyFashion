import { defineConfig, type UserConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// Base path matches GitHub repository name in production
const isProd: boolean = process.env.NODE_ENV === 'production'
const repoName: string = '/TrendyFashion/'
const base: string = isProd ? repoName : '/'

const config: UserConfig = {
  base,
  plugins: [
    tailwindcss(),
    react()
  ],
}

export default defineConfig(config)
