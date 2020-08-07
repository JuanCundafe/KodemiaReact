import React, { Component } from "react";

import "./List.css";
import { Container, Col, Row, ListGroupItem, ListGroup } from "reactstrap";

const elements = [{ text: "Text 1" }, { text: "Text 2" }, { text: "Text 3" }];

class List extends Component {
  render() {
    const UIElements = elements.map(({ text }, index) => {
      const upperText = text.toUpperCase();

      return (
        <ListGroupItem key={index} className="List-item">
          {upperText}
        </ListGroupItem>
      );
    });

    return (
      <Container>
        <Row>
          <Col>
            <ListGroup>{UIElements}</ListGroup>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default List;
