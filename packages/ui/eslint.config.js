import reactConfig from "@workspace/eslint-config/react";
import { defineConfig } from "eslint/config";

export default defineConfig([
  ...reactConfig,
  {
    rules: {
      "react-refresh/only-export-components": "off",
    },
  },
]);
