module.exports = {
  mode: "jit",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        gannet: {
          50: "#f8fafa",
          100: "#f0f6f5",
          200: "#dae8e6",
          300: "#c4dbd7",
          400: "#97bfba",
          500: "#6ba49c",
          600: "#60948c",
          700: "#507b75",
          800: "#40625e",
          900: "#34504c",
        },
      },

      fontFamily: {
        slab: ["oswald", "sans-serif"],
		display: ["poppins", "sans-serif"],
      },

    },
  },
  plugins: [],
};