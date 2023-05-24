module.exports = {
  env: {
    browser: true,
    es2021: true,
    jest: true
  },
  extends: ["plugin:react/recommended", "airbnb", "plugin:react/jsx-runtime", "plugin:i18next/recommended"],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: "latest",
    sourceType: "module"
  },
  plugins: ["react", "@typescript-eslint", "i18next"],
  rules: {
    "comma-dangle": ["error", "never"],
    "quote-props": "off",
    "quotes": [2, "double"],
    "indent": [2, 2],
    "react/jsx-indent": [2, 2],
    "react/jsx-indent-props": [2, 2],
    "react/jsx-filename-extension": [
      1,
      { "extensions": [".js", ".jsx", ".ts", ".tsx"] }
    ],
    "import/no-unresolved": "off",
    "import/prefer-default-export": "off",
    "no-unused-vars": "warn",
    "import/extensions": "off",
    "react/require-default-props": "off",
    "react/jsx-props-no-spreading": "warn",
    "react/function-component-definition": "off",
    "no-shadow": "off",
    "import/no-extraneous-dependencies": "off",
    "no-underscore-dangle": "off",
    "i18next/no-literal-string": ["error", { markupOnly: true }],
    "max-len": [2, { ignoreComments: true }]
  },
  globals: {
    "__IS_DEV__": true
  }
};