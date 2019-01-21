const navConfig = require('./configs/nav')
const sidebarConfig = require('./configs/sidebar')

module.exports = {
  title: 'Jieun\'s wiki',
  description: 'Frontend engineer Jieun\'s Study Note',
  themeConfig: {
    nav: navConfig,
    sidebar: sidebarConfig,
    displayAllHeaders: false,
  }
}