import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import Navbar2 from "../../Components/Navbar2/Navbar2";
import Sidebar from "../../Components/Sidebar/Sidebar";
import Skills from "../../Components/Skills/Skills";
import Contact from "../Contact/Contact";
import Hero from "../Hero/Hero";
import Info from "../Info/Info";
import Projects from "../Projects/Projects";

const Main = () => {
  const [showSidebar, setShowSidebar] = useState(false);
  useEffect(() => {
    const sidebar = () => setShowSidebar(false);
    window.addEventListener("scroll", sidebar);
    return () => window.removeEventListener("scroll", sidebar);
  }, []);

  return (
    <div style={{ display: "flex" }}>
      <Sidebar close={() => setShowSidebar(false)} isVisible={showSidebar} />
      <div style={{ width: "100%" }}>
        <Navbar2 toggleSideBar={() => setShowSidebar(!showSidebar)} />
        <Hero />
        <Skills />
        <Info />
        <Projects />
        <Contact />
      </div>
    </div>
  );
};

export default Main;
