import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Icon from "@/components/ui/icon";

const categories = [
  { id: "tea", label: "Чай" },
  { id: "coffee", label: "Кофе" },
  { id: "accessories", label: "Аксессуары" },
];

const products = [
  // Чай
  {
    id: 1,
    category: "tea",
    tag: "Хит продаж",
    tagColor: "var(--primary)",
    tagText: "white",
    name: "Тайваньский Улун",
    price: "890 ₽",
    desc: "Высокогорный улун с персиковым ароматом и медовым послевкусием. 50 г.",
    img: "https://cdn.poehali.dev/projects/e50bf7dd-7c47-46aa-8325-68733306fc28/files/d46edc75-6e13-4c7b-bac4-367c99c9ed66.jpg",
  },
  {
    id: 2,
    category: "tea",
    tag: "Из Японии",
    tagColor: "var(--secondary)",
    tagText: "white",
    name: "Матча Церемониал",
    price: "1 400 ₽",
    desc: "Премиальная матча первого помола из Удзи. Ярко-зелёная, бархатистая. 30 г.",
    img: "https://cdn.poehali.dev/projects/e50bf7dd-7c47-46aa-8325-68733306fc28/files/e0c9cb00-290b-4cb0-89c8-cf80d2d5d11a.jpg",
  },
  {
    id: 3,
    category: "tea",
    tag: "Популярное",
    tagColor: "var(--accent)",
    tagText: "var(--dark)",
    name: "Ассам Голд",
    price: "650 ₽",
    desc: "Крепкий индийский чёрный чай с золотыми типсами. Идеален с молоком. 50 г.",
    img: "https://cdn.poehali.dev/projects/e50bf7dd-7c47-46aa-8325-68733306fc28/files/baa53550-0c19-4e90-8472-412d549fffe4.jpg",
  },
  {
    id: 4,
    category: "tea",
    tag: "Новинка",
    tagColor: "var(--primary)",
    tagText: "white",
    name: "Шэн Пуэр 2020",
    price: "1 200 ₽",
    desc: "Молодой прессованный пуэр с чистым вкусом и долгим послевкусием. 100 г.",
    img: "https://cdn.poehali.dev/projects/e50bf7dd-7c47-46aa-8325-68733306fc28/files/79a35b18-bb57-4168-bd21-fb2b4df492b9.jpg",
  },
  // Кофе
  {
    id: 5,
    category: "coffee",
    tag: "Хит продаж",
    tagColor: "var(--primary)",
    tagText: "white",
    name: "Эфиопия Иргачефф",
    price: "780 ₽",
    desc: "Натуральная обработка. Черника, жасмин, горький шоколад. Обжарка средняя. 250 г.",
    img: "https://cdn.poehali.dev/projects/e50bf7dd-7c47-46aa-8325-68733306fc28/files/3803d1a1-0e94-4680-b528-62b3dad2fc3c.jpg",
  },
  {
    id: 6,
    category: "coffee",
    tag: "Популярное",
    tagColor: "var(--accent)",
    tagText: "var(--dark)",
    name: "Колумбия Хуила",
    price: "720 ₽",
    desc: "Мытая обработка. Карамель, красное яблоко, ваниль. Универсальная обжарка. 250 г.",
    img: "https://cdn.poehali.dev/projects/e50bf7dd-7c47-46aa-8325-68733306fc28/files/3803d1a1-0e94-4680-b528-62b3dad2fc3c.jpg",
  },
  {
    id: 7,
    category: "coffee",
    tag: "Новинка",
    tagColor: "var(--secondary)",
    tagText: "white",
    name: "Кения АА",
    price: "850 ₽",
    desc: "Смородина, помело, чёрный чай. Яркая и сложная кислотность. Светлая обжарка. 250 г.",
    img: "https://cdn.poehali.dev/projects/e50bf7dd-7c47-46aa-8325-68733306fc28/files/3803d1a1-0e94-4680-b528-62b3dad2fc3c.jpg",
  },
  // Аксессуары
  {
    id: 8,
    category: "accessories",
    tag: "Хит продаж",
    tagColor: "var(--primary)",
    tagText: "white",
    name: "Гайвань керамика",
    price: "1 900 ₽",
    desc: "Классическая китайская гайвань из белой глины. Объём 150 мл.",
    img: "https://cdn.poehali.dev/projects/e50bf7dd-7c47-46aa-8325-68733306fc28/files/e4749832-a98d-4444-b32b-cf8f6ac84f6a.jpg",
  },
  {
    id: 9,
    category: "accessories",
    tag: "Популярное",
    tagColor: "var(--accent)",
    tagText: "var(--dark)",
    name: "Чайник исинская глина",
    price: "3 500 ₽",
    desc: "Аутентичный чайник из исинской пурпурной глины. Объём 200 мл.",
    img: "https://cdn.poehali.dev/projects/e50bf7dd-7c47-46aa-8325-68733306fc28/files/e4749832-a98d-4444-b32b-cf8f6ac84f6a.jpg",
  },
  {
    id: 10,
    category: "accessories",
    tag: "Новинка",
    tagColor: "var(--secondary)",
    tagText: "white",
    name: "Бамбуковый поднос",
    price: "1 200 ₽",
    desc: "Чайный стол-поднос из натурального бамбука. 40×20 см.",
    img: "https://cdn.poehali.dev/projects/e50bf7dd-7c47-46aa-8325-68733306fc28/files/e4749832-a98d-4444-b32b-cf8f6ac84f6a.jpg",
  },
];

export default function Catalog() {
  const [activeCategory, setActiveCategory] = useState("tea");
  const navigate = useNavigate();

  const filtered = products.filter((p) => p.category === activeCategory);

  return (
    <>
      <div className="grain-overlay" />

      <header className="header">
        <div className="logo">ЧАЙ*ХАУ</div>
        <nav>
          <a href="/">Главная</a>
          <a href="#">Каталог</a>
          <a href="#">Доставка</a>
          <a href="#">Магазин</a>
        </nav>
        <button className="btn-cta">Заказать</button>
      </header>

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

          {/* Категории */}
          <div style={{ display: "flex", gap: "12px", marginBottom: "48px", flexWrap: "wrap" }}>
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className="btn-cta"
                style={{
                  background: activeCategory === cat.id ? "var(--dark)" : "white",
                  color: activeCategory === cat.id ? "white" : "var(--dark)",
                }}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Товары */}
          <div className="menu-grid">
            {filtered.map((product) => (
              <div className="menu-card" key={product.id}>
                <span
                  className="menu-tag"
                  style={{ background: product.tagColor, color: product.tagText }}
                >
                  {product.tag}
                </span>
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
                  >
                    В корзину
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>

      <footer>
        <div>
          <div className="footer-logo">ЧАЙ*ХАУ</div>
          <p style={{ color: "#666", lineHeight: 1.6 }}>
            Редкие сорта чая со всего мира — прямо к вашей двери.
          </p>
        </div>
        <div className="footer-links">
          <h4>Навигация</h4>
          <ul>
            <li><a href="/" style={{ color: "inherit", textDecoration: "none" }}>Главная</a></li>
            <li><a href="#" style={{ color: "inherit", textDecoration: "none" }}>Каталог</a></li>
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
          <span>2025 ЧАЙ*ХАУ</span>
          <span>ВКУС НАСТОЯЩЕГО</span>
          <span>IG / TG / VK</span>
        </div>
      </footer>
    </>
  );
}
