import React, { Component } from "react";

import "./SwitchExample.css";
import { render } from "@testing-library/react";
import { Row, Container, Badge, Button } from "reactstrap";

class SwitchExample extends Component {
  constructor(props) {
    super(props);
    this.state = {
      active: false,
    };
    this.handleClickSwitch = this.handleClickSwitch.bind(this);
  }

  handleClickSwitch() {
    const { active } = this.state;
    this.setState({
      active: !active,
    });
  }

  render() {
    const { active } = this.state;
    const color = active ? "primary" : "secondary";

    return (
      <>
        <Container>
          <Row>
            <p>
              <Badge color={color}>Holi</Badge>
            </p>
            <Button onClick={this.handleClickSwitch}>Switch Color!</Button>
          </Row>
        </Container>
      </>
    );
  }
}

export default SwitchExample;
