import cspellESLintPluginRecommended from '@cspell/eslint-plugin/recommended';
import js from '@eslint/js';
import eslintConfigPrettier from 'eslint-config-prettier';
import importPlugin from 'eslint-plugin-import';
import jsxA11y from 'eslint-plugin-jsx-a11y';
import noRelativeImportPaths from 'eslint-plugin-no-relative-import-paths';
import pluginReact from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
import globals from 'globals';
import tsEslint from 'typescript-eslint';

/** @type {import('eslint').Linter.Config[]} */
export default [
    {
        files: ['src/**/*.ts', 'src/**/*.tsx', 'src/*.ts', 'src/*.tsx'],
    },
    {
        settings: {
            'import/resolver': {
                node: true,
                typescript: true,
            },
            react: {
                version: 'detect',
            },
        },
    },
    { languageOptions: { globals: globals.browser } },
    js.configs.recommended,
    ...tsEslint.configs.recommended,
    pluginReact.configs.flat.recommended,
    eslintConfigPrettier,
    importPlugin.flatConfigs.recommended,
    jsxA11y.flatConfigs.recommended,
    cspellESLintPluginRecommended,
    {
        plugins: { 'react-hooks': reactHooks, 'no-relative-import-paths': noRelativeImportPaths },
    },
    {
        ignores: [
            '*.js',
            '**/*.js',
            '*.d.ts',
            '**/*.d.ts',
            'node_modules/**/*',
            'src/meta/search-index.ts',
            'src/accessibility-violations/**',
            'tests',
        ],
    },
    {
        rules: {
            'no-relative-import-paths/no-relative-import-paths': 'error',
            'react/self-closing-comp': 'error',
            'react-hooks/rules-of-hooks': 'error',
            'react-hooks/exhaustive-deps': 'warn',
            'no-restricted-syntax': [
                'error',
                {
                    selector: 'TSEnumDeclaration',
                    message: "Don't declare enums",
                },
            ],
            '@typescript-eslint/member-ordering': 'error',
            '@typescript-eslint/sort-type-constituents': 'error',
            '@cspell/spellchecker': [
                'error',
                {
                    configFile: new URL('./cspell.config.yaml', import.meta.url).toString(),
                },
            ],
            'react/no-unused-prop-types': 'error',

            'jsx-a11y/label-has-associated-control': 'off',
            'no-explicit-any': 'off',
            '@typescript-eslint/no-explicit-any': 'off',
            'import/first': 'warn',
            'import/named': 'off',
            'import/newline-after-import': 'warn',
            'import/no-absolute-path': 'warn',
            'import/no-duplicates': 'warn',
            'import/no-empty-named-blocks': 'warn',
            'import/no-unresolved': 'off',
            'import/order': ['warn', { alphabetize: { order: 'asc' }, 'newlines-between': 'always' }],
            'no-alert': 'error',
            'no-debugger': 'error',
            'no-shadow': 'warn',
            'no-template-curly-in-string': 'error',
            'prefer-template': 'warn',
            'react/jsx-curly-brace-presence': ['warn', { children: 'never', props: 'never' }],
            'react/jsx-sort-props': 'warn',
            'react/no-multi-comp': 'error',
            'react/no-unknown-property': ['warn', { ignore: ['css'] }],
            'react/prop-types': 'off',
            'react/react-in-jsx-scope': 'off',
        },
    },
];

/** Copyright 2025 Anywhere Real Estate - CC BY 4.0 */
