module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ['eslint:recommended', 'plugin:@typescript-eslint/recommended'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint'],
  rules: {
    '@typescript-eslint/no-this-alias': 'off',
    'no-restricted-syntax': 0,
    'no-await-in-loop': 'off',
    'import/extensions': 'off',
    'consistent-return': 'off',
    'import/no-unresolved': 'off',
    'lines-between-class-members': 0,
    'import/prefer-default-export': 0,
    'class-methods-use-this': 0,
    'import/no-cycle': 0,
    'max-len': [
      2,
      {
        code: 300,
      },
    ],
    'no-multi-spaces': [
      'error',
      {
        ignoreEOLComments: true,
      },
    ],
    'no-console': 'off',
    '@typescript-eslint/no-shadow': ['error'],
    'no-shadow': 'off',
    'no-empty-function': ['error', { allow: ['constructors'] }],
    'prefer-destructuring': ['error', { object: false, array: false }],
    'no-undefined': 'off',
    'no-unused-vars': 1,
    'newline-per-chained-call': [
      'error',
      {
        ignoreChainWithDepth: 3,
      },
    ],
    'linebreak-style': ['off'],
    'arrow-parens': 'off',
    'func-names': ['off'],
    'no-param-reassign': ['off'],
    quotes: [
      'error',
      'single',
      {
        allowTemplateLiterals: true,
        avoidEscape: true,
      },
    ],
    'prefer-arrow-callback': ['off'],
    'dot-notation': [
      'error',
      {
        allowPattern: '[a-zA-Z]',
      },
    ],
    'no-underscore-dangle': [
      'error',
      {
        allow: ['_request', '_method'],
      },
    ],
  },
};
