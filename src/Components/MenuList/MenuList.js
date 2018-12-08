import React, { Component } from "react";
import { Link } from "react-router-dom";

class MenuList extends Component {
  render() {
    const { data } = this.props;
    return (
      <div className="menu-container">
        <ul>
          {data.map(items => (
            <li>
              <Link to={items.link}>{items.name}</Link>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
export default MenuList;
