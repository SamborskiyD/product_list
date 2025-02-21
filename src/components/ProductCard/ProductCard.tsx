import { Product } from "../../utils/constants";
import "./styles.scss";

interface ProductCardProps extends Product {
  isSelected: boolean;
  onClick: () => void;
}

const ProductCard = ({
  title,
  image,
  price,
  category,
  rating,
  isSelected,
  onClick,
}: ProductCardProps) => {
  return (
    <div className="card">
      <div className="rating">
        <img width={16} height={16} src="/star.png" alt="star image" />
        <p>{rating.rate}</p>
      </div>
      <img className="image" src={image} alt={title} />
      <div className="content">
        <h3 className="title">{title}</h3>
        <div className="infoContainer">
          <div className="info">
            <span className="category">{category}</span>
            <span className="price">${price}</span>
          </div>
          <button
            className={`button ${isSelected ? "selected" : ""}`}
            onClick={onClick}
          >
            {isSelected ? "Remove from cart" : "Add to cart"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
