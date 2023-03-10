module.exports = {
  parser: `@typescript-eslint/parser`,
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
  },
  extends: [`airbnb-base`, `eslint:recommended`, `plugin:@typescript-eslint/recommended`, `prettier`],
  plugins: [`@typescript-eslint`, `prettier`],
  env: {
    browser: true,
  },
  settings: {
    'import/resolver': {
      node: {
        extensions: [`.js`, `.jsx`, `.ts`, `.d.ts`, `.tsx`],
      },
    },
  },
  rules: {
    'prettier/prettier': `error`,
    quotes: [`error`, `backtick`, { avoidEscape: true }],
    // note you must disable the base rule as it can report incorrect errors
    'no-use-before-define': `off`,
    '@typescript-eslint/no-use-before-define': [`error`, { functions: false }],
    '@typescript-eslint/no-non-null-assertion': `off`,
    'import/extensions': [`error`, `never`],
    'no-console': [`warn`, { allow: [`info`, `warn`, `error`] }],
    'prefer-destructuring': [
      `warn`,
      {
        VariableDeclarator: {
          array: false,
          object: true,
        },
        AssignmentExpression: {
          array: false,
          object: false,
        },
      },
      {
        enforceForRenamedProperties: false,
      },
    ],
    'no-restricted-exports': `off`,
  },
}
