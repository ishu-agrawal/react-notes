import { RES_IMG_URL } from '../utils/constants';

const RestaurantCard = (props) => {
    const {resData} = props;
    const {
        cloudinaryImageId, 
        name, 
        cuisines, 
        avgRating, 
        costForTwo
    } = resData.info;
    
    const {deliveryTime} = resData.info.sla;
    
    return (
        <div data-testid="resCard" className="res-card m-4 p-4 w-64 bg-gray-200 rounded-lg hover:bg-yellow-100">
            <img className='res-logo rounded-lg mb-2' alt='res-logo' 
                src= { RES_IMG_URL + cloudinaryImageId } 
            />
            <h3 className='font-bold py-4 text-lg'>{name}</h3>
            <h4 className='italic'>{cuisines.join(',')}</h4>
            <h4>{avgRating} stars</h4>
            <h4>{costForTwo}</h4>
            <h4>{deliveryTime} min</h4>
        </div>
    )
}

// High Order Component
// input - RestaurantCard ==> RestaurantCard open

export const withOpenLabel = (RestaurantCard) => {
    return(props) => { // returing a component
        return (
            <div>
                <label className='absolute bg-black text-white p-2 rounded'>Open</label>
                <RestaurantCard {...props}/>
            </div>
        )
    }
}

export default RestaurantCard;