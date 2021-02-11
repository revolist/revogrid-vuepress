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
			'export.plugin',
			'api',
		]
	},
	frameworks,
];

module.exports = {
	guide,
	frameworksLinks
};
