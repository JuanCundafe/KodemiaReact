import React, { Component } from "react";

class Input extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange({ target: { name, value } }) {
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
        onChange={this.handleChange}
      />
    );
  }
}

export default Input;
