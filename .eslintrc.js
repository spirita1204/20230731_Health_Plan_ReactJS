module.exports = {
    env: {
        browser: true,
        es2021: true
    },
    extends: [
        'plugin:react/recommended',
        'plugin:react/recommended',//
        'plugin:react-hooks/recommended'// 檢核依賴用到
    ],
    overrides: [
        {
            env: {
                node: true
            },
            files: [
                '.eslintrc.{js,cjs}'
            ],
            parserOptions: {
                sourceType: 'script'
            }
        }
    ],
    parserOptions: {
        ecmaVersion: 'latest'
    },
    plugins: [
        'react'
    ],
    rules: {
        // 禁止連續賦值寫法
        'no-multi-assign': 'error',
        // 禁止屬性前有空白
        'no-whitespace-before-property': 'error',
        // 強制使用駱駝拼寫法
        camelcase: [
            'error',
            {
                'properties': 'always',
                'ignoreDestructuring': false
            }
        ],
        // 禁止文件末尾存在空行
        'eol-last': [
            'error',
            'never'
        ],
        // 強制使用一致的單引號
        'quotes': [
            'error',
            'single'
        ],
        // 強制使用一致的分號
        'semi': [
            'error',
            'always'
        ],
        // 要求使用 const 聲明那些聲明後不再被修改的變量
        'prefer-const': [
            'error',
            {
                'destructuring': 'any',
                'ignoreReadBeforeAssign': false
            }
        ],
        // 要求使用 let 或 const 而不是 var
        'no-var': 'error',
        // 禁止在 import 和 export 和解構賦值時將引用重命名為相同的名字
        'no-useless-rename': ['error', {
            'ignoreDestructuring': false,
            'ignoreImport': false,
            'ignoreExport': false
        }]
    },
    parserOptions: {
        'sourceType': 'module'
    }
};