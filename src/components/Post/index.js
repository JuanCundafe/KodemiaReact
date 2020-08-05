import React from "react";

//CSS Reacstrap
import {
  Card,
  Button,
  CardImg,
  CardTitle,
  CardText,
  CardSubtitle,
  CardBody,
} from "reactstrap";

export default function Post({ title, subtitle, content, image }) {
  return (
    <Card>
      <CardImg top width="100%" src={image} alt="Card image cap" />
      <CardBody>
        <CardTitle>{title}</CardTitle>
        <CardSubtitle>{subtitle}</CardSubtitle>
        <CardText>{content}</CardText>
      </CardBody>
    </Card>
  );
}
