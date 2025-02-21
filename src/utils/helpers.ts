import { Product } from "./constants";

export const getData = async () => {
  const response = await fetch("https://fakestoreapi.com/products");
  const data = await response.json();
  return data;
};

export const getCategories = (data: Product[]) => {
  let set = new Set(data.map((item) => item.category));
  return Array.from(set);
};

export const getFilteredData = (
  data: Product[],
  filters: string[],
  search: string
) => {
  return data
    .filter((item) =>
      item.title.toLocaleLowerCase().includes(search.toLocaleLowerCase())
    )
    .filter((item) =>
      filters.length > 0 ? filters.includes(item.category) : item
    );
};
