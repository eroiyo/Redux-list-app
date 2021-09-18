import './Categorys.css';
import { useSelector, useDispatch } from 'react-redux';
import React, { useEffect } from 'react';
import Proptypes from 'prop-types';
import { loadCategorys } from '../../ShopApi';
import { Setshop } from '../../redux/reducers/shop';
import Category from '../category/category';
import W from '../../imgs/w.svg';
import M from '../../imgs/m.svg';
import E from '../../imgs/e.svg';
import J from '../../imgs/j.svg';

const images = new Map([['electronics', E], ['jewelery', J], ["men's clothing", M], ["women's clothing", W]]);

const Categorys = (props) => {
  const { setData } = props;
  const categorys = useSelector((state) => state.shop);
  const dispatch = useDispatch();

  useEffect(async () => {
    const result = await loadCategorys();
    dispatch(Setshop(result));
  }, []);

  return (
    <div className="Categorys">
      {categorys.map((cat) => (
        <Category key={cat} category={cat} image={images.get(cat)} setData={setData} />
      ))}
      {' '}
    </div>
  );
};

Categorys.displayName = 'Categorys';

Categorys.defaultProps = {
  setData: undefined,
};

Categorys.propTypes = {
  setData: Proptypes.func,
};

export default Categorys;
