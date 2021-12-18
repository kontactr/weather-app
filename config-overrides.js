const { useBabelRc, override, addWebpackAlias } = require("customize-cra");
const path = require("path");

module.exports = override(
  addWebpackAlias({
    ["config"]: path.resolve(__dirname, "./src/config"),
    ["components"]: path.resolve(__dirname, "./src/components"),
    ["assets"]: path.resolve(__dirname, "./src/assets"),
    ["pages"]: path.resolve(__dirname, "./src/pages"),
    ["stores"]: path.resolve(__dirname, "./src/stores"),
    ["utils"]: path.resolve(__dirname, "./src/utils"),
  }),
  useBabelRc()
);
