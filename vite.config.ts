import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve:{ //추가
    alias:[{
      find : "@src",
      replacement : path.resolve(__dirname, "src")
    },
    {
      find:"@components",
      replacement: path.resolve(__dirname,"src/components")
    }
  ]
  },
  define: {
    "import.meta.env.VITE_GOOGLE_MAPS_API_KEY": `"${process.env.VITE_GOOGLE_MAPS_API_KEY}"`,
  },
})
