import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from 'react-router-dom'
import { MENU_API_URL } from "../utils/constants";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";

const RestaurantMenu = () => {

    const {resId} = useParams();
    // console.log(resId)

    const [showIdx, setShowIdx] = useState(0);

    const resInfo = useRestaurantMenu(resId);

    if((resInfo == null) || resInfo.length == 0){
        return <Shimmer />
    }

    const {
        name,
        cuisines,
        costForTwoMessage
    } = resInfo[2]?.card?.card?.info;

    const regularCards = resInfo[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;
    const { itemCards } = regularCards?.categories?.[1] || regularCards || {};

    // console.log("resInfo: ", resInfo[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards);

    const categories = resInfo[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
        (c) => 
            c.card?.card?.["@type"] == 
            "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
        );

    // console.log(categories)


    return (
        <div className="menu text-center">
            <h1 className="font-bold my-6 text-2xl">{name}</h1>
            <p className="font-bold text-lg">{cuisines.join(',')}</p>
            <p>{costForTwoMessage}</p>

            {/* categories accordian */}
            { categories.map((category, index) => (

                // controlled component -> controlled by parent (restaurant menu)
                <RestaurantCategory 
                    key={category?.card?.card?.categoryId} 
                    data={category?.card?.card}
                    showItems={index == showIdx ? true : false}
                    setShowIdx = {() => setShowIdx(index)}
                />
            ))}

            {/* <h2>Menu: </h2> */}
            {/* <ul>
                {itemCards.map((item) => (
                    <li key={item.card.info.id}>
                        { item.card.info.name } - Rs. {item.card.info?.finalPrice/100 || item.card.info?.price/100} /-
                    </li>
                ))}
            </ul> */}
        </div>
    )
}

export default RestaurantMenu;