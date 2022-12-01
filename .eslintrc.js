module.exports = {
  "env": {
    "browser": true,
    "node": true,
    "es2021": true
  },
  "extends": [
    "airbnb",
    "plugin:react/recommended"
  ],
  "parserOptions": {
    "ecmaFeatures": {
      "jsx": true
    },
    "ecmaVersion": 12,
    "sourceType": "module"
  },
  "plugins": [
    "react"
  ],
  "rules": {
    "linebreak-style": 0,
    "no-param-reassign": 0,
    "react/jsx-props-no-spreading": 0,
    "import/no-named-as-default": 0,
    "react/require-default-props": 0
  }
};
