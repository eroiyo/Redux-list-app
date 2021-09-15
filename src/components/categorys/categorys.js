import { useSelector, useDispatch } from 'react-redux';
import React, { useEffect } from 'react';
import { loadCategorys } from '../../ShopApi';
import { Setshop } from '../../redux/reducers/shop';

const Categorys = () => {
  const categorys = useSelector((state) => state.shop);
  const dispatch = useDispatch();
  useEffect(async () => {
    const result = await loadCategorys();
    dispatch(Setshop(result));
  }, []);
  return (
    <div className="Categorys" >{categorys.map((cat) => {
      return (
        <div key={cat}>{cat}
        </div>
      );
    })} </div>
  );
};

export default Categorys;
