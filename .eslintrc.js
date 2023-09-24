module.exports = {
  env: {
    browser: true,
    es2021: true,
    jest: true,
  },
  extends: [
    "plugin:react/recommended",
    "airbnb",
    "plugin:react/jsx-runtime",
    "plugin:i18next/recommended",
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: "latest",
    sourceType: "module",
  },
  plugins: ["react", "@typescript-eslint", "i18next"],
  rules: {
    "react/jsx-indent": [2, 2],
    "react/jsx-filename-extension": [
      1,
      { extensions: [".js", ".jsx", ".tsx"] },
    ],
    "import/no-unresolved": "off",
    quotes: ["error", "double", {}],
    "import/extensions": 0,
    "import/prefer-default-export": 0,
    "react/require-default-props": 0,
    "react/jsx-props-no-spreading": 1,
    "no-unused-vars": 1,
    "react/function-component-definition": 0,
    "no-shadow": 0,
    "no-undef": 0,
    "no-underscore-dangle": 0,
    "import/no-extraneous-dependencies": 0,
    "max-len": ["error", { ignoreComments: true, code: 120 }],
    "i18next/no-literal-string": [
      2,
      { markupOnly: true, ignoreAttribute: ["data-testid"] },
    ],
    "implicit-arrow-linebreak": 0,
  },
  globals: {
    __IS_DEV__: true,
  },
  overrides: [
    {
      files: ["**/src/**/*.test.{ts,tsx}"],
      rules: {
        "i18next/no-literal-string": 0,
      },
    },
  ],
};
