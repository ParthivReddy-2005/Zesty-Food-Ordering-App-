import RestaurantCard from "./RestaurantCard";
import {useState} from "react";
import resList from "../utils/mockData";
const Body = () => {
    //local state variable - super powerful variable

    //Noraml JS function
  const arr = useState(resList);
  const [ListOfRestaurants,setListOfRestaurants] = arr;
  return (
    <div className="body">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            const filteredList = ListOfRestaurants.filter((res) => res.info.avgRating > 4);
            setListOfRestaurants(filteredList);
            console.log(ListOfRestaurants);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="res-container">
        {ListOfRestaurants.map((restaurant) => (
          <RestaurantCard key={restaurant.info.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
