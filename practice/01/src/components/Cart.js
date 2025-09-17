import useCart from "../utils/useCart";
import ItemList from "./ItemList";

const Cart = () => {
    const { cartItems } = useCart()
    // console.log(cartItems)

    const { clearCart } = useCart();
    return (
        <div className="text-center m-4 p-4">
            <h1 className="text-2xl font-bold">Cart</h1>
            <div className="w-6/12 m-auto">
                <button 
                    className="p-2 m-2 bg-black text-white rounded-lg cursor-pointer"
                    onClick={() => clearCart()}
                >Clear Cart</button>
                {cartItems?.length == 0 && <h1>No items is Cart</h1>}
                <ItemList key={cartItems} items={cartItems} />
            </div>
        </div>
    )
}

export default Cart;