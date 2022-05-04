const customTheme = require('@lando/vuepress-theme-default-plus');

module.exports = {
  lang: 'en-US',
  title: 'Lando',
  description: 'Lando Ruby Plugin Documentation',
  base: '/ruby/',
  head: [
    ['meta', {name: 'viewport', content: 'width=device-width, initial-scale=1'}],
    ['link', {rel: 'icon', href: '/ruby/favicon.ico', size: 'any'}],
    ['link', {rel: 'icon', href: '/ruby/favicon.svg', type: 'image/svg+xml'}],
    ['link', {rel: 'preconnect', href: '//fonts.googleapis.com'}],
    ['link', {rel: 'preconnect', href: '//fonts.gstatic.com', crossorigin: true}],
    ['link', {rel: 'stylesheet', href: '//fonts.googleapis.com/css2?family=Lexend:wght@500&display=swap'}],
  ],
  theme: customTheme({
    landoDocs: true,
    logo: '/images/icon.svg',
    docsDir: 'docs',
    docsBranch: 'main',
    repo: 'lando/ruby',
    sidebarHeader: {
      enabled: true,
      title: 'Ruby Plugin',
      icon: '/images/rubyicon.png',
    },
    sidebar: [
      {
        text: 'Getting Started',
        link: '/index.html',
      },
      '/config.html',
      '/caveats.html',
      '/support.html',
      {text: 'Examples', link: 'https://github.com/lando/ruby/tree/main/examples'},
      {text: 'Release Notes', link: 'https://github.com/lando/ruby/releases'},
      '/development.html',
    ],
  }),
};
