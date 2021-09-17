import axios from 'axios';

const baseURL = 'https://fakestoreapi.com/';

export const loadCategorys = async () => {
  const categorys = await axios.get(`${baseURL}products/categories`)
    .then((res) => {
      const result = res.data;
      return result;
    });
  return categorys;
};

export const LoadproductsByCategory = async (string) => {
  const category = await axios.get(`${baseURL}products/category/${string}`)
    .then((res) => {
      const result = res.data;
      return result;
    });
  return { value: category, key: string };
};
