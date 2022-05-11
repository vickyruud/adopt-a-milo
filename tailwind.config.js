module.exports = {
  content: [ "./src/**/*.{js,jsx,ts,tsx}",  "./node_modules/flowbite/**/*.js"],
  theme: {
    extend: {
      transitionProperty: {
        'left' : 'left'
      }
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}
