module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        ink: "#e9eefc",
        bg: "#0b0b0f",
        panel: "#11131a",
        accent: "#9b5cff"
      },
      boxShadow: {
        glow: "0 0 30px #9b5cff55"
      }
    }
  },
  plugins: []
}
