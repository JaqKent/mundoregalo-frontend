import { Form } from 'interfaces/interfaces';

export const SURVEY:Form[] = [
  {
    id: 1,
    question: 'Por favor califique la calidad de nuestro servicio en una escala del 1-5.',
    radio: true,
    inValue: [
      {
        type: 'radio',
        value: '1',
        name: 'points',
        label: '1',
      },
      {
        type: 'radio',
        value: '2',
        name: 'points',
        label: '2',
      },
      {
        type: 'radio',
        value: '3',
        name: 'points',
        label: '3',
      },
      {
        type: 'radio',
        value: '4',
        name: 'points',
        label: '4',
      },
      {
        type: 'radio',
        value: '5',
        name: 'points',
        label: '5',
      }],
  },
  {
    id: 2,
    question: '¿Volveria a usar nuestro servicio?',
    radio: true,
    inValue: [
      {
        type: 'radio',
        value: 'yes',
        name: 'points',
        label: 'si',
      },
      {
        type: 'radio',
        value: 'no',
        name: 'points',
        label: 'no',
      },

    ],
  },
  {
    id: 3,
    question: 'Como cree que podriamos mejorar nuestro servicio o alguna otra recomendacion',
    radio: false,
    inValue: [
      {
        type: 'textArea',
        value: '',
        name: 'points',
        label: '',
        placeholder: 'Recomendacion',

      },

    ],
  },
];
