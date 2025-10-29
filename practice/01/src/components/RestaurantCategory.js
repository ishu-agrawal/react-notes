import React,  { useState } from "react";
import ItemList from "./ItemList";

const RestaurantCategory = ({data, showItems, setShowIdx}) => {
    // console.log(data)

    // const [showItems, setShowItems] = useState(false);

    const handleClick = () => {
        setShowIdx();
    }

    return <div>
        {/* header */}
        <div className="w-6/12 mx-auto my-4 bg-gray-200 shadow-lg p-4">
            <div className="flex justify-between cursor-pointer"
                onClick={handleClick}
            >
                <span className="font-bold text-lg">
                    {data.title} ({data.itemCards.length})
                </span>
                <span>{showItems ? '⬆️' : '⬇️'}</span>
            </div>
            {/* accordian body */}
            {showItems && <ItemList items={data.itemCards}/>}

        </div>
    </div>
}

export default RestaurantCategory;