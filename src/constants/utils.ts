import { Department, Product } from '~interfaces/Products';

export const getFormattedQuantity = (quantity: string | number) => {
  return quantity.toString().padStart(2, '0');
};

export const filterProducts = (
  products: Product[],
  search: string,
  departments: Department[]
): Product[] => {
  const normalizedSearch = search.trim().toLowerCase();

  return products.filter((product) => {
    const nameMatch = product.name.toLowerCase().includes(normalizedSearch);

    const department = departments.find(
      (d) => d.internalId === product.department
    );

    const departmentMatch = department?.name
      .toLowerCase()
      .includes(normalizedSearch);

    const categoryMatch = department?.categories.some(
      (cat) =>
        cat.id === product.category &&
        cat.name.toLowerCase().includes(normalizedSearch)
    );

    return nameMatch || departmentMatch || categoryMatch;
  });
};
