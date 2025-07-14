import React from "react";
import ReactDOM from "react-dom/client";
const heading = document.createElement("h1");
heading.innerHTML ="hello world from javascript";
const root1 = document.getElementById("root1");
root1.appendChild(heading);

const parent = React.createElement("div",
    {id:"parent"},
    [React.createElement("div",
        {id:"child1"},
    [React.createElement("h1",{},"I'm h1"),
    React.createElement("h2",{},"I'm h2 tag")]),
    React.createElement("div",
        {id:"child2"},
    [React.createElement("h1",{},"I'm h1 tag"),
    React.createElement("h2",{},"I'm h2 tag")])]
    );
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
