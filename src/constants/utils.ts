import { Product } from '~interfaces/Products';

export const getFormattedQuantity = (quantity: string | number) => {
  return quantity.toString().padStart(2, '0');
};

// utils.ts
export const filterProducts = (
  products: Product[],
  search: string
): Product[] => {
  const searchItem = search.toLowerCase();

  return products
    .filter((item) => {
      const name = item.description.toLowerCase();
      return searchItem && name?.includes(searchItem);
    })
    .slice(0, 10);
};
