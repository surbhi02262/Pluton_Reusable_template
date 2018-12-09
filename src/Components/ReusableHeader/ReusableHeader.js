import React, { Component } from "react";

class ReusableHeader extends Component {
  render() {
    const { head, desc } = this.props;
    return (
      <div class="work-header">
        <h3>{head}</h3>
        <div className="subcontent-work">{desc}</div>
      </div>
    );
  }
}
export default ReusableHeader;
