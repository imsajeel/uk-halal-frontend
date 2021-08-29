import "./App.css";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import HomePage from "./pages/HomePage/HomePage";
import * as product from "./db/repositories/products";
import { useState } from "react";
import { useEffect } from "react";
import CardList from "./components/CardList/CardList";
import Loading from "./components/Loading/Loading";

function App() {
  const [products, setProducts] = useState<Array<product.Product>>([]);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    // clean the todos array first
    setProducts([]);

    // fetch todos from repository
    const _products = await product.all();

    // set todos to state
    setProducts(_products);
  };

  return (
    <div className="App">
      <Header />
      <HomePage />
      <CardList data={products} />
      <Footer />
    </div>
  );
}

export default App;
