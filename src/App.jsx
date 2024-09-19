import ButtonGradient from "./assets/svg/ButtonGradient";

import Header from "./components/Header";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import Services from "./components/Services";
import Pricing from "./components/Pricing";
import Roadmap from "./components/Roadmap";
import Property from "./components/Property.JSX";
import Contact from "./components/Contact";
import About from "./components/About";

const App = () => {
  return (
    <>
      <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
        <Header />
        <Hero />
        <Property />
        <About />
        <Services />
        <Pricing />
        <Roadmap />
        <Contact />
        <Footer />
      </div>
      <ButtonGradient />
    </>
  );
};

export default App;
