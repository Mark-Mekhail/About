import globals from "globals";
import pluginJs from "@eslint/js";
import pluginReact from "eslint-plugin-react";
import pluginJest from "eslint-plugin-jest";
import pluginCypress from "eslint-plugin-cypress/flat";


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
      cypress: pluginCypress,
      jest: pluginJest,
      js: pluginJs,
      react: pluginReact,
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
