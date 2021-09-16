/* eslint-disable linebreak-style */
import { useSelector, useDispatch } from 'react-redux';
import React, { useEffect } from 'react';
import { LoadproductsByCategory } from '../../ShopApi';
import { Setproducts } from '../../redux/reducers/products';

const Category = (props) => {
  const { category } = props;
  const products = useSelector((state) => state.products);
  const dispatch = useDispatch();
  let items = [];

  useEffect(async () => {
    const result = await LoadproductsByCategory(category)
    dispatch(Setproducts(result));
  }, []);
  if (products.get(category) !== undefined) {
    items = products.get(category);
  }
  console.log(products);
  return (
    <div className="Category">
      <div>
        {' '}
        {items.map((item) => (
          <div key={item.id}>
            {item.title}
            {' '}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Category;
