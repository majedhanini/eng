import engineeringData from "../../data/engineeringData";
import "../../styles/header.css";

function Header({ navigate }) {
  return (
    <header className="site-header" dir="rtl">
      <div className="container header-container">
        <button
          type="button"
          className="header-brand"
          onClick={() => navigate("/")}
        >
          <div className="header-brand-mark">126</div>

          <div className="header-brand-text">
            <span>ENGINEERING</span>
            <strong>دليل طلبة الهندسة</strong>
          </div>
        </button>

        <nav className="header-nav">
          <button
            type="button"
            className="header-nav-link"
            onClick={() => navigate("/")}
          >
            الرئيسية
          </button>

          <button
            type="button"
            className="header-nav-link"
            onClick={() => {
              navigate("/");

              setTimeout(() => {
                document.querySelector(".majors-section")?.scrollIntoView({
                  behavior: "smooth",
                });
              }, 50);
            }}
          >
            التخصصات
          </button>
        </nav>
      </div>
    </header>
  );
}

export default Header;
