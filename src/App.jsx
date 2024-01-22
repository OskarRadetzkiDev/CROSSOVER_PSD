import "./App.css";
import Component4 from "./components/component4";
import Component5 from "./components/component5";
import Component6 from "./components/component6";
import Footer from "./components/Footer";
import NavbarHero from "./components/Nav/NavbarHero";
import Cards from "./components/Cards/Cards";
import Info from "./components/Info/Info";

function App() {
  return (
    <>
      <NavbarHero />
      <Cards />
      <Component4 />
      <Component5 />
      <Component6 />
      <Info />
      <Footer />
    </>
  );
}

export default App;
