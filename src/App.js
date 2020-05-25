import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Link } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

function App() {
  return (
    <div className="App">
      <Grid container spacing={3}>
        <Grid item md={6}>
          <h1>Aud-Eng</h1>
          <h3>Find your solution</h3>
        </Grid>
        <Grid className="login-form" item md={6}>
          <h4>Login</h4>
          <form>
            <TextField variant="outlined"
                       placeholder="Username"
                       type="text"></TextField>
            <TextField variant="outlined"
                       placeholder="Password"
                       type="password"></TextField>
            <Button variant="contained"
                    color="#1D2228">Login</Button>
          </form>
          <Link to='/register'>Get registered here</Link>
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
