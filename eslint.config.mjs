import globals from "globals";
import pluginCypress from 'eslint-plugin-cypress/flat'
import pluginJs from "@eslint/js";
import pluginReact from "eslint-plugin-react";
import pluginJest from "eslint-plugin-jest";


/** @type {import('eslint').Linter.Config[]} */
export default [
  {
    files: ["**/*.{js,mjs,cjs,jsx}"]
  },
  {
    languageOptions: {
      parserOptions: {
        ecmaFeatures: {
          jsx: true
        },
      },
      globals: {
        ...globals.browser,
        ...globals.jest,
        ...pluginCypress.configs.recommended.globals,
      }
    }
  },
  {
    settings: {
      react: {
        version: "detect"
      }
    }
  },
  {
    plugins: {
      js: pluginJs,
      react: pluginReact,
      jest: pluginJest,
    }
  },
  {
    rules: {
      ...pluginCypress.configs.recommended.rules,
      ...pluginJest.configs.recommended.rules,
      ...pluginJs.configs.recommended.rules,
      ...pluginReact.configs.flat.recommended.rules,
    }
  },
  {
    files: ["src/**/*.test.{js,jsx}"],
    rules: {
      "react/prop-types": "off",
      "react/display-name": "off",
    },
  }
];
