import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCart } from "@/context/CartContext";
import Icon from "@/components/ui/icon";

export default function Index() {
  const navigate = useNavigate();
  const { openCart, count } = useCart();
  const [search, setSearch] = useState("");
  return (
    <>
      <div className="grain-overlay" />

      <header className="header">
        <div className="logo">ПУЭРчик</div>
        <nav>
          <a href="#">Чай</a>
          <a href="#">О нас</a>
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
        <section className="hero">
          <div className="hero-content">
            <h1 className="hero-title">
              НЕ ПРОСТО ЧАЙ,
              <br />
              ЦЕЛЫЙ <span>Ритуал</span>
            </h1>
            <p className="text-base md:text-lg lg:text-xl mb-8 md:mb-10 leading-relaxed text-[#555]">
              Редкие сорта со всего мира. Настоящий улун, матча и пуэр — каждая чашка рассказывает историю. Доставим прямо к вашей двери.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-5">
              <button className="btn-cta" style={{ background: "var(--primary)", color: "white" }}>
                Заказать с доставкой
              </button>
              <button className="btn-cta" style={{ background: "white" }} onClick={() => navigate("/catalog")}>
                Смотреть каталог
              </button>
            </div>

            <div style={{ marginTop: "24px", display: "flex", alignItems: "center", border: "var(--border)", background: "white", maxWidth: "480px" }}>
              <span style={{ padding: "0 14px", display: "flex", alignItems: "center", color: "#999" }}>
                <Icon name="Search" size={18} />
              </span>
              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && search.trim() && navigate(`/catalog?q=${encodeURIComponent(search.trim())}`)}
                placeholder="Найти чай... например, пуэр или матча"
                style={{
                  flex: 1,
                  border: "none",
                  outline: "none",
                  padding: "14px 0",
                  fontSize: "15px",
                  background: "transparent",
                  fontFamily: "inherit",
                }}
              />
              {search && (
                <button
                  onClick={() => setSearch("")}
                  style={{ padding: "0 14px", background: "none", border: "none", cursor: "pointer", color: "#999" }}
                >
                  <Icon name="X" size={16} />
                </button>
              )}
              <button
                onClick={() => search.trim() && navigate(`/catalog?q=${encodeURIComponent(search.trim())}`)}
                style={{
                  padding: "14px 20px",
                  background: "var(--dark)",
                  color: "white",
                  border: "none",
                  cursor: "pointer",
                  fontWeight: 800,
                  fontSize: "13px",
                  textTransform: "uppercase",
                  letterSpacing: "0.05em",
                  fontFamily: "inherit",
                }}
              >
                Найти
              </button>
            </div>
          </div>
          <div className="hero-img" style={{ backgroundImage: `url("https://cdn.poehali.dev/projects/e50bf7dd-7c47-46aa-8325-68733306fc28/files/81833cb6-e713-40d4-b716-109bc8aebbd6.jpg")` }}>
            <div className="sticker">
              СВЕЖИЙ
              <br />
              УРОЖАЙ
            </div>
            <div className="floating-tag hidden md:block" style={{ top: "20%", left: "10%" }}>
              #ЧАЙНЫЙВАЙБ
            </div>
            <div className="floating-tag hidden md:block" style={{ bottom: "30%", right: "20%" }}>
              С ДУШОЙ
            </div>
          </div>
        </section>

        <div className="marquee">
          <div className="marquee-content">
            &nbsp; * УЛУН ЧТО СНОСИТ КРЫШУ * МАТЧА ИЗ ЯПОНИИ * ТОЛЬКО НАСТОЯЩИЙ ЧАЙ * ДОСТАВКА ПО ВСЕЙ СТРАНЕ * ЛУЧШИЕ СОРТА МИРА *
            УЛУН ЧТО СНОСИТ КРЫШУ * МАТЧА ИЗ ЯПОНИИ * ТОЛЬКО НАСТОЯЩИЙ ЧАЙ * ДОСТАВКА ПО ВСЕЙ СТРАНЕ * ЛУЧШИЕ СОРТА МИРА
          </div>
        </div>

        <section className="section-padding">
          <div className="section-header">
            <h2 className="section-title">ХИТ СЕЗОНА</h2>
            <a
              href="#"
              className="text-sm md:text-base"
              style={{ color: "var(--dark)", fontWeight: 800, textTransform: "uppercase" }}
            >
              Весь каталог
            </a>
          </div>

          <div className="menu-grid">
            {/* Item 1 */}
            <div className="menu-card">
              <span className="menu-tag">Хит продаж</span>
              <img
                src="https://cdn.poehali.dev/projects/e50bf7dd-7c47-46aa-8325-68733306fc28/files/d46edc75-6e13-4c7b-bac4-367c99c9ed66.jpg"
                alt="Тайваньский улун"
              />
              <div className="menu-card-body">
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    marginBottom: "10px",
                  }}
                >
                  <h3>Тайваньский Улун</h3>
                  <span className="price">890 ₽</span>
                </div>
                <p style={{ fontSize: "14px", color: "#666" }}>
                  Высокогорный улун с персиковым ароматом и медовым послевкусием. 50 г.
                </p>
              </div>
            </div>

            {/* Item 2 */}
            <div className="menu-card">
              <span className="menu-tag" style={{ background: "var(--secondary)" }}>
                Из Японии
              </span>
              <img
                src="https://cdn.poehali.dev/projects/e50bf7dd-7c47-46aa-8325-68733306fc28/files/e0c9cb00-290b-4cb0-89c8-cf80d2d5d11a.jpg"
                alt="Японская матча"
              />
              <div className="menu-card-body">
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    marginBottom: "10px",
                  }}
                >
                  <h3>Матча Церемониал</h3>
                  <span className="price">1 400 ₽</span>
                </div>
                <p style={{ fontSize: "14px", color: "#666" }}>Премиальная матча первого помола из Удзи. Ярко-зелёная, бархатистая. 30 г.</p>
              </div>
            </div>

            {/* Item 3 */}
            <div className="menu-card">
              <span className="menu-tag" style={{ background: "var(--accent)", color: "var(--dark)" }}>
                Популярное
              </span>
              <img
                src="https://cdn.poehali.dev/projects/e50bf7dd-7c47-46aa-8325-68733306fc28/files/baa53550-0c19-4e90-8472-412d549fffe4.jpg"
                alt="Ассам Голд"
              />
              <div className="menu-card-body">
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    marginBottom: "10px",
                  }}
                >
                  <h3>Ассам Голд</h3>
                  <span className="price">650 ₽</span>
                </div>
                <p style={{ fontSize: "14px", color: "#666" }}>
                  Крепкий индийский чёрный чай с золотыми типсами. Идеален с молоком. 50 г.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="retro-vibe">
          <div>
            <h2 className="vibe-title">ЧАЙ — ЭТО КУЛЬТУРА.</h2>
            <p className="vibe-text">
              Мы не просто продаём чай. Мы привозим редкие сорта напрямую от плантаций Китая, Японии и Индии. Каждая партия проходит дегустацию. Вы получаете именно то, что мы сами пьём каждый день.
            </p>
            <button className="btn-cta" style={{ background: "var(--dark)", color: "white", borderColor: "white" }}>
              Наша история
            </button>
          </div>
          <div className="vibe-img" style={{ backgroundImage: `url("https://cdn.poehali.dev/projects/e50bf7dd-7c47-46aa-8325-68733306fc28/files/ef89b0e2-e86e-4594-8ef8-6428e61cdf50.jpg")`, backgroundSize: "cover", backgroundPosition: "center" }}></div>
        </section>

        <section className="section-padding">
          <h2 className="section-title" style={{ marginBottom: "40px", textAlign: "center" }}>
            @CHAIKHAU
          </h2>
          <div className="social-grid">
            <div className="social-item">
              <img
                src="https://cdn.poehali.dev/projects/e50bf7dd-7c47-46aa-8325-68733306fc28/files/d46edc75-6e13-4c7b-bac4-367c99c9ed66.jpg"
                alt="Чай 1"
              />
            </div>
            <div className="social-item">
              <img
                src="https://cdn.poehali.dev/projects/e50bf7dd-7c47-46aa-8325-68733306fc28/files/e0c9cb00-290b-4cb0-89c8-cf80d2d5d11a.jpg"
                alt="Чай 2"
              />
            </div>
            <div className="social-item">
              <img
                src="https://cdn.poehali.dev/projects/e50bf7dd-7c47-46aa-8325-68733306fc28/files/ef89b0e2-e86e-4594-8ef8-6428e61cdf50.jpg"
                alt="Чай 3"
              />
            </div>
            <div className="social-item">
              <img
                src="https://cdn.poehali.dev/projects/e50bf7dd-7c47-46aa-8325-68733306fc28/files/baa53550-0c19-4e90-8472-412d549fffe4.jpg"
                alt="Чай 4"
              />
            </div>
          </div>
        </section>
      </main>

      <footer>
        <div>
          <div className="footer-logo">ПУЭРчик</div>
          <p style={{ color: "#666", lineHeight: 1.6 }}>
            Редкие сорта чая со всего мира — прямо к вашей двери. Работаем с 2020, но чай любим вечно.
          </p>
        </div>
        <div className="footer-links">
          <h4>Навигация</h4>
          <ul>
            <li>
              <a href="#" style={{ color: "inherit", textDecoration: "none" }}>
                Каталог
              </a>
            </li>
            <li>
              <a href="#" style={{ color: "inherit", textDecoration: "none" }}>
                О нас
              </a>
            </li>
            <li>
              <a href="#" style={{ color: "inherit", textDecoration: "none" }}>
                Доставка
              </a>
            </li>
            <li>
              <a href="#" style={{ color: "inherit", textDecoration: "none" }}>
                Политика
              </a>
            </li>
            <li>
              <a href="#" style={{ color: "inherit", textDecoration: "none" }}>
                Условия
              </a>
            </li>
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