import React from "react";

class Userclass extends React.Component {
  constructor(props) {
    super(props);
    console.log("Child Constructor");
    this.state = {
      userInfo: {
        name : "dummy",
        location: "default location",
      }
    };
  }
  async componentDidMount(){
    //console.log("child DidMount");
    const data = await fetch("https://api.github.com/users/ParthivReddy-2005")
    const json = await data.json();
    this.setState({
      userInfo: json,
    });
  }
  render() {
    //console.log("Child Rendered")
    const {name,location,avtar_url} = this.state.userInfo;
    return (
      <div className="user-card">
        <img src = "https://avatars.githubusercontent.com/u/186088161?v=4"/>
        <h2>Name: {name}</h2>
        <h3>Location: {location}</h3>
        <h4>Contact: parthivreddy.pelluru2005@gmail.com</h4>
      </div>
    );
  }
}

export default Userclass;
