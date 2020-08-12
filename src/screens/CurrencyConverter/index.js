import React, { Component } from "react";

import Input2 from "../../components/Input2";

class CurrencyConverter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      quantityMXN: 0,
      quantityDLS: 0,
      test: 0,
    };
    this.handlerInput = this.handlerInput.bind(this);
  }

  handlerInput(name, value) {
    let mxn, dls;
    if (name === "quantityMXN") {
      mxn = value;
      dls = mxn / 22.42;
    } else {
      dls = value;
      mxn = dls * 22.24;
    }
    this.setState({
      quantityMXN: mxn,
      quantityDLS: dls,
    });
  }

  render() {
    const { quantityMXN, quantityDLS, test } = this.state;
    return (
      <div>
        <form>
          <Input2
            type="number"
            name="quantityMXN"
            value={quantityMXN}
            label="MXN"
            callback={this.handlerInput}
          />
          <Input2
            type="number"
            name="quantityDLS"
            value={quantityDLS}
            label="DLS"
            callback={this.handlerInput}
          />
        </form>
      </div>
    );
  }
}

export default CurrencyConverter;
