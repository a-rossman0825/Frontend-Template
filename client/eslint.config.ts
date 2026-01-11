import globals from "globals";
import pluginVue from "eslint-plugin-vue";
import tseslint from "@typescript-eslint/eslint-plugin";
import tsparser from "@typescript-eslint/parser";
import vueParser from "vue-eslint-parser";

export default [
  {
    ignores: ["**/*.d.ts", "dist/**", "node_modules/**", "@types/**"],
  },
  ...pluginVue.configs["flat/essential"],
  {
    files: ["**/*.vue"],
    languageOptions: {
      parser: vueParser,
      parserOptions: {
        parser: tsparser,
        ecmaVersion: "latest",
        sourceType: "module",
      },
      globals: {
        ...globals.browser,
      },
    },
    plugins: {
      "@typescript-eslint": tseslint,
    },
    rules: {
      "no-unused-vars": "off",
      "@typescript-eslint/no-unused-vars": [
        "warn",
        {
          argsIgnorePattern: "^_",
          varsIgnorePattern: "^_",
        },
      ],
      "no-console": "warn",
      "no-debugger": "warn",
      "vue/html-self-closing": "off",
      "vue/multi-word-component-names": "off",
      "vue/no-undef-properties": "error",
      "vue/require-v-for-key": "warn",
      "vue/block-order": [
        "warn",
        {
          order: [["script", "template"], "style"],
        },
      ],
      "vue/component-api-style": ["warn", ["script-setup", "composition"]],
    },
  },
  {
    files: ["**/*.{js,mjs,cjs,ts,tsx}"],
    ignores: ["**/*.d.ts"],
    languageOptions: {
      globals: {
        ...globals.browser,
      },
      parser: tsparser,
      parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module",
      },
    },
    plugins: {
      "@typescript-eslint": tseslint,
    },
    rules: {
      "no-unused-vars": "off",
      "@typescript-eslint/no-unused-vars": [
        "warn",
        {
          argsIgnorePattern: "^_",
          varsIgnorePattern: "^_",
        },
      ],
      "no-console": "warn",
      "no-debugger": "warn",
    },
  },
  {
    files: ["**/utils/Logger.ts"],
    rules: {
      "no-console": "off",
      "no-unused-vars": "off",
      "@typescript-eslint/no-unused-vars": "off",
    },
  },
];
