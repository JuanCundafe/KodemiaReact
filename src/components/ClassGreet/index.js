import React, { Component } from "react";

import { Badge } from "reactstrap";

class ClassGreet extends Component {
  render() {
    return (
      <p>
        Hola {this.props.firstName} {this.props.lastName}
        <Badge color="secondary">Class component</Badge>
      </p>
    );
  }
}

export default ClassGreet;
