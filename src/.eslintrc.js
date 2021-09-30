module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true
    }
  },
  settings: {
    react: {
      version: 'detect'
    }
  },
  extends: [
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended'
  ],
  rules: {
    'prettier/prettier': 'warn',
    'no-undef': 'off',
    'no-use-before-define': 'off',
    'react/no-children-prop': 'off',
    'generator-star-spacing': ['warn', { before: false, after: true }],
    'space-before-function-paren': 'off',
    'no-unused-vars': 'error',
    semi: [2, 'never']
  }
}