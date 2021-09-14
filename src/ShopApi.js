import axios from "axios";
import {Setshop, shop} from "./redux/reducers/shop"
const baseURL = "https://fakestoreapi.com/";

export const loadCategorys = async (dispatch) => {
  const categorys = await axios
    .get(baseURL+ "products/categories")
    .then((res) => {
      const result = res.data;
      return result;
    });
  dispatch(Setshop(categorys));
};
