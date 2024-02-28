import Cart from "../components/Cart";
import "../styles/Cart.css";
import { useSelector } from "react-redux";

const CartPage = () => {
  const cartItem = useSelector((state) => state.cart.cart);
  return (
    <div className="cartPageContainer">
      <h3 style={{ color: "#eb6d27" }}>SELECTED ITEMS</h3>
      <h1>CART ITEMS</h1>
      {!cartItem.length && (
        <h1 style={{ textAlign: "center" }}>no items to show here</h1>
      )}
      <div className="cartCardContainer">
        {cartItem.map((item) => (
          <Cart
            id={item.id}
            image={item.image}
            title={item.title}
            price={item.price}
          />
        ))}
      </div>
    </div>
  );
};

export default CartPage;
