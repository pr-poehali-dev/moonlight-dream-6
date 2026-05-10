import { useCart } from "@/context/CartContext";
import Icon from "@/components/ui/icon";

export default function CartDrawer() {
  const { items, isOpen, closeCart, removeItem, updateQty, total } = useCart();

  return (
    <>
      {/* Overlay */}
      {isOpen && (
        <div
          onClick={closeCart}
          style={{
            position: "fixed",
            inset: 0,
            background: "rgba(0,0,0,0.4)",
            zIndex: 998,
          }}
        />
      )}

      {/* Drawer */}
      <div
        style={{
          position: "fixed",
          top: 0,
          right: 0,
          height: "100%",
          width: "100%",
          maxWidth: "420px",
          background: "var(--bg)",
          zIndex: 999,
          display: "flex",
          flexDirection: "column",
          transform: isOpen ? "translateX(0)" : "translateX(100%)",
          transition: "transform 0.3s ease",
          borderLeft: "var(--border)",
        }}
      >
        {/* Шапка */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "24px",
            borderBottom: "var(--border)",
          }}
        >
          <span style={{ fontWeight: 800, fontSize: "18px", textTransform: "uppercase", letterSpacing: "0.05em" }}>
            Корзина {items.length > 0 && `(${items.reduce((s, i) => s + i.quantity, 0)})`}
          </span>
          <button
            onClick={closeCart}
            style={{ background: "none", border: "none", cursor: "pointer", padding: "4px" }}
          >
            <Icon name="X" size={22} />
          </button>
        </div>

        {/* Товары */}
        <div style={{ flex: 1, overflowY: "auto", padding: "16px 24px" }}>
          {items.length === 0 ? (
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                height: "100%",
                gap: "16px",
                color: "#999",
              }}
            >
              <Icon name="ShoppingCart" size={48} />
              <p style={{ fontSize: "15px", textTransform: "uppercase", fontWeight: 700 }}>
                Корзина пуста
              </p>
            </div>
          ) : (
            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "16px" }}>
              {items.map((item) => (
                <li
                  key={item.id}
                  style={{
                    display: "flex",
                    gap: "14px",
                    alignItems: "center",
                    borderBottom: "1px solid rgba(0,0,0,0.1)",
                    paddingBottom: "16px",
                  }}
                >
                  <img
                    src={item.img}
                    alt={item.name}
                    style={{ width: "70px", height: "70px", objectFit: "cover", border: "var(--border)", flexShrink: 0 }}
                  />
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <p style={{ fontWeight: 800, fontSize: "14px", textTransform: "uppercase", marginBottom: "6px", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>
                      {item.name}
                    </p>
                    <p style={{ fontWeight: 700, fontSize: "14px", color: "var(--primary)" }}>
                      {item.price}
                    </p>
                    {/* Количество */}
                    <div style={{ display: "flex", alignItems: "center", gap: "8px", marginTop: "8px" }}>
                      <button
                        onClick={() => updateQty(item.id, item.quantity - 1)}
                        style={{
                          width: "28px",
                          height: "28px",
                          border: "var(--border)",
                          background: "white",
                          cursor: "pointer",
                          fontWeight: 800,
                          fontSize: "16px",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                        }}
                      >
                        −
                      </button>
                      <span style={{ fontWeight: 800, fontSize: "15px", minWidth: "20px", textAlign: "center" }}>
                        {item.quantity}
                      </span>
                      <button
                        onClick={() => updateQty(item.id, item.quantity + 1)}
                        style={{
                          width: "28px",
                          height: "28px",
                          border: "var(--border)",
                          background: "white",
                          cursor: "pointer",
                          fontWeight: 800,
                          fontSize: "16px",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                        }}
                      >
                        +
                      </button>
                    </div>
                  </div>
                  <button
                    onClick={() => removeItem(item.id)}
                    style={{ background: "none", border: "none", cursor: "pointer", color: "#999", flexShrink: 0 }}
                  >
                    <Icon name="Trash2" size={16} />
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Итого */}
        {items.length > 0 && (
          <div style={{ padding: "24px", borderTop: "var(--border)" }}>
            <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "16px" }}>
              <span style={{ fontWeight: 800, textTransform: "uppercase", fontSize: "15px" }}>Итого</span>
              <span style={{ fontWeight: 800, fontSize: "18px" }}>{total.toLocaleString("ru-RU")} ₽</span>
            </div>
            <button
              className="btn-cta"
              style={{ width: "100%", background: "var(--primary)", color: "white", fontSize: "15px" }}
            >
              Оформить заказ
            </button>
          </div>
        )}
      </div>
    </>
  );
}
