import { Link } from "react-router-dom";
import { useProductStore } from "../store/useProductStore";
import ProductCard from "../components/ProductCard";
import "./FiguresPage.css";

function FiguresPage() {
  const figures = useProductStore((state) => state.getProductsByCategory("figures"));

  return (
    <div className="figures-page">
      <h1 className="figures-page__title">figures</h1>
      <div className="figures-page__grid">
        {figures.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
      <Link to="/cart" className="figures-page__cart-link">
        Click here and go to your cart
      </Link>
    </div>
  );
}

export default FiguresPage;
