import { useEffect, useState } from "react";
import "./App.scss";
import { getCategories, getData, getFilteredData } from "./utils/helpers";
import { Product } from "./utils/constants";
import ProductCard from "./components/ProductCard/ProductCard";
import Input from "./components/Input/Input";
import Dropdown from "./components/Dropdown/Dropdown";
import CartModal from "./components/CartModal/CartModal";

function App() {
  const [products, setProducts] = useState<Product[]>([]);
  const [categories, setCategories] = useState<string[]>([]);
  const [search, setSearch] = useState<string>("");
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [cart, setCart] = useState<Product[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);

  const handleCategoryChange = (category: string) => {
    const updatedSelectedCategories = selectedCategories.includes(category)
      ? selectedCategories.filter((cat) => cat !== category)
      : [...selectedCategories, category];

    setSelectedCategories(updatedSelectedCategories);
  };

  const handleCart = (product: Product) => {
    const updatedCart = cart.includes(product)
      ? cart.filter((prod) => prod.id !== product.id)
      : [...cart, product];

    setCart(updatedCart);
  };

  useEffect(() => {
    getData().then((data) => {
      const categories = getCategories(data);
      setCategories(categories);
      setProducts(data);
    });
  }, []);

  useEffect(() => {
    const filteredProducts = getFilteredData(
      products,
      selectedCategories,
      search
    );
    setFilteredProducts(filteredProducts);
  }, [search, selectedCategories, products]);

  return (
    <main className="main">
      <div className="navbar">
        <Input
          type="text"
          name="search"
          id="search"
          placeholder="Search"
          label="Search"
          value={search}
          onChange={(e) => setSearch(e.target.value || "")}
        />
        <div className="buttons">
          <Dropdown
            categories={categories}
            selectedCategories={selectedCategories}
            onChange={(category) => handleCategoryChange(category)}
          />
          <CartModal
            products={cart}
            onProductClick={(product) => handleCart(product)}
          />
        </div>
      </div>
      <div className="cardList">
        {filteredProducts.map((product) => (
          <ProductCard
            {...product}
            key={product.id}
            isSelected={cart.includes(product)}
            onClick={() => handleCart(product)}
          />
        ))}
      </div>
    </main>
  );
}

export default App;
