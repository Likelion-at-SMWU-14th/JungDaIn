import { useMemo } from "react";
import { Link } from "react-router-dom";
import { useProductStore } from "../store/useProductStore";
import ProductCard from "../components/ProductCard";
import "./ShopPage.css";

function ShopPage() {
  const products = useProductStore((state) => state.products);
  const dolls = useMemo(() => products.filter((p) => p.category === "dolls"), [products]);
  const keyrings = useMemo(() => products.filter((p) => p.category === "keyrings"), [products]);
  const figures = useMemo(() => products.filter((p) => p.category === "figures"), [products]);

  return (
    <div className="shop-page">
      <h1 className="shop-page__title">hachiware goods shop</h1>

      <section className="shop-page__section">
        <h2 className="shop-page__section-title shop-page__section-title--left">dolls</h2>
        <div className="shop-page__grid">
          {dolls.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      <section className="shop-page__section">
        <h2 className="shop-page__section-title shop-page__section-title--right">keyrings</h2>
        <div className="shop-page__grid">
          {keyrings.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      <section className="shop-page__section">
        <h2 className="shop-page__section-title shop-page__section-title--center">figures</h2>
        <div className="shop-page__grid">
          {figures.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      <Link to="/cart" className="shop-page__cart-link">
        Click here and go to your cart
      </Link>
    </div>
  );
}

export default ShopPage;
