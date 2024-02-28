import "../styles/ProductCard.css";
import { useDispatch } from "react-redux";
import { addtoCart } from "../redux/cartSlice";

const ProductCard = ({ id, image, title, price }) => {
  const dispatch = useDispatch();

  return (
    <div>
      <div className="productContainer">
        <div className="productImageContainer">
          <img src={image} alt="" />
        </div>
        <p className="productTitle">{title}</p>
        <div className="productDetails">
          <p className="productPrice">₹{price}</p>
          <button
            className="cartButton"
            onClick={() => {
              dispatch(addtoCart({ id, title, image, price }));
            }}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
