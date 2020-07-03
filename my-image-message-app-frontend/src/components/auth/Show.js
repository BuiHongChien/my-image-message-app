import React, { Component } from "react";

export default class Show extends React.Component {
  constructor() {
    super();
    this.state = {
      image: "Loading...",
    };
  }

  componentDidMount() {
    fetch("/show").then((res) => this.setState({ image: res.image }));
  }

  render() {
    return (
        <div className="page">
        <div className="show">
        <p className="h6 text-center mb-4 white-text">Here is your image message: </p>
        <img src={this.state.image}/>
    </div>
    </div>
    )
  }
}
