import React, { useState } from 'react';
import {
  Redirect, Route, BrowserRouter, Switch,
} from 'react-router-dom';
import './App.css';
import Categorys from './components/categorys/categorys';
import Navbar from './components/Navbar/Navbar';
import Displayer from './components/Displayer/Displayer';
import Separator from './components/Separator/Separator';
import List from './components/List/List';

const App = () => {
  const [currentPosition, setData] = useState(undefined);

  return (
    <div className="App">
      <div className="container">
        <BrowserRouter>
          <Navbar setData={setData} />
          <Displayer show={currentPosition} />
          <Separator show={currentPosition} />
          <Switch>
            <Route exact path="/">
              <Categorys setData={setData} />
            </Route>
            <Route path="/product">
              <List show={currentPosition} />
            </Route>
            <Redirect to="/" />
          </Switch>
        </BrowserRouter>

      </div>
    </div>
  );
};
export default App;
