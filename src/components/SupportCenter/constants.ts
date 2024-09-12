import envios from '~assets/Envios.svg';
import info from '~assets/info.svg';
import pagos from '~assets/pagos.svg';
import pedidos from '~assets/pedidos.svg';
import productos from '~assets/productos.svg';

export const SECTIONS = [
  {
    id: 1,
    title: 'Nuestra Información',
    alt: 'nuestra informacion',
    img: info,
    text: 'Términos y condiciones - Sucursales - Contacto - Información',
    url: '/supportCenter/sobreNosotros',
  },
  {
    id: 2,
    title: 'Pagos',
    alt: 'pagos',
    img: pagos,
    text: 'Medios de Pagos - Rechazo de pago - Estafas',
    url: '/supportCenter/pagos',
  },
  {
    id: 3,
    title: 'Envíos',
    alt: 'envios',
    img: envios,
    text: 'Seguimiento - Demoras - Cálculo de entregas - Costos',
    url: '/supportCenter/envios',
  },
  {
    id: 4,
    title: 'Productos',
    alt: 'productos',
    img: productos,
    text: 'Precio publicado - Soporte y ayuda de productos',
    url: '/supportCenter/productos',
  },
  {
    id: 5,
    title: 'Pedidos',
    alt: 'pedidos',
    img: pedidos,
    text: 'Modificaciones - Devoluciones - Facturación',
    url: '/supportCenter/pedidos',
  },
];
