const { description } = require("../../package");

module.exports = {
  base: "/blog/",       /** https://v1.vuepress.vuejs.org/config/#base */
  title: "Today I Learned",       /** Ref：https://v1.vuepress.vuejs.org/config/#title */
  description: description,       /** Ref：https://v1.vuepress.vuejs.org/config/#description */
  head: headConfigs(),        /** ref：https://v1.vuepress.vuejs.org/config/#head */

  /** https://v1.vuepress.vuejs.org/theme/default-theme-config.html */
  themeConfig: {
    repo: "",
    enableDarkMode: true,
    docsDir: "docs",
    lastUpdated: false,
    smoothScroll: true,
    sidebar: require('./sidebar'),
    nav: navConfigs(),
  },

  /** https://v1.vuepress.vuejs.org/zh/plugin/ */
  plugins: [
    ["sitemap", { hostname: "https://byahram.github.io/blog/", exclude: ['/404.html'], }],
    "@vuepress/plugin-back-to-top",
    "@vuepress/medium-zoom",
    "@vuepress/active-header-links",
    "@vuepress/back-to-top",
    "@vuepress/nprogress",
    "@vuepress/pwa",
    "@vuepress/register-components",
    "@vuepress/search",
    { searchMaxSuggestions: 10 },
    "@vuepress/google-analytics",
    {
      ga: "", // UA-00000000-0
    },
  ],
};

function navConfigs() {
  return [
    {
      text: "Ahram.K",
      link: "https://byahram.github.io/",
      target: "_blank",
    },
    {
      text: "Blog Github",
      link: "https://github.com/byahram/blog",
      target: "_blank",
    },
  ];
}

function headConfigs() {
  return [
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],

    ['link', { rel: "apple-touch-icon", sizes: "180x180", href: "/favicons/apple-icon.png"}],
    ['link', { rel: "icon", type: "image/png", sizes: "32x32", href: "/favicons/favicon-32x32.png"}],
    ['link', { rel: "icon", type: "image/png", sizes: "16x16", href: "/favicons/favicon-16x16.png"}],
    ['link', { rel: "manifest", href: "/favicons/manifest.json"}],
    ['link', { rel: "shortcut icon", href: "/favicons/favicon.ico"}],
  ];
}
