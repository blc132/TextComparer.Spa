import React, { Component } from 'react';
import logo from '../logo.svg';
import './HomePage.css';
import axios from 'axios';
import { Button } from 'react-bootstrap'

class HomePage extends Component {

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

    document.getElementById('App-logo').style.animationPlayState   = 'running';

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
      document.getElementById('result').value = response.data;
      document.getElementById('App-logo').style.animationPlayState   = 'paused';        
    }).catch((error) => {
      console.log(error);
      window.alert("Błąd podczas wysyłania żądania.")
      document.getElementById('App-logo').style.animationPlayState   = 'paused';
    });
}

  render() {
    return (
        <div className="HomePage">
          <div className="main-container">
              <div className="left-container">
                  <label>Tekst wzorcowy</label>
                  <textarea id="textPattern" className="textPattern" rows="13" cols="25" placeholder="tekst wzorcowy"></textarea>
                  <button className="btn btn-danger">Anuluj</button>
              </div>
              <div>
                <img src={logo} id="App-logo" className="App-logo" alt="logo" />
              </div>
                  <div className="right-container">
                  <label>Teksty do porównania</label>
                  <textarea id="textsToCompare" className="textsToCompare" rows="13" cols="25" placeholder="teksty do porównania"></textarea>
                  <input id="splitText" className="splitText" placeholder="tekst rozdzielający"></input>
                  <input id="apiAdress" defaultValue="https://localhost:44309/api/" className="apiAdress" placeholder="adres API"></input>
                  <button className="btn btn-primary" onClick={this.onSave}>Porównaj</button>
              </div>
            </div>
            <div className="down-container">
                <textarea id="result" className="result" placeholder="wynik"></textarea>
            </div>
        </div>
    );
  }
}

export default HomePage;