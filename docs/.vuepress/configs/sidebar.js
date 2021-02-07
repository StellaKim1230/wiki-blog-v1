const sidebarConfig = [
  ['/si-escape', 'SI 탈출 스토리'],
  {
    title: '회고록',
    children: [
      ['/2019-memoris', '2019년 회고록'],
      ['/2020-memoris', '2020년 회고록'],
    ],
  },
  {
    title: 'Programming',
    children: [
      ['/Programming/02.recursion', 'Recursion'],
    ],
  },
  {
    title: 'Algorithm',
    children: [['/Algorithm/01.trie', 'Trie']],
  },
  {
    title: 'Book reports',
    children: [
      [
        '/BookReport/01.interface-without-interface',
        '인터페이스 없는 인터페이스',
      ],
    ],
  },
  ['/web-accessibility', '웹 접근성'],
]

module.exports = sidebarConfig
