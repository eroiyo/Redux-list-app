import axios from "axios";
import Setshop from "./redux/reducers/shop"
const baseURL = "https://fakestoreapi.com/";

export const loadCategorys = async (dispatch) => {
  const categorys = await axios
    .get(baseURL+ "products/categories")
    .then((res) => {
      const result = res.data;
      return result;
    });
    console.log(categorys)
  dispatch(Setshop(categorys));
};
