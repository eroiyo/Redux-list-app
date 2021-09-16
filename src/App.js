import { Link, Router, BrowserRouter, Switch } from 'react-router-dom'
import './App.css';
import Categorys from './components/categorys/Categorys';
import Navbar from './components/Navbar/Navbar';
import Displayer from './components/Displayer/Displayer';
import Separator from './components/Separator/Separator';


const App = () => { 
  
  
  
  return (
  <div className="App">
    <div className="container">
    <BrowserRouter>
      <Navbar />
      <Displayer />
      <Separator />
      <Switch>
      <Categorys />
      </Switch>
</BrowserRouter>
      
    </div>
  </div>
)
}
export default App;
