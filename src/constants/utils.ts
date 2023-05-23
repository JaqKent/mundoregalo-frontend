export const getFormattedQuantity = (quantity: string | number) => {
    return quantity.toString().padStart(2, '0');
};
