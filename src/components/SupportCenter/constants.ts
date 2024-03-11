import envios from '~assets/Envios.svg';
import info from '~assets/info.svg';
import pagos from '~assets/pagos.svg';
import pedidos from '~assets/pedidos.svg';
import productos from '~assets/productos.svg';

export const SECTIONS = [
  {
    id: 1,
    title: 'Envíos',
    alt: 'envios',
    img: envios,
    text: 'Seguimiento - Demoras - Cálculo de entregas - Costos',
  },
  {
    id: 2,
    title: 'Pedidos',
    alt: 'pedidos',
    img: pedidos,
    text: 'Modificaciones - Devoluciones - Facturación',
  },
  {
    id: 3,
    title: 'Pagos',
    alt: 'pagos',
    img: pagos,
    text: 'Medios de Pagos - Rechazo de pago - Estafas',
  },
  {
    id: 4,
    title: 'Productos',
    alt: 'productos',
    img: productos,
    text: 'Precio publicado - Soporte y ayuda de productos',
  },
  {
    id: 5,
    title: 'Nuestra Información',
    alt: 'nuestra informacion',
    img: info,
    text: 'Términos y condiciones - Sucursales - Contacto - Información',
  },
];
