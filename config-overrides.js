const { useBabelRc, override, addWebpackAlias } = require("customize-cra");
const path = require("path");

module.exports = override(
  addWebpackAlias({
    ["components"]: path.resolve(__dirname, "./src/components"),
    ["assets"]: path.resolve(__dirname, "./src/assets"),
    ["pages"]: path.resolve(__dirname, "./src/pages"),
    ["utils"]: path.resolve(__dirname, "./src/utils"),
  }),
  useBabelRc()
);
