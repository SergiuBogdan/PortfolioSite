import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./sections/Home";
import About from "./sections/About";
import Experience from "./sections/Experience";
import Projects from "./sections/Projects";
import Contact from "./sections/Contact";
import { BsChevronUp } from "react-icons/bs";
import { useState } from "react";

const App = () => {
  const [visibility, setVisibility] = useState(false);

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    setVisibility(scrolled > 300 ? true : false);
  };

  window.addEventListener("scroll", toggleVisible);

  return (
    <div className="flex flex-col min-h-screen justify-between">
      <Header />
      <main className="flex-1 overflow-hidden relative">
        <div>
          <Home />
          <About />
          <Experience />
          <Projects />
          <Contact />
        </div>
        <a
          href="#top"
          className={`fixed bottom-4 md:bottom-8 lg:bottom-10 right-4 md:right-10 lg:right-20 bg-cyan-800 text-stone-50 rounded-full p-4 border border-stone-50 ${
            visibility
              ? "opacity-100"
              : "opacity-0 pointer-events-none outline-none"
          }`}
        >
          <BsChevronUp className="text-xl" />
        </a>
      </main>
      <Footer />
    </div>
  );
};

export default App;
