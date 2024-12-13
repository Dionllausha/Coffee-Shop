import React from "react";
import "./App.css";
import TopArea from "./components/TopArea";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import MiddlePart from "./components/MiddlePart";
import ArabicaRobusta from "./components/ArabicaRobusta";
import Quotes from "./components/Quoutes";
import InfoCoffee from "./components/InfoCoffee";
import FamousCoffees from "./components/FamousCoffees";
import ReserveYourTable from "./components/Reserveyourtable";
import OurTeam from "./components/OurTeam";
import CoffeeCourses from "./components/CoffeeCourses";
import Supplies from "./components/Supplies";
import Footer from "./components/Footer";
function App() {
  return (
    <div>
      <TopArea />
      <Navbar />
      <HeroSection />
      <MiddlePart />
      <ArabicaRobusta />
      <Quotes />
      <InfoCoffee />
      <FamousCoffees />
      <ReserveYourTable />
      <OurTeam />
      <CoffeeCourses />
      <Supplies />
      <Footer />
    </div>
  );
}

export default App;
