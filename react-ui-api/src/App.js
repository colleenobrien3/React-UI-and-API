import React, { Component } from "react";
import "./App.css";
import Header from "./Header.js";
import Pic from "./Pic.js";
import Footer from "./Footer.js";

class App extends Component {
  constructor() {
    super();

    this.state = {
      // brands: [],
      brands: [],
      brand: ""
    };
  }

  // newPic = (event) => {
  //       this.setState({
  //         brand: data.attachments[0].text
  //       })
  //     );
  // };

  componentDidMount() {
    let url = "https://rickandmortyapi.com/api/character/";

    fetch(url)
      .then(res => res.json())
      // .then(data => {
      //   data.forEach(item => {
      //     console.log(item);
      //     brandsArray.push(item);
      //     console.log(brandsArray);
      //   });
      // })
      // .then(console.log(brandsArray))
      .then(data => {
        // console.log(data);
        this.setState({
          brands: data.results
        });
        // console.log(this.state.brands);
      });
  }

  render() {
    console.log(this.state.brands);
    return (
      <div className="App">
        <Header />

        <Pic info={this.state.brands} />
        <Footer />
      </div>
    );
  }
}

export default App;
