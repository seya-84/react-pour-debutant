import React, { Component } from "react";
import "./App.css";
import Mycars from "./components/MyCars";

class App extends Component {

  state = {
    titre: 'Mon catalogue Voiture'
  }

  render() {
    return (
      <div className="App">
        <Mycars title={this.state.titre}/>
      </div>
    );
  }
}

export default App;
