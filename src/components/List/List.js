import './List.css';
import { useSelector, useDispatch } from 'react-redux';
import React, { useEffect } from 'react';
import Proptypes from 'prop-types';
import { Redirect } from 'react-router-dom';
import { LoadproductsByCategory } from '../../ShopApi';
import { Setproducts } from '../../redux/reducers/products';

const List = (props) => {
  const { show } = props;
  const products = useSelector((state) => state.products);
  const dispatch = useDispatch();
  let items = [];
  let category = '';

  if (show !== undefined) {
    category = show.cat.toLowerCase();
    if (products.get(category) !== undefined) {
      items = products.get(category);
    }
  } else {
    return <Redirect to="/" />;
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
        <div className="list-item" key={`list${category}${product.id}`}>
          <p className="list-item-name">{product.title}</p>
          <p className="list-item-price">{`${product.price}$`}</p>
        </div>
      ))}
      {' '}
    </div>
  );
};

List.displayName = 'Displayer';

List.defaultProps = {
  show: undefined,
};

List.propTypes = {
  show: Proptypes.shape(
    {
      cat: Proptypes.string,
      total: Proptypes.number,
      img: Proptypes.string,
    },
  ),
};
export default List;
