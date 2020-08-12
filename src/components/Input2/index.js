import React, { Component } from "react";

class Input2 extends Component {
  constructor(props) {
    super(props);
    this.handleChange2 = this.handleChange2.bind(this);
  }

  handleChange2({ target: { name, value } }) {
    //console.log(name, value, this.props);
    this.props.callback(name, value);
  }

  render() {
    const { type, value, name, label } = this.props;
    return (
      <input
        type={type ? type : "text"}
        name={name}
        value={value}
        label={label}
        onChange={this.handleChange2}
      />
    );
  }
}

export default Input2;
