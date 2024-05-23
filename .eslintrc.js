module.exports = {
  extends: [
    "next/core-web-vitals",
    "airbnb-base",
    "airbnb-typescript/base",
    "plugin:import/typescript",
    "plugin:@typescript-eslint/recommended",
    "plugin:@typescript-eslint/eslint-recommended",
    "plugin:import/recommended",
    "prettier",
  ],
  plugins: ["@typescript-eslint", "prettier", "import", "unused-imports"],
  parserOptions: {
    project: ["./tsconfig.json"],
    sourceType: "module",
    extraFileExtensions: [".css"],
    tsconfigRootDir: __dirname,
  },
  rules: {
    "prettier/prettier": "error",
    "import/extensions": "off",
    "import/prefer-default-export": "off",
    "no-unsafe-optional-chaining": "off",
    "default-param-last": "off",
    "no-underscore-dangle": "off",
    "no-else-return": "off",
    "arrow-body-style": "off",
    "no-nested-ternary": "off",
    "no-param-reassign": "off",
    "unused-imports/no-unused-imports": "error",
    "no-restricted-syntax": ["error", "LabeledStatement", "WithStatement"],
    "unused-imports/no-unused-vars": [
      "warn",
      {
        vars: "all",
        varsIgnorePattern: "^_",
        args: "after-used",
        argsIgnorePattern: "^_",
      },
    ],
    "class-methods-use-this": "off",
    "consistent-return": "off",
    "react/display-name": "off",
    camelcase: "off",
    curly: ["error", "all"],
    "import/no-resolved": "off",
    "import/no-import-module-exports": "off",
    "newline-before-return": "error",
    "@typescript-eslint/no-empty-function": "off",
    "@typescript-eslint/no-use-before-define": "off",
    "@typescript-eslint/no-shadow": "off",
    "@typescript-eslint/consistent-type-imports": "off",
    "import/no-named-default": "off",
    "import/no-extraneous-dependencies": "off",
    "@typescript-eslint/naming-convention": "off",
    "sort-imports": [
      "error",
      {
        ignoreCase: true,
        ignoreDeclarationSort: true,
        ignoreMemberSort: false,
        allowSeparatedGroups: true,
      },
    ],
    "import/order": [
      "error",
      {
        "newlines-between": "always",
        groups: ["builtin", "external", "internal", "parent", "sibling", "index"],
        pathGroups: [
          {
            pattern: "next",
            group: "builtin",
          },
          {
            pattern: "react",
            group: "builtin",
          },
          {
            pattern: "@component/**",
            group: "internal",
          },
          {
            pattern: "@web/**",
            group: "internal",
          },
          {
            pattern: "@shared/**",
            group: "internal",
          },
        ],
        alphabetize: {
          order: "asc",
          caseInsensitive: true,
        },
      },
    ],
  },
  settings: {
    "import/parsers": {
      "@typescript-eslint/parser": [".ts", ".tsx"],
    },
    "import/resolver": {
      typescript: {
        project: "./tsconfig.json",
      },
      node: {
        extensions: [".ts", ".tsx", ".js", ".jsx"],
      },
    },
    "import/external-module-folders": [".yarn"],
  },
};
