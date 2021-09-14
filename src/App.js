import './App.css';
import { loadCategorys } from './ShopApi';
import { useSelector, useDispatch } from 'react-redux';
import React, { useEffect } from 'react';


const App = () => {
  const store = useSelector(state => state);
  useEffect(() => {
    if (store.length === 0) {
      loadMissions();
    }
  }, []);

  const dispatch =useDispatch();
  (loadCategorys(dispatch));
  console.log(store);
  return (
    <div className="App">
    </div>
  );
}

export default App;
