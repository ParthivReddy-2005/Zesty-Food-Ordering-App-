import {useState} from "react";
import ItemData from "./ItemData";
const RestaurantCategory = ({ data ,showItems,setshowIndex,dummy}) => {
  const handleClick = () => {
    setshowIndex();
  }
  return (
    <div className="mx-auto my-4 w-6/12 bg-gray-50 shadow-lg p-4">
      <div className = "flex justify-between cursor-pointer" onClick = {handleClick}>
        <span className="font-bold text-lg">
          {data.title} ({data.itemCards.length})
        </span>
        <span>⬇️</span>
      </div>
      {showItems && <ItemData items={data.itemCards} dummy = {dummy}/>}
    </div>
  );
};

export default RestaurantCategory;
