import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData";
import { useState } from "react";

const Body = () => {

    const [listOfRes, setListOfRes] = useState(resList); 

    return (
        <div className="body">
            <div className="search">Search</div>
            <div className="filter">
                <button 
                    className="filter-btn"
                    onClick={() => {
                        const filteredList = listOfRes.filter(
                            (res) => res.info.avgRating > 4
                        );
                        setListOfRes(filteredList);
                    }}
                >
                    Top Rated Restaurant
                </button>
            </div>
            <div className="res-container">
                {
                    listOfRes.map((restaurant) => 
                        <RestaurantCard 
                            key={restaurant.info.id} 
                            resData={restaurant} 
                        />
                    )
                }
            </div>
        </div>
    )
}

export default Body;