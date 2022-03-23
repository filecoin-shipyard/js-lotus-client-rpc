module.exports = {
  root: true,
  env: {
    "jest/globals": true,
  },
  plugins: ["jest"],
  extends: ["eliassama/typescript"],
  rules: {
    "@typescript-eslint/no-explicit-any": ["off"],
    "quotes": [2, "double"],
    "@typescript-eslint/no-var-requires": [0],
  },
};
