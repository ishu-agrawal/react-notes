import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () => {

    const [listOfRes, setListOfRes] = useState([]); 
    const [filteredRes, setFilteredRes] = useState([]); 
    const [searchText, setSearchText] = useState("");

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        const data = await fetch(
            'https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.38430&lng=78.45830&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING'
        );

        const json = await data.json();
        setListOfRes(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setFilteredRes(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    };

    const onlineStatus = useOnlineStatus();
    if(onlineStatus == false){
        return <h1>Looks like you are offline!! Please check your conection</h1>
    }

    // Conditional Rendering
    // if(listOfRes.length == 0){
    //     return <Shimmer />
    // }

    // using ternary operator
    return listOfRes.length == 0 ? (
        <Shimmer /> 
    ) : (
        <div className="body">
            <div className="btn-container">
                <div className="search">
                    <input type="text" 
                        className="search-box" 
                        value={searchText}
                        onChange={(e) => {
                            setSearchText(e.target.value)
                        }}
                    />
                    <button 
                        className="search-btn" 
                        onClick={() => {
                            const filteredList = listOfRes.filter(
                                (res) => {
                                    const resName = res.info.name.toLowerCase();
                                    return resName.includes(searchText.toLowerCase())
                                })

                            setFilteredRes(filteredList);
                        }}
                    >Search</button>
                </div>
                <div className="filter">
                    <button 
                        className="filter-btn"
                        onClick={() => {
                            const filteredList = listOfRes.filter(
                                (res) => res.info.avgRating > 4
                            );
                            setFilteredRes(filteredList);
                        }}
                    >
                        Top Rated Restaurant
                    </button>
                </div>
            </div>
            <div className="res-container">
                {
                    filteredRes.map((restaurant) => 
                        <Link 
                            key={restaurant.info.id} 
                            to={'/restaurants/'+restaurant.info.id}
                        >
                            <RestaurantCard 
                                resData={restaurant} 
                            />
                        </Link>
                    )
                }
            </div>
        </div>
    )
}

export default Body;