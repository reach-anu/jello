import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import "../styles/Navbar.css";
import { FaShoppingCart } from "react-icons/fa";
import { useSelector } from "react-redux";

const Navbar = () => {
  const CartItemLength = useSelector((state) => state.cart.cart);
  return (
    <div className="navbarContainer">
      <Link to="/">
        <img src={logo} alt="Logo"/>
      </Link>
      <Link to="/cart">
        <div className="navbarCartContainer">
          <FaShoppingCart />
          <p>Cart</p>
          <p className="cartItemNumber">{CartItemLength.length}</p>
        </div>
      </Link>
    </div>
  );
};

export default Navbar;
