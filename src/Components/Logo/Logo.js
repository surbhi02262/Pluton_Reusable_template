import React, { Component } from "react";

class Logo extends Component {
  render() {
    const { image, content } = this.props;
    return (
      <div className="logo-bar">
        <img src={image} alt="/heart" />
        <div className="brand-name">{content}</div>
      </div>
    );
  }
}
export default Logo;
