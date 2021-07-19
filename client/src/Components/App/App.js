import React from 'react';
import './App.css';
import Container from '@material-ui/core/Container';
import Navbar from '../Navbar.js';
import { Button, Paper } from '@material-ui/core';
function App() {
  return (
    <Container maxWidth="sm" className="App">
      <Paper>
        <Navbar />
        <Button onClick={()=>{console.log("Hello!")}} variant="contained" color="primary">
          Primary Button
        </Button>
        <Button variant="contained" color="secondary">
          Secondary Button
        </Button>
      </Paper>
    </Container>
  );
}
export default App;
