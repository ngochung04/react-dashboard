module.exports = {
  root: true,
  extends: ["react-app"],
  plugins: ["react"],
  rules: {
    // Place to specify ESLint rules. Can be used to overwrite rules specified from the extended configs
    "@typescript-eslint/no-empty-interface": "off",
    "@typescript-eslint/no-use-before-define": "off",
    "@typescript-eslint/explicit-function-return-type": "off",
    "@typescript-eslint/explicit-module-boundary-types": "off",
    "react/prop-types": "off",
    "@typescript-eslint/ban-types": "off",
    "react/react-in-jsx-scope": "off",
    "padding-line-between-statements": "off",
    "@typescript-eslint/no-unused-vars": "off",
    "react-hooks/rules-of-hooks": "off", // Checks rules of Hooks
    "react-hooks/exhaustive-deps": "off", // Checks effect dependencies
    "no-restricted-imports": "off",
    "no-console": "off",
    "import/no-anonymous-default-export": "off",
    "prefer-template": "off",
  },
};
