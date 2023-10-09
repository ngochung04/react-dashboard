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
    "padding-line-between-statements": [
      "error",
      { blankLine: "always", prev: "*", next: ["return", "export"] },
      { blankLine: "any", prev: "export", next: "export" },
      // Always require blank lines after import, except between imports
      { blankLine: "always", prev: "import", next: "*" },
      { blankLine: "any", prev: "import", next: "import" },
    ],
    "@typescript-eslint/no-unused-vars": ["off", { patterns: "^_" }],
    "react-hooks/rules-of-hooks": "error", // Checks rules of Hooks
    "react-hooks/exhaustive-deps": "off", // Checks effect dependencies
    "no-restricted-imports": [
      "error",
      {
        patterns: ["../../*", "./../*"],
      },
    ],
    "no-console": "error",
    "import/no-anonymous-default-export": "off",
    "prefer-template": "error",
  },
};
