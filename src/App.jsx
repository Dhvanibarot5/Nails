import { useState } from "react";
import Header from "./components/header";
import HeroSection from "./components/HeroSection";
import FeaturedServices from "./components/FeaturedServices";
import PricingSection from "./components/PricingSection";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Header />
      <HeroSection />
      <FeaturedServices />
      <PricingSection />
    </>
  );
}

export default App;
