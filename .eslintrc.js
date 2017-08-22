module.exports = {
  extends: 'standard',
  plugins: [
    'standard',
    'promise',
  ],

  env: {
    node: true,
  },
  rules: {
    'brace-style': 'off',
    'comma-dangle': ['warn', 'always-multiline'],
    curly: 'off',
    'key-spacing': 'off',
    'no-unused-vars': 'warn',
    'no-return-await': 'off',
    semi: ['warn', 'always'],
    'semi-spacing': 'off',
    'space-before-function-paren': 'off',
    'template-tag-spacing': 'off',
    yoda: ['warn', 'always'],
  },
};
