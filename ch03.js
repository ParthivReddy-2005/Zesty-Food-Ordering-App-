import React from "react"
import ReactDOM from "react-dom/client"

const heading1 = React.createElement("div",{className:"title"},
    [React.createElement("h1",{key:1},"Parthiv Reddy Pelluru"),
    React.createElement("h2",{key:2},"Yogesh Reddy Pelluru"),
    React.createElement("h3",{key:3},"Anisha Reddy")]
);
const root1 = ReactDOM.createRoot(document.getElementById("root1"));
root1.render(heading1);

// React Element
//const heading = React.createElement("h1",{id:"heading"},"Hello Parthiv");
// react element
const HeadingComponent = () => <h1 className = "heading1">Namaste React Functional Component</h1>;
const element = <span>Namaste React Element</span>
const heading = (
     <h1>Hello Parthiv Using JSX</h1>      
);
// React Functional Component

const data = 1000;

// component composition
const HeadingComponent2 = () => (
    <div id ="container">
        <h1>{100+200}</h1>
        {data}
        <h2>{console.log("Parthiv loves Himself")}</h2>
        {HeadingComponent()}
        <HeadingComponent/>
        <HeadingComponent></HeadingComponent>
        <h1 className = "heading2">Hi This is Parthiv</h1>
    </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingComponent2/>);
