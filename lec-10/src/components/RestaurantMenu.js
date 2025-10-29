import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from 'react-router-dom'
import { MENU_API_URL } from "../utils/constants";
import useRestaurantMenu from "../utils/useRestaurantMenu";

const RestaurantMenu = () => {

    const {resId} = useParams();
    console.log(resId)

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

    return (
        <div className="menu">
            <h1>{name}</h1>
            <p>{cuisines.join(',')}</p>
            <p>{costForTwoMessage}</p>
            <h2>Menu: </h2>
            <ul>
                {itemCards.map((item) => (
                    <li key={item.card.info.id}>
                        { item.card.info.name } - Rs. {item.card.info?.finalPrice/100 || item.card.info?.price/100} /-
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default RestaurantMenu;