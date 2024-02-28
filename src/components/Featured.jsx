import { useEffect, useState } from "react";
import "../styles/Home.css";
import axios from "axios";
import ProductCard from "./ProductCard";

const Featured = () => {
  const [selectedCategory, setSelectedCategory] = useState("women's clothing");
  const [featuredProduct, setFeaturedProduct] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `${process.env.REACT_APP_API_URL}products/category/${selectedCategory}`
        );
        setFeaturedProduct(response.data);
      } catch (error) {
        console.error("Error fetching featured product:", error);
      }
    };
    fetchData();
  }, [selectedCategory]);

  const handleButtonClick = (category) => {
    setSelectedCategory(category);
  };
  return (
    <div className="featureContainer">
      <div className="featureInfo">
        <div>
          <h3 style={{ color: "#eb6d27" }}>BEST OFFERS</h3>
          <h1 style={{ marginBottom: "0" }}>Featured</h1>
        </div>
        <div className="featureCategory">
          <button
            className={
              selectedCategory === "women's clothing"
                ? "categoryButton active"
                : "categoryButton"
            }
            onClick={() => handleButtonClick("women's clothing")}
          >
            Women
          </button>
          <button
            className={
              selectedCategory === "men's clothing"
                ? "categoryButton active"
                : "categoryButton"
            }
            onClick={() => handleButtonClick("men's clothing")}
          >
            Men
          </button>
          <button
            className={
              selectedCategory === "electronics"
                ? "categoryButton active"
                : "categoryButton"
            }
            onClick={() => handleButtonClick("electronics")}
          >
            Electronics
          </button>
        </div>
      </div>
      <div className="featuredProductContainer">
        {featuredProduct &&
          featuredProduct.map((product) => (
            <ProductCard
              key={product.id}
              id={product.id}
              title={product.title}
              price={product.price}
              image={product.image}
            />
          ))}
      </div>
    </div>
  );
};

export default Featured;
