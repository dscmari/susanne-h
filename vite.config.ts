import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// Wichtig: Der Name deines GitHub-Repositorys ist der Basis-Pfad
const repoName = 'susanne-h'; 

// https://vitejs.dev/config/
export default defineConfig({
  // Füge die 'base'-Eigenschaft hinzu:
  // Sie sorgt dafür, dass alle Asset-Pfade (CSS, JS, Bilder)
  // mit '/susanne-h/' beginnen, was den 404-Fehler behebt.
  base: `/${repoName}/`, 
  
  plugins: [react(), tailwindcss()],
});