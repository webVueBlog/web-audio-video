module.exports = {
	title: '哪吒源码分析博客',
	description: '哪吒源码分析博客',
	base: '/learn-source-analysis/',
	head: [
		['meta', {
			name: 'viewport',
			content: 'width=device-width,initial-scale=1,user-scalable=no'
		}]
	],
	plugins: [
		['@vuepress/active-header-links', {
			sidebarLinkSelector: '.sidebar-link',
			headerAnchorSelector: '.header-anchor'
		}],
		['@vuepress/back-to-top'],
		['@vuepress/medium-zoom'],
		['@vuepress/nprogress'],
	],
	themeConfig: {
		nav: [{
				text: 'vue源码分析',
				link: '/vue/'
			},
			{
				text: 'vuex源码分析',
				link: '/vuex/'
			},
			{
				text: 'axios源码分析',
				link: '/axios/'
			},
			{
				text: 'lodash源码分析',
				link: '/lodash/'
			},
		],
		sidebar: {
			'/vue/': [
				{
					title: 'vue源码分析',
					path: '/vue/'
				}
			],
			'/vuex/': [
				{
					title: 'vuex源码分析',
					path: '/vuex/'
				}
			],
			'/axios/': [
				{
					title: 'axios源码分析',
					collapsable: true,
					children: [
						{
							title: '',
							path: ''
						},
					]
				}
			],
			'/lodash/': [
				{
					title: 'lodash源码分析',
					path: '/lodash/'
				}
			],
		}
	}
}
