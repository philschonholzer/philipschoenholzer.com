module.exports = {
  arrowParens: 'avoid',
  semi: false,
  singleQuote: true,
  plugins: [require.resolve('prettier-plugin-astro')],
  overrides: [
    {
      files: '*.astro',
      options: {
        parser: 'astro',
      },
    },
  ],
}
