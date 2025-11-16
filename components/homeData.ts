
export interface Agent {
  id: string;
  name: string;
  phoneNumber: string;
}

export const agents: Agent[] = [
  {
    id: '1',
    name: 'Agent 1',
    phoneNumber: '+212600000001',
  },
  {
    id: '2',
    name: 'Agent 2',
    phoneNumber: '+212600000002',
  },
  {
    id: '3',
    name: 'Agent 3',
    phoneNumber: '+212600000003',
  },
  {
    id: '4',
    name: 'Agent 4',
    phoneNumber: '+212600000004',
  },
  {
    id: '5',
    name: 'Agent 5',
    phoneNumber: '+212600000005',
  },
];

export const modalDemos = [
  {
    title: "Standard Modal",
    description: "Full screen modal presentation",
    route: "/modal",
    color: "#007AFF",
  },
  {
    title: "Form Sheet",
    description: "Bottom sheet with detents and grabber",
    route: "/formsheet",
    color: "#34C759",
  },
  {
    title: "Transparent Modal",
    description: "Overlay without obscuring background",
    route: "/transparent-modal",
    color: "#FF9500",
  }
];

export type ModalDemo = typeof modalDemos[0];
