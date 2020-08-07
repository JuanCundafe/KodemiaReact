import React, { Component } from "react";

import "./BlogPosts.css";
import {
  Container,
  Col,
  Row,
  ListGroupItem,
  ListGroup,
  Badge,
} from "reactstrap";
import {
  Card,
  Button,
  CardImg,
  CardTitle,
  CardText,
  CardSubtitle,
  CardBody,
  CardGroup,
  CardDeck,
} from "reactstrap";

const posts = [
  {
    title: "Titulo 1",
    subtitle: "Subtitulo 1",
    content:
      "Some quick example text to build on the card title and make up the bulk of the card's content.",
    image: "https://blog.wildix.com/wp-content/uploads/2020/06/react-logo.jpg",
  },
  {
    title: "Titulo 2",
    subtitle: "Subtitulo 2",
    content:
      "Some quick example text to build on the card title and make up the bulk of the card's content.",
    image: "https://blog.wildix.com/wp-content/uploads/2020/06/react-logo.jpg",
  },
  {
    title: "Titulo 3",
    subtitle: "Subtitulo 3",
    content:
      "Some quick example text to build on the card title and make up the bulk of the card's content.",
    image: "https://blog.wildix.com/wp-content/uploads/2020/06/react-logo.jpg",
  },
];

class BlogPosts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeList: true,
    };
    this.state = {
      colorThing: true,
    };
    this.handleShowListClick = this.handleShowListClick.bind(this);
    this.handleColor = this.handleColor.bind(this);
  }

  handleShowListClick() {
    const { activeList } = this.state;
    this.setState({
      activeList: !activeList,
    });
  }

  handleColor() {
    const { colorThing } = this.state;
    this.setState({
      colorThing: !colorThing,
    });
  }

  render() {
    const { activeList } = this.state;
    const { colorThing } = this.state;
    const color = colorThing ? "primary" : "warning";

    let UIElements = posts.map(({ title, subtitle, content, image }) => {
      return (
        <Card>
          <CardImg top width="10%" src={image} alt="Card image cap" />
          <CardBody>
            <CardTitle>{title}</CardTitle>
            <CardSubtitle>
              {" "}
              <h4>{subtitle}</h4>
            </CardSubtitle>
            <CardText className="Text">{content}</CardText>
          </CardBody>
        </Card>
      );
    });

    if (!UIElements.length) {
      return (
        <Card>
          <h1 color="black">
            No hay <Badge color="danger">elementos</Badge>
          </h1>
        </Card>
      );
    }

    return (
      <Container>
        <Row className="Row2">
          <Col>{activeList ? <CardDeck>{UIElements}</CardDeck> : null}</Col>
        </Row>{" "}
        <Col>
          <Button onClick={this.handleColor} color={color}>
            {colorThing ? "Thing" : "Show List"}
          </Button>
          <Button onClick={this.handleShowListClick}>
            {activeList ? "Hide list" : "Show List"}
          </Button>
        </Col>
      </Container>
    );
  }
}

export default BlogPosts;
