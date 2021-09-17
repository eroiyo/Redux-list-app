import './List.css';
import { useSelector, useDispatch } from 'react-redux';
import React, { useEffect } from 'react';
import { LoadproductsByCategory } from '../../ShopApi';
import { Setproducts } from '../../redux/reducers/products';
import { Redirect } from "react-router-dom";

const List = (props) => {
  const { show } = props;
  const products = useSelector((state) => state.products);
  const dispatch = useDispatch();
  let items = [];
  let category = '';

  if (show !== undefined) {
    category = show.cat.toLowerCase();
    if (products.get(category) !== undefined) {
    // eslint-disable-next-line semi
      items = products.get(category)
    }
  } else {
    return <Redirect to={"/"} />
  }
  useEffect(async () => {
    let result;
    if (products.get(category) === undefined) {
      result = await LoadproductsByCategory(category);
      dispatch(Setproducts(result));
    }
  }, []);

  return (
    <div className="List">
      {items.map((product) => (
        <div>
          {product.title}
        </div>
      ))}
      {' '}
    </div>
  );
};

export default List;
