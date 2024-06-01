import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { clearCart } from "../utils/cartSlice";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  return (
    <div className="w-6/12 m-auto">
      <button
        className="ml-5 px-5 py-1 rounded-lg bg-black text-white"
        onClick={handleClearCart}
      >
        Clear Cart
      </button>

      {cartItems.length === 0 && <h1>Cart is empty. Add Items to the cart!</h1>}

      <ItemList items={cartItems}></ItemList>
    </div>
  );
};

export default Cart;
