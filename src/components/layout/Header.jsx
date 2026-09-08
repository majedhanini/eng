import "../../styles/header.css";

function Header({ navigate }) {
  const goToMajors = () => {
    navigate("/");

    setTimeout(() => {
      document.querySelector(".majors-section")?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }, 80);
  };

  const goToUniversityRequired = () => {
    navigate("/");

    setTimeout(() => {
      document.querySelector("#university-required")?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }, 80);
  };

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
            onClick={goToMajors}
          >
            التخصصات
          </button>

          <button
            type="button"
            className="header-nav-link"
            onClick={goToUniversityRequired}
          >
            إجباري الجامعة
          </button>
        </nav>
      </div>
    </header>
  );
}

export default Header;
