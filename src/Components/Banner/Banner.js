import React, { Component } from "react";
import apple from "../../Images/apple.png";

class Banner extends Component {
  render() {
    return (
      <div className="banner-container">
        <div className="banner-content">
          <h4>Welcome to Pluton theme</h4>
          <h8>Clean and Responsive</h8>
          <div className="banner-contenet">
            This defines the default behavior for how flex items are laid out
            along the cross axis on the current line. Think of it as the
            justify-content version for the cross-axis (perpendicular to the
            main-axis).
          </div>
          <div class="read-more">Read More</div>
        </div>
      </div>
    );
  }
}
export default Banner;
