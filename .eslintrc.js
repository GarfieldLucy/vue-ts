module.exports = {
    root: true,
    env: {
        node: true
    },
    extends: ['plugin:vue/essential', '@vue/standard', '@vue/typescript'],
    rules: {
        indent: ['error', 4, {SwitchCase: 1}],
        'space-before-function-paren': ['error', 'never']
    },
    parserOptions: {
        parser: '@typescript-eslint/parser'
    },
    overrides: [
        {
            files: ['**/__tests__/*.{j,t}s?(x)'],
            env: {
                mocha: true
            }
        }
    ]
}
