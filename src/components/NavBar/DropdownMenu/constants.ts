import { Items } from 'interfaces/interfaces';

export const DROPDOWN:Items[] = [
  { id: 1, name: 'Mis Compras', requiresLoggedInUser: true },
  { id: 2, name: 'Historial', requiresLoggedInUser: true },
  { id: 3, name: 'Inicio' },
  { id: 4, name: 'Ofertas' },
  { id: 5, name: 'Trending' },
  {
    id: 6,
    name: 'Categorias',
    submenu: [
      {
        name: 'Categoria 1',
        url: 'Categoria 1',
      },
      {
        name: 'Categoria 2',
        url: 'Categoria 2',
      },
      {
        name: 'Categoria 3',
        url: 'Categoria 3',
      },
      {
        name: 'Categoria 4',
        url: 'Categoria 4',
      },
    ],
  },
  { id: 8, name: 'MR Creditos', requiresLoggedInUser: true },
  { id: 9, name: 'Mis Datos', requiresLoggedInUser: true },
  { id: 10, name: 'Ayuda' },
  { id: 11, name: 'Sobre Nosotros' },

];
