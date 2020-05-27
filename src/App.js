import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Link } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import NavBar from './components/Navbar/navbar'

function App() {
  return (
    <div className="App">
      <NavBar />
      <Grid container spacing={3}>
        <Grid item md={6}>
          <h1>Aud-Eng</h1>
          <h3>Find your solution</h3>
        </Grid>
        <Grid item md={6}>

        </Grid>
      </Grid>
    </div>
  );
}

export default App;
