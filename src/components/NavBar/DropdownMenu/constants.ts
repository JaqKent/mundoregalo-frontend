export const DROPDOWN = [
  { id: 1, name: 'Mis Compras', requiresLoggedInUser: true },
  { id: 2, name: 'Historial', requiresLoggedInUser: true },
  { id: 3, name: 'Inicio', requiresLoggedInUser: false },
  { id: 4, name: 'Ofertas', requiresLoggedInUser: false },
  { id: 5, name: 'Trending', requiresLoggedInUser: false },
  {
    id: 6,
    name: 'Categorias',
    requiresLoggedInUser: false,
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
  {
    id: 7,
    name: 'Servicios',
    requiresLoggedInUser: false,
    submenu: [
      {
        name: 'Servicio 1',
        url: 'servicio 1',
      },
      {
        name: 'Servicio 2',
        url: 'servicio 2',
      },
      {
        name: 'Servicio 3',
        url: 'servicio 3',
      },
      {
        name: 'Servicio 4',
        url: 'servicio 4',
      },
    ],
  },
  { id: 8, name: 'MR Creditos', requiresLoggedInUser: true },
  { id: 9, name: 'Mis Datos', requiresLoggedInUser: true },
  { id: 10, name: 'Ayuda', requiresLoggedInUser: false },
  { id: 11, name: 'Sobre Nosotros', requiresLoggedInUser: false },

];
