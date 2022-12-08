module.exports = {
    env: {
        browser: true,
        es2021: true,
    },
    extends: ["plugin:react/recommended", "google"],
    overrides: [],
    parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module",
    },
    plugins: ["react"],
    rules: {},
};

// module.exports = {
//     root: true,
//     extends: [
//         "plugin:@typescript-eslint/recommended",
//         "google",
//         // import 관련 규칙 모음
//         "plugin:prettier/recommended",
//         "prettier/@typescript-eslint",
//         "prettier/react",
//     ],
//     parser: "@typescript-eslint/parser",
//     parserOptions: {
//         ecmaVersion: "latest",
//         sourceType: "module",
//         project: ["./tsconfig.json"],
//     },
//     plugins: ["react", "@typescript-eslint"],
//     rules: {
//         "linebreak-style": 0,
//         "import/prefer-default-export": 0,
//         "import/extensions": 0,
//         "no-use-before-define": 0,
//         "import/no-unresolved": 0,
//         "react/react-in-jsx-scope": 0,
//         "import/no-extraneous-dependencies": 0,
//         "no-shadow": 0,
//         "react/prop-types": 0,
//         "react/jsx-filename-extension": [2, { extensions: [".js", ".jsx", ".ts", ".tsx"] }],
//         "jsx-a11y/no-noninteractive-element-interactions": 0,
//         "@typescript-eslint/explicit-module-boundary-types": 0,
//     },
//     settings: {
//         "import/resolver": {
//             node: {
//                 extensions: [".js", ".jsx", ".ts", ".tsx"],
//             },
//         },
//     },
// };
