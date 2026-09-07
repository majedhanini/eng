import engineeringData from "../data/engineeringData";
import "../styles/home.css";

function Home({ navigate }) {
  return (
    <main className="home-page" dir="rtl">
      {/* HERO */}
      <section className="hero">
        <div className="container hero-container">
          <div className="hero-shabiba">
            <div className="hero-shabiba-logo-wrap">
              <img
                src="/shabiba-logo.png"
                alt="شعار حركة الشبيبة الطلابية"
                className="hero-shabiba-logo"
              />
            </div>

            <div className="hero-shabiba-text">
              <strong>حركة الشبيبة الطلابية</strong>
              <span>SHABIBA STUDENT MOVEMENT</span>
            </div>
          </div>

          <div className="hero-batch-label">
            <span></span>
            <p>ENGINEERING · BATCH 126</p>
            <span></span>
          </div>

          <h1 className="hero-title">
            حركة الشبيبة الطلابية
            <span> ترحب بكم</span>
          </h1>

          <div className="hero-guide-title">
            <span className="hero-guide-line"></span>

            <h2>
              دليل طلبة كلية الهندسة
              <strong> · دفعة 126</strong>
            </h2>

            <span className="hero-guide-line"></span>
          </div>

          <p className="hero-description">
            بداية جامعية أسهل وأكثر وضوحًا، نوفر لكم جروبات التخصصات والمساقات
            الأساسية وكل ما يساعد طلبة كلية الهندسة في بداية مشوارهم الجامعي.
          </p>

          <a
            className="guidance-button"
            href={engineeringData.guidanceGroup.url}
            target="_blank"
            rel="noopener noreferrer"
          >
            <span>إرشاد دفعة 126</span>

            <span className="guidance-arrow">↗</span>
          </a>
        </div>
      </section>

      {/* MAJORS */}
      <section className="majors-section">
        <div className="container">
          <div className="section-heading">
            <span>ENGINEERING MAJORS</span>

            <h2>اختر تخصصك</h2>

            <p>ادخل إلى صفحة تخصصك للوصول إلى جروب الدفعة وجروبات المساقات.</p>
          </div>

          <div className="majors-grid">
            {engineeringData.majors.map((major, index) => (
              <button
                type="button"
                className="major-card"
                key={major.id}
                onClick={() => navigate(`/major/${major.id}`)}
              >
                <div className="major-card-top">
                  <span className="major-number">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <span className="major-tag">ENG</span>
                </div>

                <div className="major-card-content">
                  <span className="major-english">{major.englishName}</span>

                  <h3>{major.name}</h3>

                  <p>جروب الدفعة وجروبات مساقات السنة الأولى.</p>
                </div>

                <div className="major-button">
                  <span>فتح التخصص</span>
                  <span>←</span>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

export default Home;
