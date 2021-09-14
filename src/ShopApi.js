import axios from 'axios';
import { Setshop } from './redux/reducers/shop';
import { Setproducts } from './redux/reducers/products';

const baseURL = 'https://fakestoreapi.com/';

export const loadCategorys = async (dispatch) => {
  const categorys = await axios
    .get(`${baseURL}products/categories`)
    .then((res) => {
      const result = res.data;
      return result;
    });
  dispatch(Setshop(categorys));
};

export const LoadproductsByCategory = async (dispatch, string) => {
  const category = await axios
    .get(`${baseURL}products/category/${string}`)
    .then((res) => {
      const result = res.data;
      return result;
    });
  dispatch(Setproducts({ value: category, key: string}));
};
