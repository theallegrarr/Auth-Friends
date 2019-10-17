import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import Container from './components/Container';
import './App.css';

function App() {

  return (
    <Router>
      <Container />
    </Router>
  );
}

export default App;
