import { useState } from "react";

import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Works from "./components/Works";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
const App: React.FC = () => {
  const [darkMode, setDarkMode] = useState<boolean>(true);
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggleMenu = (): void => {
    setIsOpen((prev) => !prev);
  };

  const toggleTheme = (): void => {
    setDarkMode((prev) => !prev);
  };
  return (
    <div
      className={`w-full h-full min-h-[100vh] bg-white ${darkMode && "dark"}`}
    >
      <div className="w-full h-full min-h-[100vh] bg-white ">
        <div className="dark:bg-gradient-to-tr from-[#0235a3] via-[#030a1c] to-[#05174e]">
          <Navbar
            darkMode={darkMode}
            isOpen={isOpen}
            toggleMenu={toggleMenu}
            toggleTheme={toggleTheme}
          />
          <section id="home" className="px-0 lg:px-5 2xl:px-40 py-0 lg:py-0">
            <Header />
          </section>
        </div>
        <section className="w-full bg-[#061130] py-20 ">
          <Works />
        </section>
        <section
          id="about"
          className="w-full px-0 lg:px-5 2xl:px-40 py-10 lg:py-0 dark:bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-[#030a1c] to-[#05174e]"
        >
          <About />
        </section>
        <section
          id="skills"
          className="w-full px-0 lg:px-5 2xl:px-40 py-10 lg:py-0 dark:bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-[#05174e] to-[#030a1c]"
        >
          <Skills />
        </section>
        <section
          id="projects"
          className="w-full px-0 lg:px-5 2xl:px-40 py-10 lg:py-0 dark:bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-[#030a1c] to-[#05174e]"
        >
          <Projects />
        </section>
        <div className="w-full px-0 lg:px-5 2xl:px-40 py-10 lg:py-0 bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-[#05174e] to-[#030a1c] ">
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default App;
