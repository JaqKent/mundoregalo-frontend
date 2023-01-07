import {
  faBagShopping,
  faCircleDollarToSlot,
  faClockRotateLeft,
  faComment,
  faHouse,
  faPiggyBank,
  faRocket,
  faStar,
  faUser,
  faUserGroup,
} from '@fortawesome/free-solid-svg-icons';

export const DROPDOWN = [
  {
    id: 1, url: '/', icon: faHouse, name: 'Inicio',
  },
  {
    id: 2, url: 'https://www.google.com', icon: faPiggyBank, name: 'Ofertas',
  },
  {
    id: 3, url: 'https://www.google.com', icon: faRocket, name: 'Tendencias',
  },
  {
    id: 4, url: 'https://www.google.com', icon: faUserGroup, name: 'Servicios',
  },
  {
    id: 5, url: 'https://www.google.com', icon: faComment, name: 'Ayuda',
  },
  {
    id: 6, url: 'https://www.google.com', icon: faStar, name: 'Reseñas',
  },
];

export const LOGGED_USER_OPTIONS = [
  {
    id: 1, url: 'https://www.google.com', icon: faBagShopping, name: 'Mis Compras',
  },
  {
    id: 2, url: 'https://www.google.com', icon: faClockRotateLeft, name: 'Historial',
  },
  {
    id: 3, url: 'https://www.google.com', icon: faCircleDollarToSlot, name: 'MR Creditos',
  },
  {
    id: 4, url: 'https://www.google.com', icon: faUser, name: 'Mis Datos',
  },
];
