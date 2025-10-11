import { useState, useEffect } from "react";

const User = () => {
  const [userInfo, setuserInfo] = useState("null");
  useEffect(() => {
    fetchdata();
    const timer = setInterval(() => {
      console.log("Nameste React");
    }, 1000);

    return () => {
      clearInterval(timer);
    }
  }, []);
  const fetchdata = async () => {
    const data = await fetch("https://api.github.com/users/ParthivReddy-2005");
    const json = await data.json();
    setuserInfo(json);
  };
  const { name, location } = userInfo;

  return (
    <div className="user-card">
      <img src="https://avatars.githubusercontent.com/u/186088161?v=4" />
      <h2>Name: {name}</h2>
      <h3>Location: {location}</h3>
      <h4>Contact: parthivreddy.pelluru2005@gmail.com</h4>
    </div>
  );
};

export default User;
