import engineeringData from "../data/engineeringData";
import "../styles/university-required.css";

function UniversityRequired({ navigate }) {
  return (
    <main className="university-page" dir="rtl">
      <section className="university-hero">
        <div className="container university-hero-container">
          <button
            type="button"
            className="university-back"
            onClick={() => navigate("/")}
          >
            <span>→</span>
            <span>العودة للرئيسية</span>
          </button>

          <span className="university-kicker">UNIVERSITY REQUIRED COURSES</span>

          <h1>إجباري جامعة</h1>

          <p>جروبات المساقات الإجبارية المشتركة لطلبة الجامعة.</p>
        </div>
      </section>

      <section className="university-courses-section">
        <div className="container">
          <div className="university-courses-grid">
            {engineeringData.universityRequired.map((course, index) => {
              const hasLink = Boolean(course.url);

              return (
                <a
                  key={course.id}
                  className={`university-course-card ${
                    !hasLink ? "is-disabled" : ""
                  }`}
                  href={hasLink ? course.url : undefined}
                  target={hasLink ? "_blank" : undefined}
                  rel={hasLink ? "noopener noreferrer" : undefined}
                  onClick={(event) => {
                    if (!hasLink) {
                      event.preventDefault();
                    }
                  }}
                >
                  <div className="university-course-number">
                    {String(index + 1).padStart(2, "0")}
                  </div>

                  <div className="university-course-content">
                    <span>{course.englishName}</span>
                    <h3>{course.name}</h3>
                  </div>

                  <div className="university-course-action">
                    {hasLink ? "↗" : "قريبًا"}
                  </div>
                </a>
              );
            })}
          </div>
        </div>
      </section>
    </main>
  );
}

export default UniversityRequired;
