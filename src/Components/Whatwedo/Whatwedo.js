import React, { Component } from "react";
import Img from "../../Images/heart.jpg";

class Whatwedo extends Component {
  render() {
    return (
      <div class="what-we-do-container">
        <div class="what">
          <h2>What we do? </h2>
          <div class="sub-head">
            This defines the default behavior for how flex items are laid out
            along the cross axis on the current line.
          </div>
          <div class="sajan">
            <div class="design-container">
              <img src={Img} alt="heart" />
              <div class="head">Modern Design</div>
              <div class="sub-head1">
                This defines the default behavior for how flex items are laid
                out along the cross axis on the current line.
              </div>
            </div>
            <div class="design-container">
              <img src={Img} alt="heart" />
              <div class="head">Modern Design</div>
              <div class="sub-head1">
                This defines the default behavior for how flex items are laid
                out along the cross axis on the current line.
              </div>
            </div>
            <div class="design-container">
              <img src={Img} alt="heart" />
              <div class="head">Modern Design</div>
              <div class="sub-head1">
                This defines the default behavior for how flex items are laid
                out along the cross axis on the current line.
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Whatwedo;
