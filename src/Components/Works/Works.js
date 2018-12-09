import React, { Component } from "react";
import Img from "../../Images/heart.jpg";
import GridCompo from "../Grid/GridCompo";
import ReusableHeader from "../ReusableHeader/ReusableHeader";

class Works extends Component {
  render() {
    const { data, template, styleContainer } = this.props;
    return (
      <div className={styleContainer}>
        <div className="width-container">
          <ReusableHeader head={data.heading} desc={data.description} />

          {template &&
            template === "WWI" && (
              <div className="btn-container">
                <div className="all active">All</div>
                <div className="web">Web</div>
                <div className="photo">Photo</div>
                <div className="identity">Identity</div>
              </div>
            )}
          <GridCompo data={data} styles="gallery-container" />
        </div>
      </div>
    );
  }
}
export default Works;
