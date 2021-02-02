module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    'plugin:vue/vue3-strongly-recommended',
    'eslint:recommended',
    'prettier',
    'prettier/vue',
    '@vue/typescript',
    'plugin:vue-a11y/base'
  ],
  plugins: ['vue'],
}