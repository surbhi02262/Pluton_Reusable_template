import React, { Component } from "react";
import Logo from "../Logo/Logo";
import { Menus } from "../data";
import MenuList from "../MenuList/MenuList";
import Img from "../../Images/heart.jpg";

class Header extends Component {
  render() {
    return (
      <div className="header-container">
        <Logo image={Img} content="Pluton" />
        <MenuList data={Menus} />
      </div>
    );
  }
}
export default Header;
