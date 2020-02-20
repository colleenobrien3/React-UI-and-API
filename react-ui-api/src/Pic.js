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
            <img src={this.state.character} />
            Pic
          </div>
        </span>
        <span id="navContainer">
          <div id="0" onClick={this.changePic}>
            CharacterOne
          </div>
          <div id="1" onClick={this.changePic}>
            CharacterTwo
          </div>
          <div id="2" onClick={this.changePic}>
            CharacterThree
          </div>
          <div id="3" onClick={this.changePic}>
            CharacterFour
          </div>
        </span>
      </div>
    );
  }
}

export default Pic;
