/*
 * @Author: RONGWEI PENG
 * @Date: 2020-06-07 16:41:12
 * @LastEditors: Do not edit
 * @LastEditTime: 2020-06-07 16:57:38
 * @FilePath: /vuepress-starter/docs/.vuepress/config.js
 */

module.exports = {
  title: 'who else 的博客空间',
  description: 'who else',
  // 注入到当前页面的 HTML <head> 中的标签
  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }], // 增加一个自定义的 favicon(网页标签的图标)
  ],
  base: '/web_accumulate/', // 这是部署到github相关的配置 下面会讲
  markdown: {
    lineNumbers: true, // 代码块显示行号
  },

  themeConfig: {
    sidebarDepth: 2, // e'b将同时提取markdown中h2 和 h3 标题，显示在侧边栏上。
    lastUpdated: 'Last Updated', // 文档更新时间：每个文件git最后提交的时间
    repoLabel: 'github',
    // editLinks: true,
    docsDir: 'docs',
    //获取最后一次提交博客时间
    lastUpdated: true, // 最后更新时间
    displayAllHeaders: true, // 默认值：false
    // selectText: '选择语言',
    // editLinkText: '编辑此页',
    lastUpdated: '上次更新',
    locales: {
      '/': {
        label: '简体中文',
        selectText: '选择语言',
        lastUpdated: '上次更新',
        nav: [
          {
            text: '博文',
            // link: '/index/HTMLCSS/'
            items: [
              { text: 'html&css', link: '/index/html-css/css.md' },
              { text: 'javascript', link: '/index/javascript/javascript.md' },
              { text: 'nodejs', link: '/index/nodejs/nodejs.md' },
              { text: '其它', link: '/index/others/rap2.md' },
            ],
          },
          // {
          //   text: 'coding',
          //   link: 'https://prw1012.coding.net/user',
          // },
          {
            text: '码云',
            link: 'https://gitee.com/who-else',
          },
          {
            text: '掘金',
            link: 'https://juejin.im/user/5dd3e1e15188252a5842d292',
          },
          {
            text: 'github',
            link: 'https://github.com/prw1012/prw1012.github.io',
          },
          {
            text: 'whoelse',
            link: 'http://www.whoelse.top/',
          },
        ],
      },
    },
    sidebar: {
      // docs文件夹下面的accumulate文件夹 文档中md文件 书写的位置(命名随意)
      '/accumulate/': [
        '/accumulate/', // accumulate文件夹的README.md 不是下拉框形式
        {
          title: '侧边栏下拉框的标题1',
          children: [
            '/accumulate/JS/test', // 以docs为根目录来查找文件
            // 上面地址查找的是：docs>accumulate>JS>test.md 文件
            // 自动加.md 每个子选项的标题 是该md文件中的第一个h1/h2/h3标题
          ],
        },
      ],
      // docs文件夹下面的algorithm文件夹 这是第二组侧边栏 跟第一组侧边栏没关系
      '/algorithm/': [
        '/algorithm/',
        {
          title: '第二组侧边栏下拉框的标题1',
          children: ['/algorithm/simple/test'],
        },
      ],
    },
  },
};
