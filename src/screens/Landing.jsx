import React from "react";
// Sections
import TopNavbar from "../components/Nav/TopNavbar";
import Header from "../components/Sections/Header";
// import Services from "../components/Sections/Services";
import Projects from "../components/Sections/Projects";
import Blog from "../components/Sections/Blog";
import Pricing from "../components/Sections/Pricing";
import Contact from "../components/Sections/Contact";
import Footer from "../components/Sections/Footer"
import About from "../components/Sections/About";
import Product from "../components/Sections/Product";
import HireTalent from "../components/Sections/HireTalent";
import Team from "../components/Sections/Team";
import Carrers from "../components/Sections/Carrers";

export default function Landing() {
  return (
    <>
      <TopNavbar />
      <Header />
      <Pricing />
     <About></About>
     <Product/>
     <Team/>
      <Projects />
<HireTalent/>
      <Carrers/>
      <Blog />
      <Contact />
      <Footer />
    </>
  );
}


