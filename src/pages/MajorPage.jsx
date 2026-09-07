import engineeringData from "../data/engineeringData";
import "../styles/major-page.css";

function MajorPage({ navigate, majorId }) {
  const major = engineeringData.majors.find((item) => item.id === majorId);

  if (!major) {
    return (
      <main className="major-page" dir="rtl">
        <div className="container major-page-container">
          <h1>التخصص غير موجود</h1>

          <button
            type="button"
            className="major-back-button"
            onClick={() => navigate("/")}
          >
            العودة للرئيسية
          </button>
        </div>
      </main>
    );
  }

  return (
    <main className="major-page" dir="rtl">
      <div className="container major-page-container">
        <button
          type="button"
          className="major-back-button"
          onClick={() => navigate("/")}
        >
          <span>→</span>
          <span>العودة للتخصصات</span>
        </button>

        <section className="major-page-heading">
          <span className="major-page-label">ENGINEERING MAJOR</span>

          <h1>{major.name}</h1>

          <span className="major-page-english">{major.englishName}</span>

          <p>جميع الروابط المهمة لطلبة السنة الأولى في هذا التخصص.</p>
        </section>

        <section className="batch-group-section">
          <div className="section-small-label">BATCH GROUP</div>

          <h2>جروب الدفعة</h2>

          <p>الجروب المخصص لطلبة دفعة 126 في هذا التخصص.</p>

          <a
            className="batch-group-button"
            href={major.batchGroup}
            target="_blank"
            rel="noopener noreferrer"
          >
            <span>دخول جروب الدفعة</span>
            <span>↗</span>
          </a>
        </section>

        <section className="major-courses-section">
          <div className="major-courses-heading">
            <span className="section-small-label">FIRST YEAR COURSES</span>

            <h2>جروبات المساقات</h2>

            <p>اختر المساق الذي تريد الدخول إلى جروبه.</p>
          </div>

          <div className="major-courses-grid">
            {major.courses.map((courseId, index) => {
              const course = engineeringData.courseGroups[courseId];

              if (!course) return null;

              return (
                <a
                  key={courseId}
                  className="course-group-card"
                  href={course.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="course-group-number">
                    {String(index + 1).padStart(2, "0")}
                  </div>

                  <div className="course-group-content">
                    <span>{course.englishName}</span>

                    <h3>{course.name}</h3>

                    <p>الدخول إلى جروب المساق على واتساب</p>
                  </div>

                  <div className="course-group-arrow">↗</div>
                </a>
              );
            })}
          </div>
        </section>
      </div>
    </main>
  );
}

export default MajorPage;
