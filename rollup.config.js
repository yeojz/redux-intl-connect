export default {
  input: 'src2/index.js',
  name: 'reduxIntlConnect',
  output: [
    {
      file: 'dist/index.js',
      format: 'cjs'
    },
    {
      file: 'dist/browser.js',
      format: 'iife'
    },
  ],
  external: [
    'invariant',
    'messageformat',
  ],
  globals: {
    invariant: 'invariant',
    messageformat: 'MessageFormat',
  },
  sourceMap: process.env.NODE_ENV === 'development'
};
