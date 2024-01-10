module.exports = {
    root: true,
    env: { browser: true, es2021: true, jest: true },
    extends: [
        'eslint:recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:@typescript-eslint/recommended-requiring-type-checking',
        'plugin:react-hooks/recommended',
        'plugin:react/recommended',
        'prettier',
        'plugin:prettier/recommended'
    ],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
        project: true,
        tsconfigRootDir: __dirname,
    },
    plugins: ['react-refresh', 'react', '@typescript-eslint', 'react-hooks'],
    rules: {
        'react-refresh/only-export-components': [
            'warn',
            { allowConstantExport: true },
        ],
        '@typescript-eslint/no-non-null-assertion': 'off',
        'no-use-before-define': 'off',
        '@typescript-eslint/no-use-before-define': [ 'error' ],
        'react/jsx-filename-extension': [ 'warn', { 'extensions': [ '.tsx' ] } ],
        'no-shadow': 'off',
        '@typescript-eslint/no-shadow': [ 'error' ],
        '@typescript-eslint/explicit-function-return-type': [ 'error', { 'allowExpressions': true } ],
        'max-len': [ 'warn', { 'code': 100, 'ignoreComments': true, 'ignoreUrls': true } ],
        'react-hooks/rules-of-hooks': 'error',
        'react-hooks/exhaustive-deps': 'warn',
        'react/prop-types': 'off',
        'prettier/prettier': [ 'error', { 'endOfLine': 'auto' } ]
    },
    settings: {
    }
}