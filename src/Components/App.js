import React, { Component } from "react";
import Header from "./Header/Header";
import Banner from "./Banner/Banner";
import Whatwedo from "./Whatwedo/Whatwedo";
import Works from "./Works/Works";
import { workImage } from "./data";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Banner />
        <Whatwedo />
        <Works data={workImage} />
      </div>
    );
  }
}

export default App;
