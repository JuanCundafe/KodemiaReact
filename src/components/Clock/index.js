import React, { Component } from "react";

import { Badge, Button, Container } from "reactstrap";

class Clock extends Component {
  constructor(props) {
    super(props);
    this.state = {
      initialDate: new Date().toLocaleTimeString(),
      date: new Date().toLocaleTimeString(),
      color: "primary",
      text: "normal",
      counter: 1,
      colorButton: "warning",
      colorBoolean: false,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    setInterval(() => {
      this.setState({
        date: new Date().toLocaleTimeString(),
      });
    }, 1000);

    setTimeout(() => {
      this.setState({
        color: "warning",
        text: "cambió",
      });
    }, 3000);
  }

  handleClick() {
    let { counter } = this.state;
    counter = counter + 1;
    if (this.state.colorBoolean === true) {
      this.setState({
        colorButton: "warning",
        colorBoolean: false,
      });
    } else {
      this.setState({
        colorButton: "primary",
        colorBoolean: true,
      });
    }
    this.setState({
      counter,
    });
  }

  render() {
    return (
      <>
        <h1>
          <Badge color={this.state.color}>{this.state.text}</Badge>
        </h1>
        <Container>
          <p>
            <Badge color={this.color}>{this.state.counter} </Badge>
          </p>
          <Button color={this.state.colorButton} onClick={this.handleClick}>
            Add
          </Button>
        </Container>
        <h1>{this.state.initialDate}</h1>
        <h1>{this.state.date}</h1>
      </>
    );
  }
}

export default Clock;
