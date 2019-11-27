module.exports = {
    root: true,
    env: {
        node: true
    },
    extends: ['plugin:vue/essential', '@vue/standard', '@vue/typescript'],
    rules: {
        'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
        'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
        'indent': ['error', 2, { ArrayExpression: 2, ObjectExpression: 2 }]
    },
    parserOptions: {
        parser: '@typescript-eslint/parser'
    }
}
