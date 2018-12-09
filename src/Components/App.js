import React, { Component } from "react";
import Header from "./Header/Header";
import Banner from "./Banner/Banner";
import Whatwedo from "./Whatwedo/Whatwedo";
import Works from "./Works/Works";
import { workImage, whoWeAre, price } from "./data";
class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Banner />
        <Whatwedo />
        <Works
          data={workImage}
          template="WWI"
          styleContainer="work-container"
        />
        <Works data={whoWeAre} template="WWA" styleContainer="who-we-are" />
        <Works data={price} styleContainer="price" />
      </div>
    );
  }
}

export default App;
