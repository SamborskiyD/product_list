import { useState } from "react";
import { Product } from "../../utils/constants";
import "./styles.scss";

interface CartModalProps {
  products: Product[];
  onProductClick: (product: Product) => void;
}

const CartModal = ({ products, onProductClick }: CartModalProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="modal-container">
      <button className="open-button" onClick={() => setIsOpen(true)}>
        Cart
      </button>
      {isOpen && (
        <div className="modal-overlay">
          <div className="modal-content">
            <h2>Cart</h2>
            <ul className="product-list">
              {products.map((product) => (
                <li className="product-item" key={product.id}>
                  <div className="info">
                    <img
                      className="image"
                      src={product.image}
                      alt={product.title}
                    />
                    <span className="title">{product.title}</span>
                    <span className="price">${product.price}</span>
                  </div>
                  <button
                    onClick={() => onProductClick(product)}
                    className="button"
                  >
                    Remove
                  </button>
                </li>
              ))}
            </ul>
            <button className="close-button" onClick={() => setIsOpen(false)}>
              X
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartModal;
