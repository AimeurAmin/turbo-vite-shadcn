const baseConfig = require("@repo/tailwind-config/tailwind.config.js")

module.exports = {
  ...baseConfig,
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
}