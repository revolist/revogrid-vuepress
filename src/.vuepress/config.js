const { description } = require('../../package');

const vue = {
  title: 'Vue',
  children: [
    'framework.vue.overview',
    'framework.vue.component',
    'framework.vue.webcomponent',
  ]
};

const react = {
  title: 'React',
  children: ['framework.react.overview', 'framework.react.component']
};

const frameworks = {
  title: 'Frameworks',
  collapsable: false,
  children: [
    vue,
    react,
    'framework.ts',
    'framework.angular.overview'
  ]
};

const guide = [
  {
    title: 'Documentation',
    collapsable: false,
    children: [
      '',
      'installing',
      {
        title: 'Column definitions',
        collapsable: false,
        children: [
          'column.properties',
          'column.pinned',
          'column.customHeader',
          'column.grouping',
          'autosize',
          'column.resize'
        ]
      },
      'column.types',
      {
        title: 'Cell properties',
        collapsable: false,
        children: [
          'cell.renderer',
          'cell.editor',
        ]
      },
      'sorting',
      {
        title: 'Row properties',
        collapsable: false,
        children: [
          'rows.pinned',
          'rows.class',
          'rows.headers',
          'rows.size'
        ]
      },
      {
        title: 'Theme Manager',
        collapsable: false,
        children: ['theme', 'theme.light', 'theme.dark'],
      },
      'api',
    ]
  },
  frameworks,
];

module.exports = {
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#title
   */
  title: 'RevoGrid - Excel like data grid component',
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#description
   */
  description: description,

  base: '/revogrid/',

  /**
   * Extra tags to be injected to the page HTML `<head>`
   *
   * ref：https://v1.vuepress.vuejs.org/config/#head
   */
  head: [
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
  ],
  /**
   * Theme configuration, here is the default theme configuration for VuePress.
   *
   * ref：https://v1.vuepress.vuejs.org/theme/default-theme-config.html
   */
  themeConfig: {
    repo: 'https://github.com/revolist/revogrid',
    editLinks: false,
    docsDir: '',
    editLinkText: '',
    logo: '/logo.svg',
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
    }
  },

  /**
   * Apply plugins，ref：https://v1.vuepress.vuejs.org/zh/plugin/
   */
  plugins: [
    '@vuepress/plugin-back-to-top',
    '@vuepress/plugin-medium-zoom',
  ]
}
