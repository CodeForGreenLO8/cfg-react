const withPWA = require("next-pwa");

module.exports = withPWA({
  target: "serverless",
  pwa: {
    disable: process.env.NODE_ENV === "development",
    dest: "public",
  },
});
//https://cfglo8.netlify.app/