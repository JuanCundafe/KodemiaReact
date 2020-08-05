import React from "react";
import logo from "./logo.svg";
import "./App.css";
// Components
import Greet from "./components/FunctionGreet";
import ClassGreet from "./components/ClassGreet";
import Post from "./components/Post";

import { CardGroup } from "reactstrap";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <Greet firstName="Juan" lastName="Sol" />
      </header>
      <CardGroup>
        <Post
          title="Title 1"
          subtitle="Subtitle 1"
          content="This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.a"
          image="https://cdn-images-1.medium.com/focal/200/200/50/51/1*mEKg9oD1xDksPA6ay20gVw.jpeg"
        />

        <Post
          title="Title 2"
          subtitle="Subtitle 2"
          content="This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer."
          image="https://cdn-images-1.medium.com/fit/c/200/200/1*QDfCAiIKgkti2k0xckvUzQ.jpeg"
        />

        <Post
          title="Title 3"
          subtitle="Subtitle 3"
          content="This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer."
          image="https://cdn-images-1.medium.com/fit/c/200/200/0*zmUZpzIZrG11Uc6C"
        />
      </CardGroup>
    </div>
  );
}

export default App;
