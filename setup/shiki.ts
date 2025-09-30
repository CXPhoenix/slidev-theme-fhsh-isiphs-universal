import type { ShikiSetupReturn } from '@slidev/types'
import { defineShikiSetup } from '@slidev/types'

export default defineShikiSetup((): ShikiSetupReturn => {
  return {
    themes: {
      dark: 'vitesse-dark',
      light: 'vitesse-light',
    },
    langs: [
      "python",
      "js",
      "javascript",
      "ts",
      "typescript",
      "html",
      "css",
      "c",
      "cpp",
      "csharp",
      "java",
      "rust",
      "go",
      "bash",
      "shell",
    ]
  }
})
