import ProjectsList from "./components/ProjectsList";
import Header from "./components/Header";
import About from "./components/About";
import Contact from "./components/Contact";
import { useState } from "react";
import "./styles.css";

function App() {
  const [darkMode, setDarkMode] = useState(true);

  const handleToggle = () => {
    console.log("darkmode is" + darkMode);
    setDarkMode(!darkMode);
  };
  return (
    <>
      <div
        className="wrapper"
        style={{
          backgroundColor: darkMode ? "var(--dark)" : "var(--light)",
          color: darkMode ? "var(--light)" : "var(--dark)",
        }}
      >
        <Header toggle={handleToggle} darkMode={darkMode} />
        <About />
        <ProjectsList darkMode={darkMode} />
        <Contact darkMode={darkMode} />
      </div>
    </>
  );
}

export default App;
