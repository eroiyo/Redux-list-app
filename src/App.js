import './App.css';
import Categorys from './components/categorys/categorys';
import Category from './components/category/category';


const App = () => {
  return (
    <div className="App">
      <Categorys />
      <Category category="electronics"/>
      <Category category="jewelery"/>
      <Category category="men's clothing"/>
      <Category category="women's clothing"/>
    </div>
  );
}

export default App;
