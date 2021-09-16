/* eslint-disable linebreak-style */
import { useSelector, useDispatch } from 'react-redux';
import React, { useEffect } from 'react';
import { LoadproductsByCategory } from '../../ShopApi';
import { Setproducts } from '../../redux/reducers/products';
import 

const Category = (props) => {
  const { category } = props;
  const products = useSelector((state) => state.products);
  const dispatch = useDispatch();
  let items = [];

  useEffect(async () => {
    let result;
    if (products.get(category) === undefined) {
      result = await LoadproductsByCategory(category);
    }
    dispatch(Setproducts(result));
  }, []);
  if (products.get(category) !== undefined) {
    items = products.get(category);
  }
  return (
    <div className="Category">
      <h2 className="cat-title">{category}</h2>
      <p className="num-products">{items.length}</p>
    </div>
  );
};

export default Category;
