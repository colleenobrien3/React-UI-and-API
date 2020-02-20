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
  };

  render() {
    return (
      <div id="main">
        <span id="pic">
          <div
            id="actualPic"
            // styles={{ backgroundImage: `url("${this.state.character}")` }}
          >
            Select a character from the navigation bar.
            <img src={this.state.character} />
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
