import React, { Component } from "react";

import "./BlogPosts.css";
import { Container, Col, Row, ListGroupItem, ListGroup } from "reactstrap";
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
  render() {
    const UIElements = posts.map(({ title, subtitle, content, image }) => {
      return (
        <Card>
          <CardImg top width="10%" src={image} alt="Card image cap" />
          <CardBody>
            <CardTitle className="Text">{title}</CardTitle>
            <CardSubtitle className="Text">{subtitle}</CardSubtitle>
            <CardText className="Text">{content}</CardText>
          </CardBody>
        </Card>
      );
    });

    return <CardDeck horizontal>{UIElements}</CardDeck>;
  }
}

export default BlogPosts;
