import antfu from '@antfu/eslint-config'

export default antfu({
  typescript: true,
  vue: true,
  ignores: [
    'node_modules',
  ],
  formatters: {
    css: true,
    html: true,
    markdown: 'prettier',
  },
})
