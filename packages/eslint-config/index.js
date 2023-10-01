module.exports = {
  env: {
    node: true,
    browser: true,
    es2021: true,
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
    "prettier/prettier": "off",
    "no-unused-vars": "off",
    "@typescript-eslint/no-unused-vars": "error",
    "react/no-children-prop": "off",
    "react/react-in-jsx-scope": "off",
    "react/jsx-filename-extension": "off",
    "react/no-unknown-property": ["error", { ignore: ["svg"] }],
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
  settings: {
    react: {
      version: "detect",
    },
  },
};
