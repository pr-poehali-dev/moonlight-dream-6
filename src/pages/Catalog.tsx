import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import Icon from "@/components/ui/icon";
import { useCart } from "@/context/CartContext";

const categories = [
  { id: "puer", label: "Пуэр" },
  { id: "oolong", label: "Улун" },
  { id: "black", label: "Чёрный чай" },
  { id: "green", label: "Зелёный чай" },
  { id: "red", label: "Красный чай" },
  { id: "white", label: "Белый чай" },
  { id: "drinks", label: "Чайные напитки" },
  { id: "coffee", label: "Кофе" },
  { id: "accessories", label: "Чайные аксессуары" },
  { id: "gifts", label: "Подарочные наборы" },
];

const products = [
  // Пуэр
  {
    id: 1,
    category: "puer",
    tag: "Хит продаж",
    name: "Шэн Пуэр 2020",
    price: "1 200 ₽",
    desc: "Молодой прессованный пуэр с чистым вкусом и долгим послевкусием. 100 г.",
    img: "https://cdn.poehali.dev/projects/e50bf7dd-7c47-46aa-8325-68733306fc28/files/79a35b18-bb57-4168-bd21-fb2b4df492b9.jpg",
  },
  {
    id: 2,
    category: "puer",
    tag: "Выдержанный",
    name: "Шу Пуэр 2015",
    price: "1 800 ₽",
    desc: "Зрелый тёмный пуэр с землистым, мягким вкусом. Прессованный блин. 100 г.",
    img: "https://cdn.poehali.dev/projects/e50bf7dd-7c47-46aa-8325-68733306fc28/files/79a35b18-bb57-4168-bd21-fb2b4df492b9.jpg",
  },
  {
    id: 3,
    category: "puer",
    tag: "Новинка",
    name: "Пуэр Дикорос",
    price: "2 400 ₽",
    desc: "Пуэр из листьев дикорастущих деревьев. Редкий и насыщенный. 50 г.",
    img: "https://cdn.poehali.dev/projects/e50bf7dd-7c47-46aa-8325-68733306fc28/files/79a35b18-bb57-4168-bd21-fb2b4df492b9.jpg",
  },
  // Улун
  {
    id: 4,
    category: "oolong",
    tag: "Хит продаж",
    name: "Тайваньский Улун",
    price: "890 ₽",
    desc: "Высокогорный улун с персиковым ароматом и медовым послевкусием. 50 г.",
    img: "https://cdn.poehali.dev/projects/e50bf7dd-7c47-46aa-8325-68733306fc28/files/d46edc75-6e13-4c7b-bac4-367c99c9ed66.jpg",
  },
  {
    id: 5,
    category: "oolong",
    tag: "Из Китая",
    name: "Те Гуань Инь",
    price: "750 ₽",
    desc: "Классический улун «Железная Богиня Милосердия». Цветочный и обволакивающий. 50 г.",
    img: "https://cdn.poehali.dev/projects/e50bf7dd-7c47-46aa-8325-68733306fc28/files/d46edc75-6e13-4c7b-bac4-367c99c9ed66.jpg",
  },
  {
    id: 6,
    category: "oolong",
    tag: "Популярное",
    name: "Да Хун Пао",
    price: "1 100 ₽",
    desc: "Знаменитый скальный улун с тёмным, жареным, минеральным вкусом. 50 г.",
    img: "https://cdn.poehali.dev/projects/e50bf7dd-7c47-46aa-8325-68733306fc28/files/d46edc75-6e13-4c7b-bac4-367c99c9ed66.jpg",
  },
  // Чёрный чай
  {
    id: 7,
    category: "black",
    tag: "Хит продаж",
    name: "Ассам Голд",
    price: "650 ₽",
    desc: "Крепкий индийский чёрный чай с золотыми типсами. Идеален с молоком. 50 г.",
    img: "https://cdn.poehali.dev/projects/e50bf7dd-7c47-46aa-8325-68733306fc28/files/baa53550-0c19-4e90-8472-412d549fffe4.jpg",
  },
  {
    id: 8,
    category: "black",
    tag: "Классика",
    name: "Дарджилинг FTGFOP",
    price: "820 ₽",
    desc: "Элитный дарджилинг первого flush. Мускатное послевкусие. 50 г.",
    img: "https://cdn.poehali.dev/projects/e50bf7dd-7c47-46aa-8325-68733306fc28/files/baa53550-0c19-4e90-8472-412d549fffe4.jpg",
  },
  {
    id: 9,
    category: "black",
    tag: "Из Китая",
    name: "Дянь Хун",
    price: "700 ₽",
    desc: "Юньнаньский красный чай с медово-какао ароматом и золотыми типсами. 50 г.",
    img: "https://cdn.poehali.dev/projects/e50bf7dd-7c47-46aa-8325-68733306fc28/files/baa53550-0c19-4e90-8472-412d549fffe4.jpg",
  },
  // Зелёный чай
  {
    id: 10,
    category: "green",
    tag: "Из Японии",
    name: "Матча Церемониал",
    price: "1 400 ₽",
    desc: "Премиальная матча первого помола из Удзи. Ярко-зелёная, бархатистая. 30 г.",
    img: "https://cdn.poehali.dev/projects/e50bf7dd-7c47-46aa-8325-68733306fc28/files/e0c9cb00-290b-4cb0-89c8-cf80d2d5d11a.jpg",
  },
  {
    id: 11,
    category: "green",
    tag: "Хит продаж",
    name: "Сенча Фудзи",
    price: "680 ₽",
    desc: "Японская сенча со склонов Фудзи. Свежий, травяной, с умами. 50 г.",
    img: "https://cdn.poehali.dev/projects/e50bf7dd-7c47-46aa-8325-68733306fc28/files/e0c9cb00-290b-4cb0-89c8-cf80d2d5d11a.jpg",
  },
  {
    id: 12,
    category: "green",
    tag: "Из Китая",
    name: "Лун Цзин",
    price: "760 ₽",
    desc: "«Колодец Дракона» — плоские листья с ореховым и сладким вкусом. 50 г.",
    img: "https://cdn.poehali.dev/projects/e50bf7dd-7c47-46aa-8325-68733306fc28/files/e0c9cb00-290b-4cb0-89c8-cf80d2d5d11a.jpg",
  },
  // Красный чай
  {
    id: 13,
    category: "red",
    tag: "Хит продаж",
    name: "Цзинь Цзюнь Мэй",
    price: "1 350 ₽",
    desc: "Элитный красный чай из почек. Сладкий, цветочный, с карамелью. 50 г.",
    img: "https://cdn.poehali.dev/projects/e50bf7dd-7c47-46aa-8325-68733306fc28/files/baa53550-0c19-4e90-8472-412d549fffe4.jpg",
  },
  {
    id: 14,
    category: "red",
    tag: "Популярное",
    name: "Кимун",
    price: "790 ₽",
    desc: "Знаменитый красный чай из провинции Аньхой. Шоколад и орхидея. 50 г.",
    img: "https://cdn.poehali.dev/projects/e50bf7dd-7c47-46aa-8325-68733306fc28/files/baa53550-0c19-4e90-8472-412d549fffe4.jpg",
  },
  // Белый чай
  {
    id: 15,
    category: "white",
    tag: "Премиум",
    name: "Бай Хао Инь Чжэнь",
    price: "1 600 ₽",
    desc: "«Серебряные иглы» — нераскрытые почки с мягким сладким вкусом. 30 г.",
    img: "https://cdn.poehali.dev/projects/e50bf7dd-7c47-46aa-8325-68733306fc28/files/e0c9cb00-290b-4cb0-89c8-cf80d2d5d11a.jpg",
  },
  {
    id: 16,
    category: "white",
    tag: "Хит продаж",
    name: "Бай Му Дань",
    price: "980 ₽",
    desc: "«Белый пион» — цветочный белый чай с нежным и освежающим вкусом. 50 г.",
    img: "https://cdn.poehali.dev/projects/e50bf7dd-7c47-46aa-8325-68733306fc28/files/e0c9cb00-290b-4cb0-89c8-cf80d2d5d11a.jpg",
  },
  // Чайные напитки
  {
    id: 17,
    category: "drinks",
    tag: "Новинка",
    name: "Комбуча Имбирь",
    price: "350 ₽",
    desc: "Ферментированный чайный напиток с имбирём и лимоном. Живой и бодрящий. 500 мл.",
    img: "https://cdn.poehali.dev/projects/e50bf7dd-7c47-46aa-8325-68733306fc28/files/79a35b18-bb57-4168-bd21-fb2b4df492b9.jpg",
  },
  {
    id: 18,
    category: "drinks",
    tag: "Популярное",
    name: "Чай Масала",
    price: "290 ₽",
    desc: "Готовая смесь для масала-чая: специи, имбирь, корица. На 10 порций.",
    img: "https://cdn.poehali.dev/projects/e50bf7dd-7c47-46aa-8325-68733306fc28/files/79a35b18-bb57-4168-bd21-fb2b4df492b9.jpg",
  },
  // Кофе
  {
    id: 19,
    category: "coffee",
    tag: "Хит продаж",
    name: "Эфиопия Иргачефф",
    price: "780 ₽",
    desc: "Натуральная обработка. Черника, жасмин, горький шоколад. Средняя обжарка. 250 г.",
    img: "https://cdn.poehali.dev/projects/e50bf7dd-7c47-46aa-8325-68733306fc28/files/3803d1a1-0e94-4680-b528-62b3dad2fc3c.jpg",
  },
  {
    id: 20,
    category: "coffee",
    tag: "Популярное",
    name: "Колумбия Хуила",
    price: "720 ₽",
    desc: "Мытая обработка. Карамель, красное яблоко, ваниль. 250 г.",
    img: "https://cdn.poehali.dev/projects/e50bf7dd-7c47-46aa-8325-68733306fc28/files/3803d1a1-0e94-4680-b528-62b3dad2fc3c.jpg",
  },
  {
    id: 21,
    category: "coffee",
    tag: "Новинка",
    name: "Кения АА",
    price: "850 ₽",
    desc: "Смородина, помело, чёрный чай. Яркая кислотность. Светлая обжарка. 250 г.",
    img: "https://cdn.poehali.dev/projects/e50bf7dd-7c47-46aa-8325-68733306fc28/files/3803d1a1-0e94-4680-b528-62b3dad2fc3c.jpg",
  },
  // Чайные аксессуары
  {
    id: 22,
    category: "accessories",
    tag: "Хит продаж",
    name: "Гайвань керамика",
    price: "1 900 ₽",
    desc: "Классическая китайская гайвань из белой глины. Объём 150 мл.",
    img: "https://cdn.poehali.dev/projects/e50bf7dd-7c47-46aa-8325-68733306fc28/files/e4749832-a98d-4444-b32b-cf8f6ac84f6a.jpg",
  },
  {
    id: 23,
    category: "accessories",
    tag: "Популярное",
    name: "Чайник исинская глина",
    price: "3 500 ₽",
    desc: "Аутентичный чайник из исинской пурпурной глины. Объём 200 мл.",
    img: "https://cdn.poehali.dev/projects/e50bf7dd-7c47-46aa-8325-68733306fc28/files/e4749832-a98d-4444-b32b-cf8f6ac84f6a.jpg",
  },
  {
    id: 24,
    category: "accessories",
    tag: "Новинка",
    name: "Бамбуковый поднос",
    price: "1 200 ₽",
    desc: "Чайный стол-поднос из натурального бамбука. 40×20 см.",
    img: "https://cdn.poehali.dev/projects/e50bf7dd-7c47-46aa-8325-68733306fc28/files/e4749832-a98d-4444-b32b-cf8f6ac84f6a.jpg",
  },
  // Подарочные наборы
  {
    id: 25,
    category: "gifts",
    tag: "Популярное",
    name: "Набор «Чайная церемония»",
    price: "4 900 ₽",
    desc: "Гайвань + 3 сорта чая + бамбуковый поднос. Всё для домашней церемонии.",
    img: "https://cdn.poehali.dev/projects/e50bf7dd-7c47-46aa-8325-68733306fc28/files/e4749832-a98d-4444-b32b-cf8f6ac84f6a.jpg",
  },
  {
    id: 26,
    category: "gifts",
    tag: "Хит продаж",
    name: "Набор «Чайный путь»",
    price: "2 800 ₽",
    desc: "5 сортов чая в красивой коробке: пуэр, улун, белый, зелёный, красный.",
    img: "https://cdn.poehali.dev/projects/e50bf7dd-7c47-46aa-8325-68733306fc28/files/e4749832-a98d-4444-b32b-cf8f6ac84f6a.jpg",
  },
  {
    id: 27,
    category: "gifts",
    tag: "Новинка",
    name: "Набор «Утренний кофе»",
    price: "3 200 ₽",
    desc: "3 вида specialty-кофе + керамическая кружка в подарочной упаковке.",
    img: "https://cdn.poehali.dev/projects/e50bf7dd-7c47-46aa-8325-68733306fc28/files/3803d1a1-0e94-4680-b528-62b3dad2fc3c.jpg",
  },
];

export default function Catalog() {
  const [activeCategory, setActiveCategory] = useState("puer");
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();
  const location = useLocation();
  const { openCart, count, addItem } = useCart();

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
            {/* Боковое меню категорий */}
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
                      onClick={() => setActiveCategory(cat.id)}
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

            {/* Товары */}
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
                {categories.find((c) => c.id === activeCategory)?.label}
              </h3>
              <div className="menu-grid">
                {filtered.map((product) => (
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