const { useBabelRc, override } = require('customize-cra');
const { alias } = require("react-app-rewire-alias");

module.exports = override(
  alias({
    "components/*": "src/components/*",
    "utils/*": "src/utils/*",
    "pages": "src/pages",
    "pages/*": "src/pages/*",
  }), useBabelRc())
