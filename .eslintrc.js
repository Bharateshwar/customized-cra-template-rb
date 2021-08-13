const fs = require('fs');
const path = require('path');

const prettierOptions = JSON.parse(
  fs.readFileSync(path.resolve(__dirname, '.prettierrc'), 'utf8'),
);

const eslintrules = JSON.parse(
  fs.readFileSync(path.resolve(__dirname, '.eslintrc.json'), 'utf8'),
);

module.exports = {
  extends: ['react-app', 'prettier', 'plugin:react/recommended'],
  plugins: ['prettier'],
  rules: {
    'prettier/prettier': ['error', prettierOptions],
    ...eslintrules,
  },
  overrides: [
    {
      files: ['**/*.ts?(x)'],
      rules: { 'prettier/prettier': ['warn', prettierOptions] },
    },
  ],
};
