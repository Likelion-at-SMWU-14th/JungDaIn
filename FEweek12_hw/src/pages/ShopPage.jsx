import { useProductStore } from "../store/useProductStore";
import ProductCard from "../components/ProductCard";
import "./ShopPage.css";

function ShopPage() {
  const dolls = useProductStore((state) => state.getProductsByCategory("dolls"));
  const keyrings = useProductStore((state) => state.getProductsByCategory("keyrings"));

  return (
    <div className="shop-page">
      <h1 className="shop-page__title">hachiware goods shop</h1>

      <section className="shop-page__section">
        <h2 className="shop-page__section-title">dolls</h2>
        <div className="shop-page__grid">
          {dolls.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      <section className="shop-page__section">
        <h2 className="shop-page__section-title">keyrings</h2>
        <div className="shop-page__grid">
          {keyrings.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>
    </div>
  );
}

export default ShopPage;
