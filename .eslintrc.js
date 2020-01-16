module.exports = {
  'env': {
    'browser': true,
    'es6': true,
  },
  'globals': {
    'Atomics': 'readonly',
    'SharedArrayBuffer': 'readonly',
  },
  'parserOptions': {
    'ecmaVersion': 2018,
    'sourceType': 'module',
  },
  'plugins': ['immutable'],
  'rules': {
    'immutable/no-mutation': 2
  },
};
