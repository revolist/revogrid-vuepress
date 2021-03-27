const { description } = require('../../package');
const baseLink = 'guide/';
const svelteLink = 'framework.svelte.overview';
const vueLink = 'framework.vue.overview';
const reactLink = 'framework.react.overview';
const angularLink = 'framework.angular.overview';
const vue = {
  title: 'Vue',
	collapsable: false,
  children: [
    vueLink,
    'framework.vue.component',
    'framework.vue.editor',
    'framework.vue.webcomponent',
  ]
};

const svelte = {
  title: 'Svelte',
	collapsable: false,
  children: [
    svelteLink,
  ]
};

const react = {
  title: 'React',
	collapsable: false,
  children: [reactLink, 'framework.react.component']
};

const angular = {
  title: 'Angular 2+',
	collapsable: false,
  children: [
    angularLink,
    'framework.angular.webcomponent'
  ]
};

const frameworks = {
  title: 'Frameworks',
  collapsable: false,
  children: [
    vue,
    react,
    svelte,
    angular,
    'framework.ts',
  ]
};


const frameworksLinks = [{
	img: '/js.svg',
	url: baseLink,
},{
	img: '/vue.svg',
	url: `${baseLink}${vueLink}`,
},{
	img: '/react.svg',
	url: `${baseLink}${reactLink}`,
},{
	img: '/angular.svg',
	url: `${baseLink}${angularLink}`,
},{
	img: '/svelte.svg',
	url: `${baseLink}${svelteLink}`,
}];

const guide = [{
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
				title: 'Cells',
				collapsable: false,
				children: [
					'cell.renderer',
					'cell.editor',
					'cell.properties',
				]
			},
			'sorting',
			'filters',
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
			'jsx.template',
			'export.plugin',
			'grid.size',
			'migration',
			'api',
		]
	},
	frameworks,
];
const demo = [{
  title: 'Use cases',
  collapsable: false,
  children: ['', 'jsx.template', {
    title: 'Vanilla JS',
    collapsable: false,
    children: ['js.usage', 'select.column', 'jsx.tree']
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
