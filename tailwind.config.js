module.exports = {
  content: [
    './_includes/**/*.html',
    './_layouts/**/*.html',
    './*.html',
    './*.md',
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/typography')
  ]
};
