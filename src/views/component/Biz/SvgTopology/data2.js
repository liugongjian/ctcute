const nodes = [
  {
    id: '1',
    title: '1',
    borderRadius: '0px',
    children: [
      {
        id: '2',
        title: '2',
        borderRadius: '0px',
        position: 'bottom',
      },
      {
        id: '3',
        borderRadius: '0px',
        title: '3',
        position: 'bottom',
      },
    ],
  },
]
const links = [
  {
    from: '1',
    to: '2',
  },
  {
    from: '1',
    to: '3',
  },
]

export { nodes, links }
