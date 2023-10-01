module.exports = {
  env: {
    browser: true,
    commonjs: true,
    node: true,
    es2021: true,
    es6: true,
  },
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: "latest",
    sourceType: "module",
  },
  extends: ["eslint:recommended", "plugin:react/recommended", "prettier"],
  plugins: ["react", "import", "@typescript-eslint", "prettier"],
  globals: {
    React: true,
    JSX: true,
  },
  rules: {
    "prettier/prettier": "error",
    "no-unused-vars": "off",
    "react/no-children-prop": "off",
    "@typescript-eslint/no-unused-vars": "error",
    "prettier/prettier": "off",
    "react/react-in-jsx-scope": "off",
    "react/jsx-filename-extension": [
      1,
      { extensions: [".js", ".jsx", ".ts", ".tsx"] },
    ],
    curly: ["error", "all"],
    "no-console": ["error", { allow: ["error"] }],
    "import/extensions": [
      "error",
      "ignorePackages",
      {
        "": "never",
        js: "never",
        jsx: "never",
        ts: "never",
        tsx: "never",
      },
    ],
  },
};
