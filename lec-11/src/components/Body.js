import RestaurantCard, { withOpenLabel } from "./RestaurantCard";
import { useContext, useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";

const Body = () => {

    const [listOfRes, setListOfRes] = useState([]); 
    const [filteredRes, setFilteredRes] = useState([]); 
    const [searchText, setSearchText] = useState("");

    const { loggedInUser, setUserName } = useContext(UserContext);

    // high order component
    const RestaurantCardOpen = withOpenLabel(RestaurantCard);

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
        console.log('data: ',json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
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
            <div className="btn-container flex">
                <div className="search m-4 p-4">
                    <input type="text" 
                        className="search-box border border-s-black" 
                        value={searchText}
                        onChange={(e) => {
                            setSearchText(e.target.value)
                        }}
                    />
                    <button 
                        className="search-btn px-4 py-0.5 bg-green-200 m-4 rounded-lg" 
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
                <div className="filter flex items-center">
                    <button 
                        className="filter-btn px-4 py-2 bg-gray-200 rounded-lg"
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
                <div className="filter flex items-center m-4 p-4">
                    <label>UserName: </label>
                    <input
                        className="search-box border border-s-black p-2" 
                        value={loggedInUser}
                        onChange={(e) => setUserName(e.target.value)}
                    />
                </div>
            </div>
            <div className="res-container flex flex-wrap">
                {
                    filteredRes.map((restaurant) => 
                        <Link 
                            key={restaurant.info.id} 
                            to={'/restaurants/'+restaurant.info.id}
                        >
                            { restaurant.info.isOpen ? 
                                <RestaurantCardOpen resData={restaurant}/> 
                                    :
                                <RestaurantCard resData={restaurant} />
                            }
                        </Link>
                    )
                }
            </div>
        </div>
    )
}

export default Body;