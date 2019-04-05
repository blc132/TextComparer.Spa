import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { BASE_URL } from './constans';
import axios from 'axios';

class App extends Component {


  onSave = () => {
    console.log(document.getElementById('textPattern').value)
    axios.post(BASE_URL + '/home/',
        { textPattern: document.getElementById('textPattern').value, 
          textsToCompare: document.getElementById('textsToCompare').value,
          splitText: document.getElementById('splitText').value }
    ).then(() => {
        console.log("Sukces")
    }).catch((error) => {
        console.log(error);
        window.alert("Błąd podczas wysyłania żądania")
    });
}


  render() {
    return (      
      <div className="App">
          <div className="left-container">
          <label>Tekst wzorcowy</label>
          <textarea id="textPattern" className="textPattern" rows="11" cols="25" placeholder="tekst wzorcowy"></textarea>
          <button className="btn btn-danger">Anuluj</button>
          </div>
          <img src={logo} className="App-logo" alt="logo" />
          <div className="right-container">
          <label>Teksty do porównania</label>
          <textarea id="textsToCompare" className="textsToCompare" rows="10" cols="25" placeholder="teksty do porównania"></textarea>
          <input id="splitText" className="splitText" placeholder="tekst rozdzielający"></input>
          <button className="btn btn-primary" onClick={this.onSave}>Porównaj</button>
          </div>
      </div>
    );
  }
}

export default App;
