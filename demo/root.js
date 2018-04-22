import React, { Component } from "react";

import Demo from "./demo";

class Root extends Component {
  constructor(props) {
    super(props);

    this.state = {
      color: "#00ff00"
    };

    this.handleColorUpdate = this.handleColorUpdate.bind(this);
  }

  handleColorUpdate(color) {
    console.log(color);
    this.setState({ color });
  }

  render() {
    return <Demo {...this.state} onColorUpdate={this.handleColorUpdate} />;
  }
}

export default Root;
