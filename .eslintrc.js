module.exports = {
    "env": {
        "es2020": true,
        "node": true
    },
    "extends": [
        "eslint:recommended",
        "plugin:node/recommended",
        "airbnb-base",
        "prettier"
      ],
    "parserOptions": {
        "ecmaVersion": 12,
        "sourceType": "module"
    },
    "rules": {
        "import/extensions": "off",
        "linebreak-style": "off",
        "node/no-unsupported-features/es-syntax": "off",
        "no-underscore-dangle": "off",
        "import/prefer-default-export": "off"
      }
};
