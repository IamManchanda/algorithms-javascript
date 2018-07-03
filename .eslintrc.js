module.exports = {
  env: {
    es6: true,
    browser: true,
  },
  extends: 'airbnb-base',
  rules: {
    // Personal Preferences below ... proffessionally may change 
    'arrow-body-style': 0, // Love Arrow Functions but not a fan of single liner functions!
    'func-names': 0, // Mainly for old school constructor functions
    'no-underscore-dangle': 0, // Preference for using Private Properties through ES6 Symbols in an Object
    'symbol-description': 0, // Preference for using Private Properties through ES6 Symbols in an Object
    'no-unused-vars': 0,
    'no-undef': 0,
    'no-trailing-spaces': 0,
    'no-unused-expressions': 0,
    'no-param-reassign': 0,
    // Never use these last 3 in a real application... I mean never!
    'no-alert': 0,
    'no-console': 0,
    'no-debugger': 0,
  },
};
