module.exports = {
  root: true,
  extends: '@react-native-community',
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      rules: {
        '@typescript-eslint/no-shadow': ['error'],
        'no-shadow': 'off',
        'no-undef': 'off',
        'operator-linebreak': 'warn',
        'react-hooks/rules-of-hooks': 'error',
        'react-hooks/exhaustive-deps': 'warn',
        'import/prefer-default-export': 'off',
        '@typescript-eslint/explicit-module-boundary-types': 'off',
        'react/jsx-props-no-spreading': 'off',
        'implicit-arrow-linebreak': 'warn',
      },
    },
  ],
};
