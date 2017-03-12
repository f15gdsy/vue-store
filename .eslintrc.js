module.exports = {
  root: true,
  parser: 'babel-eslint',
  parserOptions: {
    sourceType: 'module'
  },
  extends: 'airbnb-base',
  'globals': {
    'window': true,
    'document': true
  },
  // add your custom rules here
  'rules': {
    // don't require .vue extension when importing
    'import/extensions': ['error', 'always', {
      'js': 'never',
    }],
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0,

    'arrow-parens': ['error', 'as-needed'],
    'class-methods-use-this': 1,
    'comma-dangle': ['error', 'never'],
    'no-console': 1,
    'no-param-reassign': 0,
    'semi': ['error', 'never'],
  }
}
