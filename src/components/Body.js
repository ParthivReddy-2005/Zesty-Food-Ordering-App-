import RestaurantCard from "./RestaurantCard";
import { useState, useEffect,useContext } from "react";
//import Itemsdata from "./Itemsdata";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import userContext from "../utils/userContext";
const Body = () => {
  //local state variable - super powerful variable

  //Noraml JS function
  const [ListOfRestaurants, setListOfRestaurants] = useState([]);
  const [filterListOfRestaurants, setfilterListOfRestaurants] = useState([]);
  //const [ListOfItems,setListOfItems] = useState([]);
  const [SearchText, setSearchText] = useState("");
  const {userLoggedIn, setuserName} = useContext(userContext);
  useEffect(() => {
    fetchdata();
  }, []);
  const fetchdata = async () => {
    const data = await fetch(
      "https://corsproxy.io/https://www.swiggy.com/dapi/restaurants/list/v5?lat=14.4425987&lng=79.98645599999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    console.log(json);
    //optional Chaining
    //setListOfItems(json?.data?.cards[0]?.card?.card?.gridElements.infoWithStyle.info);
    setListOfRestaurants(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    console.log(ListOfRestaurants);
    setfilterListOfRestaurants(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };
  //conditional rendering
  const onlinestatus = useOnlineStatus();
  if (onlinestatus === false)
    return <h1>Please Check your Internet Connection</h1>;

  return ListOfRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter flex">
        <div className="search m-4 p-4 flex items-center gap-2">
          <input
            type="text"
            className="border border-solid border-black  py-2 rounded-lg"
            value={SearchText}
            onChange={(e) => setSearchText(e.target.value)}
          ></input>
          <button
            className="px-4 py-2 bg-green-100 rounded-lg"
            onClick={() => {
              const filterListOfRestaurants = ListOfRestaurants.filter((res) =>
                res.info.name.toLowerCase().includes(SearchText.toLowerCase())
              );
              setfilterListOfRestaurants(filterListOfRestaurants);
            }}
          >
            Search
          </button>
        </div>
        <div className="search m-4 p-4">
          <button
            className="flex px-2 py-2 bg-gray-100 rounded-lg"
            onClick={() => {
              const filteredRes = ListOfRestaurants.filter(
                (res) => res.info.avgRating > 4.1
              );
              setfilterListOfRestaurants(filteredRes);
            }}
          >
            Top Rated Restaurants
          </button>
        </div>
        <div className = "search m-4 p-4  flex items-center">
          <label>Username : </label>
          <input className = "border border-black p-1" 
          value = {userLoggedIn}
          onChange = {(e) => setuserName(e.target.value)} />
        </div>
      </div>
      <div className="flex flex-wrap">
        {filterListOfRestaurants.map((restaurant) => (
          <Link
            key={restaurant.info.id}
            to={"/restaurants/" + restaurant.info.id}
          >
            <RestaurantCard resData={restaurant} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
