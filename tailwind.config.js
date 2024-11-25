/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: [
    "./src/**/*.{html,js,jsx,tsx,ts}",
    "./public/index.html",
  ],
  theme: {
    fontFamily: {
      'display': ['halogen', '"Open Sans"', 'ui-sans-serif', 'system-ui', '-apple-system', 'BlinkMacSystemFont', '"Segoe UI"', 'Roboto', 'Oxygen',
        'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', '"Helvetica Neue"',
        'sans-serif'], 
      'body': ['"Open Sans"', 'ui-sans-serif', 'system-ui', '-apple-system', 'BlinkMacSystemFont', '"Segoe UI"', 'Roboto', 'Oxygen',
        'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', '"Helvetica Neue"',
        'sans-serif']
    }, 
    extend: {},
  },
  plugins: [],
}

