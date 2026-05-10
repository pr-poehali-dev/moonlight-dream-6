import { useCart } from "@/context/CartContext";
import { categories, Product } from "./catalog.data";

interface ProductGridProps {
  products: Product[];
  activeCategory: string;
  searchQuery: string;
}

export default function ProductGrid({ products, activeCategory, searchQuery }: ProductGridProps) {
  const { addItem } = useCart();

  return (
    <div style={{ flex: 1 }}>
      <h3
        style={{
          fontSize: "22px",
          fontWeight: 800,
          textTransform: "uppercase",
          marginBottom: "32px",
          letterSpacing: "0.05em",
        }}
      >
        {searchQuery
          ? `Результаты поиска: «${searchQuery}»`
          : categories.find((c) => c.id === activeCategory)?.label}
      </h3>
      <div className="menu-grid">
        {products.map((product) => (
          <div className="menu-card" key={product.id}>
            <span className="menu-tag">{product.tag}</span>
            <img src={product.img} alt={product.name} />
            <div className="menu-card-body">
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  marginBottom: "10px",
                }}
              >
                <h3>{product.name}</h3>
                <span className="price">{product.price}</span>
              </div>
              <p style={{ fontSize: "14px", color: "#666", marginBottom: "16px" }}>
                {product.desc}
              </p>
              <button
                className="btn-cta"
                style={{ width: "100%", background: "var(--primary)", color: "white" }}
                onClick={() => addItem({ id: product.id, name: product.name, price: product.price, img: product.img })}
              >
                В корзину
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
