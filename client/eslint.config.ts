import globals from "globals";

import pluginVue from "eslint-plugin-vue";
import tseslint from "@typescript-eslint/eslint-plugin";
import tsparser from "@typescript-eslint/parser";

export default [
  {
    files: ["**/*.vue"],
    languageOptions: {
      parser: pluginVue.processors[".vue"],
    },
  },
  ...pluginVue.configs["flat/essential"],
  {
    files: ["**/*.{js,mjs,cjs,ts,tsx,vue}"],
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
      "no-unused-vars": "warn",
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
];
