module.exports = {
  purge: ["./src/**/*.html", "./src/**/*.jsx", "./src/**/*.tsx"],
  theme: {
    extend: {},
  },
  variants: {
    backgroundColor: ["responsive", "hover", "focus", "checked"],
  },
  plugins: [require("@tailwindcss/custom-forms")],
  future: {
    removeDeprecatedGapUtilities: true,
  },
};
