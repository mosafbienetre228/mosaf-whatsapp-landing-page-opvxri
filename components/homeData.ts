
export interface Agent {
  id: string;
  name: string;
  phoneNumber: string;
}

export const agents: Agent[] = [
  {
    id: '1',
    name: 'Kadidjatou',
    phoneNumber: '+22893837401',
  },
  {
    id: '2',
    name: 'Falilat',
    phoneNumber: '+22891335040',
  },
  {
    id: '3',
    name: 'Mariama',
    phoneNumber: '+22893837290',
  },
  {
    id: '4',
    name: 'Sophie',
    phoneNumber: '+22890876346',
  },
  {
    id: '5',
    name: 'Joseph',
    phoneNumber: '+22899757604',
  },
  {
    id: '6',
    name: 'Seydou',
    phoneNumber: '+22870149855',
  },
  {
    id: '7',
    name: 'Issa',
    phoneNumber: '+22872203669',
  },
  {
    id: '8',
    name: 'Balkissa',
    phoneNumber: '+22890482440',
  },
  {
    id: '9',
    name: 'Daouda',
    phoneNumber: '+22891500917',
  },
  {
    id: '10',
    name: 'Tete',
    phoneNumber: '+22890105455',
  },
  {
    id: '11',
    name: 'Ismaël',
    phoneNumber: '+22891156879',
  },
  {
    id: '12',
    name: 'Youssouf Seydou',
    phoneNumber: '+22899775015',
  },
  {
    id: '13',
    name: 'Yakouba Seydou',
    phoneNumber: '+22870149855',
  },
  {
    id: '14',
    name: 'Emilie Kety',
    phoneNumber: '+22898545917',
  },
  {
    id: '15',
    name: 'Daouda Abdou Salam',
    phoneNumber: '+22891500917',
  },
  {
    id: '16',
    name: 'Hassane Ahmed',
    phoneNumber: '+22774627462',
  },
  {
    id: '17',
    name: 'Moussa Hamani',
    phoneNumber: '+22898086697',
  },
  {
    id: '18',
    name: 'Ali Hama',
    phoneNumber: '+22871278481',
  },
  {
    id: '19',
    name: 'Alpha Zibrila',
    phoneNumber: '+22892359186',
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
