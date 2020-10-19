const { description } = require('../../package')

module.exports = {
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#title
   */
  title: 'RevoGrid - Excel like data grid component',
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#description
   */
  description: description,

  /**
   * Extra tags to be injected to the page HTML `<head>`
   *
   * ref：https://v1.vuepress.vuejs.org/config/#head
   */
  head: [
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
    ['script', { src: 'https://unpkg.com/@revolist/revogrid@latest/dist/revo-grid/revo-grid.js' }],
    ['script', { src: 'https://unpkg.com/@revolist/revo-ui-avatar@latest/dist/revo-ui-avatar/revo-ui-avatar.js'}]
  ],
  /**
   * Theme configuration, here is the default theme configuration for VuePress.
   *
   * ref：https://v1.vuepress.vuejs.org/theme/default-theme-config.html
   */
  themeConfig: {
    repo: '',
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
      /* {
        text: 'Demo',
        link: '/config/'
      }, */
      {
        text: 'GitHub',
        link: 'https://github.com/revolist/revogrid'
      }
    ],
    sidebar: {
      '/guide/': [
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
                'column.resize'
              ]
            },
            {
              title: 'Cell properties',
              collapsable: false,
              children: [
                'cell.renderer',
                'cell.editor',
              ]
            },
            'sorting',
            'rows.pinned',
            'rows.class',
            'rows.headers',
            {
              title: 'Theme Manager',
              collapsable: false,
              children: ['theme', 'theme.light', 'theme.dark'],
            },
            'api',
          ]
        },
        {
          title: 'Frameworks',
          collapsable: false,
          children: [
            'framework.react',
            'framework.vue',
            'framework.ts'
          ]
        },
      ],
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
