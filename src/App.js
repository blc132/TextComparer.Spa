import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { BASE_URL } from './constans';
import axios from 'axios';

class App extends Component {
  render() {
    return (
      
      <div className="App">
          <div className="left-container">
          <label>Tekst wzorcowy</label>
          <textarea className="textPattern" rows="11" cols="25" placeholder="tekst wzorcowy"></textarea>
          <button className="cancelButton" class="btn btn-danger">Anuluj</button>
          </div>
          <img src={logo} className="App-logo" alt="logo" />
          <div className="right-container">
          <label>Teksty do porównania</label>
          <textarea className="textsToCompare" rows="10" cols="25" placeholder="teksty do porównania"></textarea>
          <input className="splitText" placeholder="tekst rozdzielający"></input>
          <button class="btn btn-primary">Porównaj</button>
          </div>
      </div>
    );
  }
}

export default App;
