import './App.css';
import { loadCategorys } from './ShopApi';
import { useDispatch } from 'react-redux';

const App = () => {
  const dispatch =useDispatch();
  console.log(loadCategorys(dispatch));
  return (
    <div className="App">
    </div>
  );
}

export default App;
