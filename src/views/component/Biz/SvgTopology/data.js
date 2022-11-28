// import miserables from "./miserables.json";
import multiGraph from './multigraph.json'

// const nodes = [
//   {
//     id: "1",
//     offerId: "0faee310e913cd42357c96cba23e7e63",
//     operationId: "6943a046dffd8116cdeb6bbb97994229",
//     title: "1",
//     icon: "edcs.svg",
//     ucode: "asg",
//     borderRadius: "0px",
//     requirements: [],
//     children: [
//       {
//         id: "2",
//         offerId: "1ff15de59a51716b53917bbb12198de3",
//         operationId: "504aded780cf7120db7bf20c25d75eca",
//         title: "2",
//         icon: "#icon-11",
//         ucode: "edc",
//         borderRadius: "0px",
//         requirements: []
//       }
//     ]
//   },
//   {
//     id: "3",
//     offerId: "1ff15de59a51716b53917bbb12198de3",
//     operationId: "504aded780cf7120db7bf20c25d75eca",
//     title: "3",
//     icon: "#icon-11",
//     ucode: "edc",
//     borderRadius: "0px",
//     requirements: []
//   }
// ];
// const links = [
//   {
//     from: "1",
//     to: "2",
//     arrow: true
//   },
//   {
//     from: "2",
//     to: "1",
//     arrow: true
//   },
//   {
//     from: "3",
//     to: "2",
//     arrow: true
//   },
//   {
//     from: "3",
//     to: "1",
//     arrow: true
//   }
// ];

// const nodes = [...miserables.nodes.map((i) => ({ id: i.id, title: i.id }))];

// const links = [
//   ...miserables.links.map((l) => ({
//     from: l.source,
//     to: l.target,
//     arrow: true,
//     success: [true, false][Math.floor(Math.random() * 2)]
//   }))
// ];
// const nodes = [
//   {
//     id: "1",
//     title: "1",
//     borderRadius: "0px",
//     children: [
//       {
//         id: "2",
//         title: "2",
//         borderRadius: "0px",
//         position: "bottom"
//       },
//       {
//         id: "3",
//         borderRadius: "0px",
//         title: "3",
//         position: "bottom"
//       }
//     ]
//   }
// ];
// const links = [
//   {
//     from: "1",
//     to: "2",
//     id: "link-1",
//     label: "1->211111111",
//     arrow: true
//   },
//   {
//     from: "2",
//     to: "1",
//     label: "2->1",
//     id: "link-2",
//     arrow: true
//   },
//   {
//     from: "2",
//     to: "1",
//     label: "2->1",
//     id: "link-3",
//     arrow: true
//   },
//   {
//     from: "1",
//     to: "3",
//     label: "1->3s",
//     id: "link-4",
//     arrow: true
//   },
//   {
//     from: "3",
//     to: "3",
//     id: "link-5",
//     arrow: true,
//     success: true
//   },
//   {
//     from: "3",
//     to: "3",
//     id: "link-6",
//     arrow: true
//   }
// ];

const { nodes, links } = multiGraph

export { nodes, links }
