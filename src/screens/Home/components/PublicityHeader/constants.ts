import delivery from '~assets/fast-delivery.svg';
import articulo1 from '~assets/middleBaner1.png';
import articulo2 from '~assets/middleBaner2.png';
import payment from '~assets/payment-method.svg';
import store from '~assets/tienda.svg';

export const SERVICES = [
  {
    id: 1,
    image: store,
    text1: 'Retiro de sucursal',
  },
  {
    id: 2,
    image: delivery,
    text1: 'Envio a domicilio',
  },
  {
    id: 3,
    image: payment,
    text1: 'Pago con tarjeta y transferencia',
  },
];

export const BANNER = [
  {
    id: 4,
    image: articulo1,
  },
  {
    id: 5,
    image: articulo2,
  },
];
