module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    backgroundColor: () => ({
      primary: "#282c34",
    }),
    extend: {
      animation: {
        "spin-slow": "spin 20s linear infinite",
      },
      height: {
        "40-vmin": "40vmin",
      },
    },
    fontSize: {
      "10+2": "calc(10px + 2vmin)",
    },
    textColor: () => ({
      primary: "#61dafb",
      white: "#fff",
    }),
  },
  variants: {
    animation: ["motion-safe"],
    extend: {},
  },
  plugins: [],
};
