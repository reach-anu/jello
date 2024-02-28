import Navbar from "./components/Navbar";
import ProductPage from "./pages/ProductPage";
import Footer from "./components/Footer";
import CartPage from "./pages/CartPage";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import { Provider } from "react-redux";
import store from "./redux/store";
function App() {
  return (
    <div>
      <Provider store={store}>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/products" element={<ProductPage />} />
          <Route path="/cart" element={<CartPage />} />
        </Routes>
        <Footer />
      </Provider>
    </div>
  );
}

export default App;
