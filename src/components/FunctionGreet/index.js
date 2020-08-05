import React from "react";

//CSS Reacstrap
import { Badge } from "reactstrap";

function Greet(props) {
  return (
    <p>
      Hola {props.firstName} {props.lastName}{" "}
      <Badge color="secondary">Class component</Badge>
    </p>
  );
}

export default Greet;
