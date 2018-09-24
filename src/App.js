import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

import Travel from "./Travel";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">My Travel</h1>
        </header>
        <Travel
          destination="New York"
          country="USA"
          photo="https://images.musement.com/cover/0002/49/thumb_148242_cover_header.jpeg"
          distance="8000Km"
        />
        <Travel
          destination="Milano"
          country="Italy"
          photo="https://upload.wikimedia.org/wikipedia/commons/7/70/Milan_Cathedral_from_Piazza_del_Duomo.jpg"
          distance="800Km"
        />
      </div>
    );
  }
}

export default App;