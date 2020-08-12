import React, { Component } from "react";

import Input from "../../components/Input";

class TemperatureConverter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      celsius: 0,
      fahrenheit: 0,
    };
    this.handlerTemperatureInput = this.handlerTemperatureInput.bind(this);
  }

  handlerTemperatureInput(name, value) {
    let cels, fahrs;
    if (name === "celsius") {
      cels = value;
      fahrs = ((value - 32) * 5) / 9;
    } else {
      fahrs = value;
      cels = value * (9 / 5) + 32;
    }
    this.setState({
      celsius: cels,
      fahrenheit: fahrs,
    });
  }

  render() {
    const { type, celsius, fahrenheit } = this.state;
    return (
      <div>
        <form>
          <Input
            type="number"
            name="celsius"
            value={celsius}
            label="celsius"
            callback={this.handlerTemperatureInput}
          />
          <Input
            type="number"
            name="fahrenheit"
            value={fahrenheit}
            label="fahrenheit"
            callback={this.handlerTemperatureInput}
          />
        </form>
      </div>
    );
  }
}

export default TemperatureConverter;
