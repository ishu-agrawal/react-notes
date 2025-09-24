import { useDispatch } from 'react-redux';
import { RES_IMG_URL } from '../utils/constants';
import { addItem } from '../utils/cartSlice';

const ItemList = ({items}) => {
    // console.log(items);

    const dispatch = useDispatch();

    const handleAddItems = (item) => {
        // dispatch an action
        dispatch(addItem(item));
    }

    return (
        <div>
            {items.map(
                item => (
                    <div 
                        key={item.card.info.id} 
                        data-testid="foodItems"
                        className="p-2 m-3 border-gray-400 border-b-1 text-left flex justify-between"
                    >
                        <div className='w-9/12'>
                            <div className='py-2'>
                                <span>{item.card.info.name}</span>
                                <span> - ₹ 
                                    {item.card.info.price 
                                        ? item.card.info.price / 100 
                                        : item.card.info.defaultPrice / 100}
                                </span>    
                            </div>
                            <p className="text-xs">{item.card.info.description}</p>
                        </div>
                        <div className='w-3/12'>
                            <div className='absolute'>
                                <button className='p-2 bg-green-400 rounded-br-md text-white shadow-lg'
                                onClick={() => handleAddItems(item)}
                                >Add +</button>
                            </div>
                            <img 
                                src = {RES_IMG_URL + item.card.info.imageId}
                                className='w-full'
                            />
                        </div>
                    </div>
                )
            )}
        </div>
    )
}

export default ItemList;