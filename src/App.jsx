import { useEffect, useState } from "react";
import Home from "./pages/Home";
import MajorPage from "./pages/MajorPage";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import "./styles/global.css";

function App() {
  const [currentPath, setCurrentPath] = useState(window.location.pathname);

  const scrollToTop = () => {
    window.scrollTo(0, 0);
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
  };

  const navigate = (path) => {
    window.history.pushState({}, "", path);
    setCurrentPath(path);

    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        scrollToTop();
      });
    });
  };

  useEffect(() => {
    const handlePopState = () => {
      setCurrentPath(window.location.pathname);

      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          scrollToTop();
        });
      });
    };

    window.addEventListener("popstate", handlePopState);

    return () => {
      window.removeEventListener("popstate", handlePopState);
    };
  }, []);

  const cleanPath =
    currentPath !== "/" && currentPath.endsWith("/")
      ? currentPath.slice(0, -1)
      : currentPath;

  const pathParts = cleanPath.split("/").filter(Boolean);

  if (cleanPath === "/") {
    return (
      <>
        <Header navigate={navigate} />
        <Home navigate={navigate} />
        <Footer />
      </>
    );
  }

  if (pathParts.length === 2 && pathParts[0] === "major") {
    return (
      <>
        <Header navigate={navigate} />

        <MajorPage navigate={navigate} majorId={pathParts[1]} />

        <Footer />
      </>
    );
  }

  return (
    <>
      <Header navigate={navigate} />

      <main
        style={{
          minHeight: "100vh",
          display: "grid",
          placeItems: "center",
          padding: "30px",
          textAlign: "center",
        }}
      >
        <div>
          <h1>الصفحة غير موجودة</h1>

          <button
            type="button"
            onClick={() => navigate("/")}
            style={{
              marginTop: "20px",
              padding: "12px 18px",
              cursor: "pointer",
            }}
          >
            العودة للرئيسية
          </button>
        </div>
      </main>

      <Footer />
    </>
  );
}

export default App;
