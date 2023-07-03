module.exports = {
    root: true,
    env: {
      node: true,
    },
    extends: ['eslint:recommended'],
    rules: {
      // Your ESLint rules and options
    },
    overrides: [
      {
        files: ['src/customer/**/*.js', 'src/customer/**/*.vue'],
        // Rules specific to the src/customer directory
        // You can define different rules or overrides here
      },
    ],
  };
  