import React, { Component } from "react";
import "./Header.css";

class Header extends Component {
  showNav = event => {
    document.querySelector("#navContainer").classList.toggle("hidden");
  };

  render() {
    return (
      <div id="header">
        <span id="headerText">Hamburger Wireframe</span>
        <span onClick={this.showNav}>Button</span>
      </div>
    );
  }
}

export default Header;
