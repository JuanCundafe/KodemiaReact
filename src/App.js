import React from "react";
import "./App.css";
// Screens
//<BlogNotes />
import BlogNotes from "./screens/NotesBlog";
import TemperatureConverter from "./screens/TemperatureConverter";
import CurrencyConverter from "./screens/CurrencyConverter";
function App() {
  return (
    <div className="App">
      <TemperatureConverter />
      <CurrencyConverter />
    </div>
  );
}
export default App;
