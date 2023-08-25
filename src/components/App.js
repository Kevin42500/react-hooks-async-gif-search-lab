import React, { Component } from 'react';
import './App.css';
import NavBar from './NavBar';
import GifListContainer from './GifListContainer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        <GifListContainer />
      </div>
    );
  }
}

export default App;
