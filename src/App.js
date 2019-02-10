import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
// import Tabview from "./component/Tabview";
import SearchPage from "./containers/SearchPage";

class App extends Component {
  render() {
    return (
      <div className="App">
        <SearchPage />



      </div>
    );
  }
}

export default App;
