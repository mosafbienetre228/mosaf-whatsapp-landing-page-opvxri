
export interface Agent {
  id: string;
  name: string;
  phoneNumber: string;
}

export const agents: Agent[] = [
  {
    id: '1',
    name: 'Janni',
    phoneNumber: '+22892200932',
  },
  {
    id: '2',
    name: 'Yakouba Seydou',
    phoneNumber: '+22870149855',
  },
  {
    id: '3',
    name: 'Kortho Sophie',
    phoneNumber: '+22870880115',
  },
  {
    id: '4',
    name: 'Afoudji Kossi',
    phoneNumber: '+22891720434',
  },
  {
    id: '5',
    name: 'Bacharou Falilat',
    phoneNumber: '+22891335040',
  },
  {
    id: '6',
    name: 'Ali Hama',
    phoneNumber: '+22871278481',
  },
  {
    id: '7',
    name: 'Youssouf Seydou',
    phoneNumber: '+22899775015',
  },
  {
    id: '8',
    name: 'Abdoul-Fataou Mariama',
    phoneNumber: '+22893837290',
  },
  {
    id: '9',
    name: 'Morou Kadidjatou',
    phoneNumber: '+22893837401',
  },
  {
    id: '10',
    name: 'Halimatou Issa',
    phoneNumber: '+22872203659',
  },
  {
    id: '11',
    name: 'Balkissa Issa',
    phoneNumber: '+22890482440',
  },
  {
    id: '12',
    name: 'Moussa Hamani',
    phoneNumber: '+22898086697',
  },
  {
    id: '13',
    name: 'Daouda Abdoul Salam',
    phoneNumber: '+22891500917',
  },
  {
    id: '14',
    name: 'Dakonyeme Joseph',
    phoneNumber: '+22899757604',
  },
  {
    id: '15',
    name: 'Karim Ismaël',
    phoneNumber: '+22891156879',
  },
  {
    id: '16',
    name: 'Emilie Kety',
    phoneNumber: '+22898545917',
  },
  {
    id: '17',
    name: 'Hassane Ahmed',
    phoneNumber: '+22774627462',
  },
  {
    id: '18',
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
