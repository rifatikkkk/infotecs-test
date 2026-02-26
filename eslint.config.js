import featureSliced from "@conarti/eslint-plugin-feature-sliced";

export default [
  {
    files: ["src/**/*.{ts,tsx}"],
    plugins: { "@conarti/feature-sliced": featureSliced },
    rules: {
      ...featureSliced.configs.recommended.rules,
    },
  },
];
