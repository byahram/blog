const { description } = require('../../package');
const CONST = require("./list");

module.exports = {
  base: "/blog/",
  /** Ref：https://v1.vuepress.vuejs.org/config/#title */
  title: "Today I Learned",
  /** Ref：https://v1.vuepress.vuejs.org/config/#description */
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

    ['link', { rel: "apple-touch-icon", sizes: "180x180", href: "/favicons/apple-icon.png"}],
    ['link', { rel: "icon", type: "image/png", sizes: "32x32", href: "/favicons/favicon-32x32.png"}],
    ['link', { rel: "icon", type: "image/png", sizes: "16x16", href: "/favicons/favicon-16x16.png"}],
    ['link', { rel: "manifest", href: "/favicons/manifest.json"}],
    ['link', { rel: "shortcut icon", href: "/favicons/favicon.ico"}],
  ],

  /**
   * Theme configuration, here is the default theme configuration for VuePress.
   *
   * ref：https://v1.vuepress.vuejs.org/theme/default-theme-config.html
   */
  themeConfig: {
    repo: "",
    enableDarkMode: true,
    editLinks: false,
    docsDir: "docs",
    editLinkText: "Edit this page on Github",
    lastUpdated: false,
    smoothScroll: true,
    // logo: '/favicons/favicon-16x16.png',
    sidebar: [
      {
        title: "HTML",
        collapsable: true,
        children: CONST.HtmlList,
      },
      {
        title: "CSS",
        collapsable: true,
        children: CONST.CssList,
      },
      {
        title: "JavaScript",
        collapsable: true,
        children: CONST.JavaScriptList,
      },
      {
        title: "React",
        collapsable: true,
        children: CONST.ReactList,
      },
      // {
      //   title: "Flutter",
      //   collapsable: true,
      //   children: CONST.FlutterList,
      // },
      {
        title: "GSAP",
        collapsable: true,
        children: CONST.GsapList,
      },
      {
        title: "Laravel",
        collapsable: true,
        children: CONST.LaravelList,
      },
      {
        title: "IT Knowledge",
        collapsable: true,
        children: CONST.ITKnowledgeList,
      },
      // {
      //   title: "예상면접질문",
      //   collapsable: true,
      //   children: CONST.InterviewList,
      // },
      // {
      //   title: "BaekJoon",
      //   collapsable: true,
      //   children: CONST.BaekJoonList,
      // },
      // {
      //   title: "Programmers",
      //   collapsable: true,
      //   children: CONST.ProgrammersList,
      // },
    ],
    nav: [
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
    ],
  },

  /**
   * Apply plugins，ref：https://v1.vuepress.vuejs.org/zh/plugin/
   */
  plugins: [
    '@vuepress/plugin-back-to-top',
    '@vuepress/medium-zoom',
    '@vuepress/active-header-links',
    '@vuepress/back-to-top',
    '@vuepress/nprogress',
    '@vuepress/pwa',
    '@vuepress/register-components',
    '@vuepress/search', { searchMaxSuggestions: 10 },
    ["sitemap", { hostname: "https://byahram.github.io/blog/" }],
    '@vuepress/google-analytics', {
      'ga': '' // UA-00000000-0
    },
    // '@vuepress/last-updated', {
    //   transformer: (timestamp, lang) => {
    //     // Don't forget to install moment yourself
    //     const moment = require('moment')
    //     moment.locale(lang)
    //     return moment(timestamp).fromNow()
    //   }
    // }
  ]
}
