import React, { Component } from "react";
import Nav from "./Nav.js";
import "./Pic.css";

class Pic extends Component {
  constructor(props) {
    super(props);
    this.state = {
      character: ""
    };
  }
  changePic = event => {
    this.setState({ character: this.props.info[event.target.id].image });
    console.log(this.state.character);
    document
      .querySelectorAll(".navButton")
      .forEach(item => item.classList.remove("selected"));
    event.target.classList.toggle("selected");
  };

  render() {
    return (
      <div id="main">
        <span id="pic">
          <div
            id="actualPic"
            // styles={{ backgroundImage: `url("${this.state.character}")` }}
          >
            <img
              src={this.state.character}
              alt="Select a character from the navigation bar."
            />
          </div>
        </span>
        <span id="navContainer" className="hidden">
          <div id="0" className="navButton" onClick={this.changePic}>
            CharacterOne
          </div>
          <div id="1" className="navButton" onClick={this.changePic}>
            CharacterTwo
          </div>
          <div id="2" className="navButton" onClick={this.changePic}>
            CharacterThree
          </div>
          <div id="3" className="navButton" onClick={this.changePic}>
            CharacterFour
          </div>
        </span>
      </div>
    );
  }
}

export default Pic;
