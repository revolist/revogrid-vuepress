const { description } = require('../../package');
const { frameworksLinks, guide } = require('./config.guide');
// const { demo } = require('./config.demo');
const demo = [{
  title: 'Use cases',
  collapsable: false,
  children: ['', 'jsx.template', {
    title: 'Vanilla JS',
    collapsable: false,
    children: ['js.usage', 'select.column']
  }, {
    title: 'Vue',
    collapsable: false,
    children: ['list', 'selectAll', 'grouping', 'vue.store.data']
    }, {
      title: 'React',
      collapsable: false,
      children: ['react.sample']
  }, {
    title: 'Angular',
    collapsable: false,
    children: ['angular.sample']
}, {
  title: 'Svelte',
  collapsable: false,
  children: ['svelte.sample']
}]
}];


module.exports = {
  title: 'RevoGrid - Excel like data grid component',
  description,

  base: '/revogrid/',
  head: [
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
    ['meta', { name: 'viewport', content: 'width=device-width, initial-scale=1.0' }],
    ['link', { href: 'https://fonts.googleapis.com/css?family=Nunito:700, 400|Roboto:400,400i,700&display=swap', rel: 'stylesheet' }],
  ],
  themeConfig: {
    repo: 'https://github.com/revolist/revogrid',
    editLinks: false,
    docsDir: '',
    editLinkText: '',
    logo: '/logo.svg',
    frameworks: frameworksLinks,
    lastUpdated: false,
    nav: [
      {
        text: 'Documentation',
        link: '/guide/',
      },
      {
        text: 'Demo',
        link: '/demo/',
      }
    ],
    sidebar: {
      '/guide/': guide,
      '/demo/': demo,
    }
  },
  plugins: [
    '@vuepress/plugin-back-to-top',
    '@vuepress/plugin-medium-zoom',
  ]
}
