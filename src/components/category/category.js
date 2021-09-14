/* eslint-disable linebreak-style */
import { useSelector, useDispatch } from 'react-redux';
import React, { useEffect } from 'react';
import { LoadproductsByCategory } from '../../ShopApi';

const Category = () => {
  const products = useSelector((state) => state.products);
  const dispatch = useDispatch();

  console.log(products);

  useEffect(() => {
    LoadproductsByCategory(dispatch, 'jewelery');
  }, []);
  const items = products.get('jewelery');
  console.log(items);
  if (items === undefined) {
    return (
      <div className="Category">
        <div />
      </div>
    );
  }
  return (
    <div className="Category">
      <div>
        {' '}
        {items.map((item) => (
          <div key={item.id}>
            {item.name}
            {' '}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Category;
