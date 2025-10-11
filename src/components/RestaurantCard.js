import {REST_URL} from "../utils/constants.js";
import {useContext} from "react"
import userContext from "../utils/userContext.js";
const RestaurantCard = (props) => {
    const {resData} = props;
    const {cloudinaryImageId,name,cuisines,avgRating,costForTwo,deliveryTime} = resData?.info
    const {userLoggedIn} = useContext(userContext);
    return(
        <div className = "m-4 p-4 w-[250px] h-[500px] rounded-lg bg-gray-100 hover:bg-gray-200">
            <img 
            className = "rounded-lg w-[250px] h-[250px]"
            alt = "res-logo"
            src = {REST_URL + resData.info.cloudinaryImageId}/>
            <h3 className = "font-bold py-4 text-lg">{name}</h3>
            <h4>{cuisines.join(", ")}</h4>
            <h4>{avgRating} stars</h4>
            <h4>{costForTwo}</h4>
            <h4>{deliveryTime}</h4>
            <h4>{userLoggedIn}</h4>
        </div>
    );
};

export default RestaurantCard;