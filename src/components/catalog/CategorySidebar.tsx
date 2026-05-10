import { categories } from "./catalog.data";

interface CategorySidebarProps {
  activeCategory: string;
  onSelect: (id: string) => void;
}

export default function CategorySidebar({ activeCategory, onSelect }: CategorySidebarProps) {
  return (
    <aside
      style={{
        minWidth: "200px",
        flexShrink: 0,
        position: "sticky",
        top: "100px",
      }}
    >
      <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
        {categories.map((cat, i) => (
          <li key={cat.id}>
            <button
              onClick={() => onSelect(cat.id)}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "10px",
                width: "100%",
                background: "none",
                border: "none",
                cursor: "pointer",
                textAlign: "left",
                padding: "12px 0",
                fontWeight: activeCategory === cat.id ? 800 : 500,
                fontSize: "15px",
                textTransform: "uppercase",
                borderBottom: i < categories.length - 1 ? "1px solid rgba(0,0,0,0.1)" : "none",
                color: activeCategory === cat.id ? "var(--primary)" : "var(--dark)",
                transition: "color 0.2s",
              }}
            >
              {activeCategory === cat.id && (
                <span
                  style={{
                    width: "6px",
                    height: "6px",
                    borderRadius: "50%",
                    background: "var(--primary)",
                    flexShrink: 0,
                  }}
                />
              )}
              {cat.label}
            </button>
          </li>
        ))}
      </ul>
    </aside>
  );
}
