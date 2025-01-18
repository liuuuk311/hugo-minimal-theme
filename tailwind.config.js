/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./layouts/**/*.html",  // Theme layout files
    "./content/**/*.md",    // Markdown files if content is inside the theme
    "../../content/**/*.md" // Markdown files in the parent project
  ],
  theme: {
    extend: {
   },
  },
  safelist: [
    'fixed',
    { 
      pattern: /rounded-*/
    }
  ],
  plugins: [],
}