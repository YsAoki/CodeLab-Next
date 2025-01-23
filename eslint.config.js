import { FlatCompat } from "@eslint/eslintrc";
import { dirname } from "path";
import { fileURLToPath } from "url";
import eslintPluginImport from "eslint-plugin-import";
import eslintPluginReactHooks from "eslint-plugin-react-hooks";
import eslintPluginUnusedImports from "eslint-plugin-unused-imports";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  {
    files: ["**/*.{ts,tsx}"], // TypeScript ファイルのみ対象
    plugins: {
      import: eslintPluginImport,
      "react-hooks": eslintPluginReactHooks,
      "unused-imports": eslintPluginUnusedImports,
    },
    rules: {
      // import プラグインのルール
      "import/order": ["error", { groups: ["builtin", "external", "internal"] }],
      "import/no-unresolved": "error",

      // react-hooks プラグインのルール
      "react-hooks/rules-of-hooks": "error",
      "react-hooks/exhaustive-deps": "warn",

      // unused-imports プラグインのルール
      "unused-imports/no-unused-imports": "error",
      "unused-imports/no-unused-vars": [
        "warn",
        {
          vars: "all",
          varsIgnorePattern: "^_",
          args: "after-used",
          argsIgnorePattern: "^_"
        }
      ]
    }
  }
];

export default eslintConfig;
