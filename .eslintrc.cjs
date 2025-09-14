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
    "plugin:react-hooks/recommended",
    "airbnb",
    "prettier",
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
    "react/jsx-filename-extension": ["warn", { extensions: [".js", ".jsx"] }],
    "import/no-extraneous-dependencies": "off",
    "react/prop-types": "off",
    "no-console": "warn",
    "no-unused-vars": ["warn", { argsIgnorePattern: "^_" }],
  },
};
