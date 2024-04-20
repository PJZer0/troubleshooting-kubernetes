import PrismDark from './src/utils/prismDark';
import type { Config } from '@docusaurus/types';
// import { themes as prismThemes } from 'prism-react-renderer';

const beian = '蜀ICP备2021009081号-1'

const config: Config = {
  title: 'Kubernetes 排障指南', // 网站标题
  tagline: '云原生老中医带你飞', // slogan
  favicon: 'img/logo.svg', // 电子书 favicon 文件，注意替换

  url: 'https://imroc.cc', // 在线电子书的 url
  baseUrl: '/kubernetes/troubleshooting/', // 在线电子书所在 url 的路径，如果没有子路径，可改为 "/"

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'imroc', // GitHub 的 org/user 名称
  projectName: 'troubleshooting-kubernetes', // Github repo 名称

  onBrokenLinks: 'warn', // 避免路径引用错误导致编译失败
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    // 默认语言用中文
    defaultLocale: 'zh-CN',
    // 不需要多语言支持的话，就只填中文
    locales: ['zh-CN'],
  },

  plugins: [
    'docusaurus-plugin-sass', // 启用 sass 插件，支持 scss
    'plugin-image-zoom',
    [
      '@docusaurus/plugin-ideal-image',
      {
        disableInDev: false,
      },
    ],
    [
      '@docusaurus/plugin-pwa',
      {
        debug: false,
        offlineModeActivationStrategies: [
          'appInstalled',
          'standalone',
          'queryString',
        ],
        pwaHead: [
          { tagName: 'link', rel: 'icon', href: '/img/logo.png' },
          { tagName: 'link', rel: 'manifest', href: '/manifest.json' },
          { tagName: 'meta', name: 'theme-color', content: '#12affa' },
        ],
      },
    ],
    [
      /** @type {import('@docusaurus/plugin-content-docs').PluginOptions} */
      '@docusaurus/plugin-content-docs',
      ({
        id: 'skill',
        path: 'content/skill',
        // 文档的路由前缀
        routeBasePath: '/skill',
        // 左侧导航栏的配置
        sidebarPath: require.resolve('./content/skill/sidebars.ts'),
        // 每个文档左下角 "编辑此页" 的链接
        editUrl: ({ docPath }) =>
          `https://github.com/imroc/troubleshooting-kubernetes/edit/main/content/skill/${docPath}`,
      }),
    ],
    [
      /** @type {import('@docusaurus/plugin-content-docs').PluginOptions} */
      '@docusaurus/plugin-content-docs',
      ({
        id: 'methods',
        path: 'content/methods',
        // 文档的路由前缀
        routeBasePath: '/methods',
        // 左侧导航栏的配置
        sidebarPath: require.resolve('./content/methods/sidebars.ts'),
        // 每个文档左下角 "编辑此页" 的链接
        editUrl: ({ docPath }) =>
          `https://github.com/imroc/troubleshooting-kubernetes/edit/main/content/methods/${docPath}`,
      }),
    ],
    [
      /** @type {import('@docusaurus/plugin-content-docs').PluginOptions} */
      '@docusaurus/plugin-content-docs',
      ({
        id: 'cases',
        path: 'content/cases',
        // 文档的路由前缀
        routeBasePath: '/cases',
        // 左侧导航栏的配置
        sidebarPath: require.resolve('./content/cases/sidebars.ts'),
        // 每个文档左下角 "编辑此页" 的链接
        editUrl: ({ docPath }) =>
          `https://github.com/imroc/troubleshooting-kubernetes/edit/main/content/cases/${docPath}`,
      }),
    ],
  ],

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: false, // 禁用 preset 默认的 docs，直接用 plugin-content-docs 配置可以更灵活。
        blog: false, // 禁用博客
        theme: {
          customCss: require.resolve('./src/css/custom.scss'), // custom.css 重命名为 custom.scss
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // algolia 搜索功能
      // algolia: {
      //   appId: '7WGNV6HFP7',
      //   apiKey: 'f3bd4ef4fa5dbfa7494fc901311e584d',
      //   indexName: 'imroc-kubernetes',
      //   contextualSearch: false,
      // },
      // giscus 评论功能
      giscus: {
        repo: 'imroc/kubernetes-guide',
        repoId: 'R_kgDOG-4vhA',
        category: 'General',
        categoryId: 'DIC_kwDOG-4vhM4COPpN',
      },
      navbar: {
        title: 'Kuberntes 排障指南', // 左上角的电子书名称
        logo: {
          alt: 'Kubernetes',
          src: 'img/logo.svg', // 电子书 logo 文件，注意替换
        },
        items: [
          {
            label: '排障技能',
            position: 'right',
            to: '/skill',
          },
          {
            label: '排障方法',
            position: 'right',
            to: '/methods',
          },
          {
            label: '排障案例',
            position: 'right',
            to: '/cases',
          },
          {
            label: 'Kubernetes 实践指南',
            position: 'right',
            href: 'https://imroc.cc/kubernetes',
          },
          {
            href: 'https://github.com/imroc/troubleshooting-kubernetes',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      // 自定义页脚
      footer: {
        style: 'dark',
        links: [
          {
            title: '相关电子书',
            items: [
              {
                label: 'istio 实践指南',
                href: 'https://imroc.cc/istio',
              },
              {
                label: 'TKE 实践指南',
                href: 'https://imroc.cc/tke',
              },
              {
                label: 'Kubernetes 实践指南',
                href: 'https://imroc.cc/kubernetes',
              },
            ],
          },
          {
            title: '更多',
            items: [
              {
                label: 'roc 云原生',
                href: 'https://imroc.cc',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/imroc/troubleshooting-kubernetes',
              },
            ],
          },
        ],
        copyright: `Copyright ${new Date().getFullYear()} roc | All Right Reserved | <a href="http://beian.miit.gov.cn/">${beian}</a>`,
      },
      // 自定义代码高亮
      prism: {
        theme: PrismDark,
        magicComments: [
          {
            className: 'code-block-highlighted-line',
            line: 'highlight-next-line',
            block: { start: 'highlight-start', end: 'highlight-end' }
          },
          {
            className: 'code-block-add-line',
            line: 'highlight-add-line',
            block: { start: 'highlight-add-start', end: 'highlight-add-end' }
          },
          {
            className: 'code-block-update-line',
            line: 'highlight-update-line',
            block: { start: 'highlight-update-start', end: 'highlight-update-end' }
          },
          {
            className: 'code-block-error-line',
            line: 'highlight-error-line',
            block: { start: 'highlight-error-start', end: 'highlight-error-end' }
          },
        ],
        // languages enabled by default: https://github.com/FormidableLabs/prism-react-renderer/blob/master/packages/generate-prism-languages/index.ts#L9-L23
        // prism supported languages: https://prismjs.com/#supported-languages
        additionalLanguages: [
          'java',
          'json',
          'hcl',
          'bash',
          'diff',
        ],
      },
    }),
};

export default config;
