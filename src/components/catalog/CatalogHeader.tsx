import Icon from "@/components/ui/icon";
import { useCart } from "@/context/CartContext";

export default function CatalogHeader() {
  const { openCart, count } = useCart();

  return (
    <header className="header">
      <div className="logo">ПУЭРчик</div>
      <nav>
        <a href="/">Главная</a>
        <a href="/catalog">Каталог</a>
        <a href="#">Доставка</a>
        <a href="#">Магазин</a>
      </nav>
      <button
        onClick={openCart}
        style={{
          position: "relative",
          background: "none",
          border: "var(--border)",
          cursor: "pointer",
          width: "44px",
          height: "44px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Icon name="ShoppingCart" size={20} />
        {count > 0 && (
          <span
            style={{
              position: "absolute",
              top: "-8px",
              right: "-8px",
              background: "var(--primary)",
              color: "white",
              borderRadius: "50%",
              width: "20px",
              height: "20px",
              fontSize: "11px",
              fontWeight: 800,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            {count}
          </span>
        )}
      </button>
    </header>
  );
}
