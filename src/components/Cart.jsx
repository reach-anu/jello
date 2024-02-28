import { useState } from "react";
import { removefromCart } from "../redux/cartSlice";
import { useDispatch } from "react-redux";
import "../styles/Cart.css";

const Cart = ({ image, price, title, id }) => {
  console.log(id);
  const dispatch = useDispatch((state) => state.cart.cart);
  const [quantity, setQuantity] = useState(1);

  const increaseQuantity = () => {
    setQuantity(quantity + 1);
  };

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };
  return (
    <div className="cartContainer">
      <img src={image} alt="Product" />
      <div className="cartInfo">
        <p style={{ fontWeight: "bold" }}>{title}</p>
        <p> ₹{price}</p>
      </div>
      <div className="cartItemcount">
        <p style={{ color: "#eb6d27" }} onClick={increaseQuantity}>
          +
        </p>
        <p>{quantity}</p>
        <p style={{ color: "#eb6d27" }} onClick={decreaseQuantity}>
          -
        </p>
      </div>
      <button
        onClick={() => dispatch(removefromCart({ id }))}
        className="removeButton"
      >
        x
      </button>
    </div>
  );
};

export default Cart;
