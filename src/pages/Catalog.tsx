import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import Icon from "@/components/ui/icon";
import { products } from "@/components/catalog/catalog.data";
import CatalogHeader from "@/components/catalog/CatalogHeader";
import CategorySidebar from "@/components/catalog/CategorySidebar";
import ProductGrid from "@/components/catalog/ProductGrid";

export default function Catalog() {
  const [activeCategory, setActiveCategory] = useState("puer");
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const q = new URLSearchParams(location.search).get("q") || "";
    setSearchQuery(q);
  }, [location.search]);

  const filtered = searchQuery
    ? products.filter((p) =>
        p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.desc.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.category.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : products.filter((p) => p.category === activeCategory);

  return (
    <>
      <div className="grain-overlay" />

      <CatalogHeader />

      <main>
        <section className="section-padding">
          <button
            onClick={() => navigate("/")}
            style={{
              display: "flex",
              alignItems: "center",
              gap: "8px",
              background: "none",
              border: "none",
              cursor: "pointer",
              fontWeight: 800,
              textTransform: "uppercase",
              fontSize: "13px",
              marginBottom: "32px",
              padding: 0,
            }}
          >
            <Icon name="ArrowLeft" size={16} />
            Назад
          </button>

          <h2 className="section-title" style={{ marginBottom: "40px" }}>
            КАТАЛОГ
          </h2>

          <div style={{ display: "flex", gap: "40px", alignItems: "flex-start" }}>
            <CategorySidebar activeCategory={activeCategory} onSelect={setActiveCategory} />
            <ProductGrid products={filtered} activeCategory={activeCategory} searchQuery={searchQuery} />
          </div>
        </section>
      </main>

      <footer>
        <div>
          <div className="footer-logo">ПУЭРчик</div>
          <p style={{ color: "#666", lineHeight: 1.6 }}>
            Редкие сорта чая со всего мира — прямо к вашей двери.
          </p>
        </div>
        <div className="footer-links">
          <h4>Навигация</h4>
          <ul>
            <li><a href="/" style={{ color: "inherit", textDecoration: "none" }}>Главная</a></li>
            <li><a href="/catalog" style={{ color: "inherit", textDecoration: "none" }}>Каталог</a></li>
            <li><a href="#" style={{ color: "inherit", textDecoration: "none" }}>Доставка</a></li>
          </ul>
        </div>
        <div className="footer-links">
          <h4>Часы работы</h4>
          <ul>
            <li>Пн-Пт: 10:00 - 20:00</li>
            <li>Сб: 10:00 - 19:00</li>
            <li>Вс: 11:00 - 18:00</li>
            <li>Доставка: ежедневно</li>
          </ul>
        </div>
        <div className="footer-bottom">
          <span>2025 ПУЭРчик</span>
          <span>ВКУС НАСТОЯЩЕГО</span>
          <span>IG / TG / VK</span>
        </div>
      </footer>
    </>
  );
}
