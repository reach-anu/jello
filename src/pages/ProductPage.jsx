import { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";
import "../styles/ProductPage.css";
import axios from "axios";

const ProductsPage = () => {
  const [products, setProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");
  useEffect(() => {
    const fetchData = async () => {
      try {
        let response;
        if (selectedCategory) {
          response = await axios.get(
            `${process.env.REACT_APP_API_URL}products/category/${selectedCategory}`
          );
        } else {
          response = await axios.get(
            `${process.env.REACT_APP_API_URL}products`
          );
        }
        setProducts(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [selectedCategory]);

  const handleButtonClick = (category) => {
    setSelectedCategory(category);
  };
  return (
    <>
      <div className="featureCategory" style={{ marginLeft: "20px" }}>
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
      <div className="productPageContainer">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            image={product.image}
            title={product.title}
            description={product.description}
            price={product.price}
          />
        ))}
      </div>
    </>
  );
};

export default ProductsPage;
