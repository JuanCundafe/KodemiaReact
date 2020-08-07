import React from "react";
import "./App.css";
import SwitchExample from "./components/SwitchExample";
import List from "./components/List";
import BlogPosts from "./components/BlogPosts";

function App() {
  return (
    <div className="App">
      <SwitchExample />
      <List />
      <BlogPosts />
    </div>
  );
}

export default App;
