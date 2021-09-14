import { loadCategorys } from '../../ShopApi';
import { useSelector, useDispatch } from 'react-redux';
import React, { useEffect } from 'react';


const Categorys = () => {
    const categorys = useSelector(state => state.shop);
    const dispatch = useDispatch();
    if (categorys.length === 0) {
        loadCategorys(dispatch);
      }
      console.log(categorys)

  return (
    <div className="Categorys">
    </div>
  );
};

export default Categorys;