import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import tseslint from 'typescript-eslint'

const ignores = [
  '**/**/.yarn/**',
  '**/**/dist/**',
  '**/node_modules/**/*',
  '**/*.d.ts',
  '**/argocd/**',
  '**/default-production/**',
  '**/build/**',
  '.pnp.*',
  '*.tsbuildinfo',
];

export default tseslint.config(
  { ignores },
  {
    extends: [js.configs.recommended, ...tseslint.configs.recommended],
    files: ['**/*.{ts,tsx}'],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
    },
    plugins: {
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
      import: order,
    },
    rules: {
      ...reactHooks.configs.recommended.rules,
      'react-refresh/only-export-components': [
        'warn',
        { allowConstantExport: true },
      ],
    },
  },
)
