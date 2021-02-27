import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import BlogPosts from "./pages/BlogPosts";
import FAQs from "./pages/FAQs";
import Home from "./pages/Home";

const PAGES = { home: "Home", blogposts: "Blogposts", faqs: "FAQs" };

function App() {
  const [page, setPage] = useState(PAGES.home);

  function getPageContent() {
    if (page === PAGES.blogposts) {
      return <BlogPosts />;
    }
    if (page === PAGES.faqs) {
      return <FAQs />;
    }
    return <Home />;
  }

  return (
    <div>
      <header>
        <div className="logo">
          <a href="##" onClick={() => setPage(PAGES.home)}>
            <img src={logo} alt="logo" />
          </a>
        </div>
        <nav>
          <ul>
            <li>
              <a href="##" onClick={() => setPage(PAGES.home)}>
                {PAGES.home}
              </a>
            </li>
            <li>
              <a href="##" onClick={() => setPage(PAGES.blogposts)}>
                {PAGES.blogposts}
              </a>
            </li>
            <li>
              <a href="##" onClick={() => setPage(PAGES.faqs)}>
                {PAGES.faqs}
              </a>
            </li>
          </ul>
        </nav>
      </header>
      <main>{getPageContent()}</main>
    </div>
  );
}

export default App;
