export const OrdersQuestions = [
  {
    id: 1,
    alt: 'Política de devolución',
    text: 'Política de devolución',
    respuesta: `Los clientes pueden solicitar una devolución hasta 10 días después de recibir su compra.<br /><br />
Condiciones de devolución:<br />
a. Los productos deben estar en su estado original, sin usar y con todas las etiquetas y embalajes originales.<br />
b. Se deben incluir todos los accesorios y componentes originales que vinieron con el producto.<br />
c. Los productos dañados o defectuosos serán elegibles para devoluciones o reemplazos, siempre que se notifique dentro del plazo de 10 días.<br /><br />
Proceso de devolución:<br />
a. El cliente debe comunicarse con el servicio de atención al cliente para iniciar el proceso de devolución dentro del plazo especificado.<br />
b. Se asignará una sucursal donde el cliente debe dejar el producto.<br />
c. Una vez recibido el producto devuelto, se inspeccionará para verificar su estado y cumplimiento con las condiciones de devolución.<br />
d. Si todo está en orden, se procederá a la devolución del importe pagado, ya sea a través del mismo método de pago utilizado o mediante una tarjeta de regalo/crédito para futuras compras.<br /><br />
Exclusiones:<br />
a. Algunos productos pueden estar excluidos de la política de devolución por razones de higiene, seguridad o regulaciones locales.<br />
b. Productos personalizados o hechos a medida pueden no ser elegibles para devolución, a menos que presenten defectos de fabricación.`,
    url: '/supportCenter/pedidos/politica-devolucion',
    handleback: '/supportCenter/pedidos',
  },
  {
    id: 2,
    alt: '¿Cómo cancelo mi pedido?',
    text: '¿Cómo cancelo mi pedido?',
    respuesta: ` Proceso de cancelación:<br />
a. Los clientes deben comunicarse con el servicio de atención al cliente tan pronto como sea posible para solicitar la cancelación del pedido.<br />
b. Se aceptarán las solicitudes de cancelación que se realicen dentro del plazo especificado, siempre y cuando el pedido no haya sido procesado ni enviado.`,
    url: '/supportCenter/pedidos/cancelar-pedido',
    handleback: '/supportCenter/pedidos',
  },
  {
    id: 3,
    alt: '¿Puedo modificar la información de mi pedido?',
    text: '¿Puedo modificar la información de mi pedido?',
    respuesta: `Política de Cambio de Información de un Pedido:<br /><br />
Plazo para solicitar cambios:<br />
Los clientes pueden solicitar cambios en la información de su pedido antes que el pedido sea despachado. Después de este plazo, los cambios no están garantizados y estarán sujetos a la discreción de la empresa.<br /><br />
Tipos de cambios permitidos:<br />
a. Cambio de dirección de envío: Los clientes pueden solicitar cambiar la dirección de envío siempre que el pedido aún no haya sido enviado. Si el pedido ya está en tránsito, no se podrá modificar la dirección de envío.<br />
b. Cambio de información personal: Los clientes pueden actualizar la información personal, como el nombre o número de teléfono de contacto.`,
    url: '/supportCenter/pedidos/modificacion-pedidos',
    handleback: '/supportCenter/pedidos',
  },
  {
    id: 4,
    alt: '¿Realizan facturas?',
    text: '¿Realizan facturas?',
    respuesta: `Política de Facturación de Ventas:<br /><br />
En M R Tienda generamos Factura Tipo C<br /><br />
Generación de Facturas:<br />
a. Todas las ventas realizadas a clientes, ya sean individuales o corporativos, estarán respaldadas por una factura oficial.<br />
b. Las facturas se generarán automáticamente una vez que se haya confirmado y procesado el pago de la compra.<br /><br />
Datos en la Factura:<br />
a. Las facturas contendrán información detallada, incluyendo el nombre y dirección del cliente, número de identificación fiscal (si corresponde), número de factura, fecha de emisión y detalles de los productos o servicios adquiridos.<br />
b. Los montos a pagar, impuestos aplicables y cualquier descuento o cargo adicional se especificarán claramente en la factura.<br /><br />
Modificación de Facturas:<br />
a. Una vez emitida la factura, no se realizarán modificaciones sin una justificación válida y previa autorización del departamento de contabilidad.<br />
b. Si es necesario corregir un error en la factura, se emitirá una nota de crédito o una factura de corrección, según lo permitan las regulaciones fiscales locales.<br /><br />
Asistencia al Cliente:<br />
a. Nuestro equipo de atención al cliente estará disponible para responder cualquier pregunta relacionada con la factura, proporcionar duplicados o resolver problemas relacionados con la facturación.<br /><br />
Cumplimiento Legal:<br />
a. Nos comprometemos a cumplir con todas las regulaciones fiscales y legales en relación con la facturación y la documentación contable.`,
    url: '/supportCenter/pedidos/facturacion',
    handleback: '/supportCenter/pedidos',
  },
];
