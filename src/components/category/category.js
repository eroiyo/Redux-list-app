/* eslint-disable linebreak-style */
import { useSelector, useDispatch } from 'react-redux';
import React, { useEffect } from 'react';
import { LoadproductsByCategory } from '../../ShopApi';
import { Setproducts } from '../../redux/reducers/products';

const Category = () => {
  const products = useSelector((state) => state.products);
  const dispatch = useDispatch();
  let items = [];

   useEffect(async () => {
    const result = await LoadproductsByCategory('jewelery');
    const completeresult = {value: result, string: 'jewelery' };
    dispatch(Setproducts(completeresult));
  }, []);
  sleep(1000);
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
