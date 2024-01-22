import Footer from './components/Footer'
import './App.css'
import Component8 from './components/Component8'
import Component7 from './components/Component7'
import Component4 from "./components/component4";
import Component5 from "./components/component5";
import Component6 from "./components/component6";
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
      <Component7 />
      <Component8 />
      <Footer />
    </>
  );
}

export default App;
