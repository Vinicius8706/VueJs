module.exports = {
  extends: [
   
      // add more generic rulesets here, such as:
    // 'eslint:recommended',
    'plugin:vue/vue3-recommended',
   
    // 'plugin:vue/recommended' // Use this if you are using Vue.js 2.x.
  ],
  parserOptions: {
    parser: 'babel-eslint',
    ecmaVersion: 6
  },
  "parser": "@babel/eslint-parser",
  rules: {
    'vue/multi-word-component-names': 'off',
  },

};