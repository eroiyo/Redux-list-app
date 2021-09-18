import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import React, { useEffect } from 'react';
import Proptypes from 'prop-types';
import { LoadproductsByCategory } from '../../ShopApi';
import { Setproducts } from '../../redux/reducers/products';

const Category = (props) => {
  const { category, image, setData } = props;
  const products = useSelector((state) => state.products);
  const dispatch = useDispatch();
  let items = [];

  useEffect(async () => {
    let result;
    if (products.get(category) === undefined) {
      result = await LoadproductsByCategory(category);
      dispatch(Setproducts(result));
    }
  }, []);
  if (products.get(category) !== undefined) {
    items = products.get(category);
  }

  const categoryDisplay = category.charAt(0).toUpperCase() + category.slice(1);

  const handleClick = () => {
    const result = { cat: categoryDisplay, img: props.image, total: items.length };
    setData(result);
  };

  return (
    <div className="Category">
      <div className="cat-image-container"><img src={image} className="imgcategory filtered" alt="category" /></div>
      <Link style={{ textDecoration: 'none' }} onClick={handleClick} to={`/product/${category.charAt(0).toUpperCase()}`} className="nav-link">
        <h2 className="cat-title">{categoryDisplay}</h2>
      </Link>
      <p className="num-products">{items.length}</p>

    </div>
  );
};

Category.displayName = 'Category';

Category.defaultProps = {
  setData: undefined,
  category: '',
  image: '',
};

Category.propTypes = {
  category: Proptypes.string,
  image: Proptypes.string,
  setData: Proptypes.func,
};

export default Category;
