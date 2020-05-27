import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import NavBar from './components/Navbar/navbar';
import Home from './components/Home/home';
import Register from './components/Register/register';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Switch>
        <Route exact path='/' render={() => <Home/>}/>
        <Route exact path='/register' render={() => <Register/>}/>
      </Switch>
    </div>
  );
}

export default App;
