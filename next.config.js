const withPWA = require("next-pwa");

module.exports = withPWA({
  devIndicators: {
    autoPrerender: false,
  },
  pwa: {
    disable: process.env.NODE_ENV === "development",
    dest: "public",
  },
});