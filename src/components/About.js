import User from "./User";
import Userclass from "./Userclass";
import React from "react";
import userContext from "../utils/userContext";
class About extends React.Component {
    constructor(props){
        super(props);
        //console.log("Parent Constructor");
    }
    componentDidMount(){
        //console.log("Parent DidMount");
    }
    componentDidUpdate(){
        //console.log("component updated");
    }
    componentWillUnmount(){
        //console.log("component unmounted");
    }
    render(){
        {console.log("Parent rendered")};
        return (
        <div>
            <h1>About us</h1>
            <h1>This namaste react series</h1>
            <User name = {"Parthiv"} Location = {"Sri City"}/>
            <div>
                userLoggedIn
                <userContext.Consumer>
                    {({userLoggedIn}) => <h1 className = "font-bold">{userLoggedIn}</h1>}
                </userContext.Consumer>
            </div>
        </div>
    )
    }
};

export default About;