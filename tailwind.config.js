module.exports = {
  purge: [
    './src/**/*.html',
    './src/**/*.js',
    './src/**/*.jsx',
    './src/**/*.ts',
    './src/**/*.tsx',
    './public/index.html',
  ],
  theme: {
    extend: {
      backgroundImage: () => ({
        'wave-background': "url('wave-background.svg')",
      }),
    },
  },
  variants: {},
  plugins: [require('@tailwindcss/forms')],
}
