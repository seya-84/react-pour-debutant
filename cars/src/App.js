import React, { Component } from "react";
import "./App.css";
import Mycars from "./components/MyCars";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Mycars />
      </div>
    );
  }
}

export default App;
