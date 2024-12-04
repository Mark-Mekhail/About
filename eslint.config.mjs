import globals from "globals";
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
      ...pluginJs.configs.recommended.rules,
      ...pluginReact.configs.flat.recommended.rules,
      ...pluginJest.configs.recommended.rules,
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
