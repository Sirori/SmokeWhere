module.exports = {
  root: true,
  env: {
    browser: true,
    es2020: true,
    node: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:react/jsx-runtime",
    "plugin:react-hooks/recommended",
  ],
  ignorePatterns: ["dist", ".eslintrc.cjs", "node_modules"],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
    ecmaFeatures: {
      jsx: true,
    },
  },
  settings: {
    react: {
      version: "detect",
    },
  },
  plugins: ["react-refresh"],
  rules: {
    "react/jsx-no-target-blank": "off",
    "react/prop-types": "warn",
    "react-refresh/only-export-components": [
      "warn",
      { allowConstantExport: true },
    ],
    "no-unused-vars": "warn",
    "no-console": "warn",
    "prefer-const": "warn",
  },
};
