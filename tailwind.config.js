module.exports = {
	mode: 'jit',
	purge: [
		'./**/*.html',
		'./src/**/*.{js,jsx,ts,tsx,vue}',
	],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors:{
        'primary': "#cda45e"
      },
      fontFamily:{
        popins:"'Poppins', sans-serif",
    },
  },
},
  variants: {
    extend: {},
  },
  plugins: [
		require('daisyui'),
	],

}
