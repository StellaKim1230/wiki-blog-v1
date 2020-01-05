const navConfig = require('./configs/nav')
const sidebarConfig = require('./configs/sidebar')

module.exports = {
  title: 'Stella\'s wiki',
  description: 'Frontend engineer Stella\'s Study Note',
  themeConfig: {
    nav: navConfig,
    sidebar: sidebarConfig,
    displayAllHeaders: false,
  },
  plugins: [
    [
      '@vuepress/google-analytics',
      {
        'ga': 'G-693Q61XDK8'
      }
    ]
  ]
}