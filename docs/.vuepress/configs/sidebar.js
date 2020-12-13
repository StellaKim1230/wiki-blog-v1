const sidebarConfig = [
  ['/si-escape', 'SI 탈출 스토리'],
  ['/2019-memoirs', '2019년 회고록'],
  {
    title: 'Programming',
    children: [
      // ['/Programming/01.description-react-structure', 'React Structure'],
      ['/Programming/02.recursion', 'Recursion'],
    ],
  },
  {
    title: 'Algorithm',
    children: [
      ['/Algorithm/01.trie', 'Trie'],
    ],
  },
  {
    title: 'Book reports',
    children: [
      ['/BookReport/01.interface-without-interface', '인터페이스 없는 인터페이스'],
    ],
  },
]

module.exports = sidebarConfig
