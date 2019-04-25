import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';

class App extends Component {

  state = {
    baseUrl: "",
    textPattern: "",
    textsToCompare: "",
    splitText: ""
  };

  onSave = () => {
    this.baseUrl = document.getElementById('apiAdress').value;
    this.textPattern = document.getElementById('textPattern').value;
    this.textsToCompare = document.getElementById('textsToCompare').value;
    this.splitText = document.getElementById('splitText').value;

    console.log(this.baseUrl)
    axios.post(this.baseUrl + '/home/',
      {
        textPattern: this.textPattern,
        textsToCompare: this.textsToCompare,
        splitText: this.splitText
      }
    ).then((response) => {
      console.log("Sukces")
      console.log(response)
    }).catch((error) => {
      console.log(error);
      window.alert("Błąd podczas wysyłania żądania.")
    });
  }


  render() {
    return (
      <div className="App">
        <div className="left-container">
          <label>Tekst wzorcowy</label>
          <textarea id="textPattern" className="textPattern" rows="12" cols="25" placeholder="tekst wzorcowy"></textarea>
          <button className="btn btn-danger">Anuluj</button>
        </div>
        <img src={logo} className="App-logo" alt="logo" />
        <div className="right-container">
          <label>Teksty do porównania</label>
          <textarea id="textsToCompare" className="textsToCompare" rows="10" cols="25" placeholder="teksty do porównania"></textarea>
          <input id="apiAdress" className="apiAdress" placeholder="adres API"></input>
          <input id="splitText" className="splitText" placeholder="tekst rozdzielający"></input>
          <button className="btn btn-primary" onClick={this.onSave}>Porównaj</button>
        </div>
      </div>
    );
  }
}

export default App;
