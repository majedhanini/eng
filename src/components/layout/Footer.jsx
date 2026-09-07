import "../../styles/footer.css";
import shabibaLogo from "../../assets/images/shabiba-logo.png";

function Footer() {
  return (
    <footer className="site-footer" dir="rtl">
      <div className="container footer-container">
        <div className="footer-brand">
          <div className="footer-logo-wrap">
            <img
              src={shabibaLogo}
              alt="شعار حركة الشبيبة الطلابية"
              className="footer-logo"
            />
          </div>

          <div className="footer-brand-text">
            <span className="footer-kicker">SHABIBA STUDENT MOVEMENT</span>

            <h2>حركة الشبيبة الطلابية</h2>

            <p>
              معكم من بداية الطريق، لدعم طلبة كلية الهندسة وتسهيل وصولهم
              للمعلومات والجروبات والمساقات.
            </p>

            <div className="footer-socials">
              <a
                href="https://www.facebook.com/share/1DksD9K1Qe/?mibextid=wwXIfr"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-social-link"
              >
                <span className="footer-social-icon">f</span>
                <span>Facebook</span>
              </a>

              <a
                href="https://www.instagram.com/shabiba.nnu?igsi=MWxkaWU0dTljZHZtYQ=="
                target="_blank"
                rel="noopener noreferrer"
                className="footer-social-link"
              >
                <span className="footer-social-icon">◎</span>
                <span>Instagram</span>
              </a>

              <a
                href="https://www.facebook.com/share/g/1CGbepuRS4/?mibextid=wwXIfr"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-social-link"
              >
                <span className="footer-social-icon">↗</span>
                <span>مجموعة الطلبة</span>
              </a>
            </div>
          </div>
        </div>

        <div className="footer-divider"></div>

        <div className="footer-bottom">
          <span>كلية الهندسة · دفعة 126</span>
          <span>حركة الشبيبة الطلابية</span>
        </div>

        <div className="footer-credit">
          Designed &amp; Developed by Majed Hanini
        </div>
      </div>
    </footer>
  );
}

export default Footer;
