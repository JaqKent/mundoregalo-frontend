import store from '~assets/tienda.svg';
import delivery from '~assets/fast-delivery.svg';
import payment from '~assets/payment-method.svg';
import articulo1 from '~assets/articulo1.jpg';
import articulo2 from '~assets/articulo2.jpg';

const masInfo = 'Mas Informacion';

export const SERVICES = [
    {
        id: 1,
        image: store,
        text1: 'PUNTO DE RETIRO',
        text2: masInfo,
    },
    {
        id: 2,
        image: delivery,
        text1: 'ENVIO A DOMICIO',
        text2: masInfo,
    },
    {
        id: 3,
        image: payment,
        text1: 'MEDIO DE PAGO',
        text2: masInfo,
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
