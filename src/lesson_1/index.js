import React from "react";
import "../App.css";
import Clock from "./clock";
import Counter from "./counter";
import Tasks from "./task";
/// lesson 1 state
function Lesson() {
  return (
    <div className="App">
      <header className="App-header">
        <Clock />
        <Counter />
        <Tasks />
      </header>
    </div>
  );
}

export default Lesson;
