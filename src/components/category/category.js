/* eslint-disable linebreak-style */
import { useSelector, useDispatch } from 'react-redux';
import React, { useEffect } from 'react';
import { LoadproductsByCategory } from '../../ShopApi';
import { Setproducts } from '../../redux/reducers/products'

const Category = (props) => {
  const { category, image } = props;
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
  const categoryDisplay =category.charAt(0).toUpperCase() + category.slice(1)
  return (
    <div className="Category">
      <div className="cat-image-container"><img src={image} className="imgcategory filtered" /></div>
      <h2 className="cat-title">{categoryDisplay}</h2>
      <p className="num-products">{items.length}</p>
    </div>
  );
};

export default Category;
