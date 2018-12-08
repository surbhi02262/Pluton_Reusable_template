import React, { Component } from "react";

class Works extends Component {
  render() {
    const { data } = this.props;
    return (
      <div className="work-container">
        <div className="width-container">
          <div class="work-header">
            <h3>Have You Seen Our Works ?</h3>
            <div className="subcontent-work">
              Sub content is defined in either side of the content in all
              direction
            </div>
          </div>
          <div className="btn-container">
            <div className="all">All</div>
            <div className="web">Web</div>
            <div className="photo">Photo</div>
            <div className="identity">Identity</div>
          </div>
          <div className="work-imgg">
            {data.map(item => (
              <div className="mappp">
                <img src={item.imageUrl} alt="jjj" />
                <div className="subor">
                  <div className="head">{item.heading}</div>
                  <div className="subcontent">{item.imageSubcontent}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
}
export default Works;
