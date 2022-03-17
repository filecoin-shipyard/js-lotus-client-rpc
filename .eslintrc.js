module.exports = {
  root: true,
  env: {
    'jest/globals': true,
  },
  plugins: ['jest'],
  extends: ['eliassama/typescript'],
  rules: {
    '@typescript-eslint/no-explicit-any': ['off'],
  },
};
