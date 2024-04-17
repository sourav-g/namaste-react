/*
    <div id="parent">
        <div id="child">
            <h1></h1>
            <h2></h2>
        </div>
    </div>
*/
import React from "react";
import ReactDOM from "react-dom/client";

const parent = React.createElement(
  "div",
  { id: "parent" },
  React.createElement("div", { id: "child" }, [
    React.createElement(
      "h1",
      {
        id: "heading1",
        dataman: "true",
        key: 1,
      },
      "Hello World from JS ! "
    ),
    React.createElement(
      "h2",
      {
        id: "heading2",
        dataman: "true",
        key: 2,
      },
      "Get ready to launch React ! 🚀"
    ),
    React.createElement(
      "p",
      {
        id: "para",
        dataman: "true",
        key: 3,
      },
      "☆*: .｡. o(≧▽≦)o .｡.:*☆"
    ),
  ])
);

//* parent is a JS Object
console.log(parent);
const root = ReactDOM.createRoot(document.getElementById("root"));

//* Render actually converts the object to h1 tag and put in DOM
root.render(parent);
