module.exports = {
  style: {
    postcss: {
      plugins: [
        require("tailwindcss"),
        require("postcss-nesting"),
        require("autoprefixer"),
      ],
    },
  },
};
