import globals from "globals";
import js from "@eslint/js";
import ts from "typescript-eslint";
import headers from "eslint-plugin-headers";

/** @type {import('eslint').Linter.Config[]} */
export default [
  { ignores: ["dist/**/*", "playground/**/*"] },
  { files: ["**/*.ts"] },
  { languageOptions: { globals: globals.node } },
  js.configs.recommended,
  ...ts.configs.recommended,
  {
    plugins: {
      headers,
    },
    files: ["src/**/*.ts"],
    ignores: ["dist/**/*"],
    rules: {
      "no-restricted-syntax": [
        "error",
        {
          selector: "CallExpression[callee.name='log']",
          message: "Use console.log() instead of log()",
        },
        {
          selector:
            "CallExpression[callee.object.name='program'][arguments.length>1]",
          message:
            "Chaque argument de 'program' doit être sur une ligne distincte.",
        },
      ],
      "headers/header-format": [
        "error",
        {
          source: "file",
          path: "header.txt",
          trailingNewlines: 2,
          variables: {
            year: new Date().getFullYear().toString(),
            author: "Cleboost",
          },
        },
      ],
    },
  },
];
