import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import About from "./components/About/About";
import Technologies from "./components/Technologies/Technologies";
import Works from "./components/Works/Works";
import Services from "./components/Services/Services";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";

const App = () => {
  return (
    <>
      <Header />
      <Main />
      <About id="about" />
      <Technologies id="technologies"/>
      <Works id="works" />
      <Services id="services" />
      <Contact id="contact" />
      <Footer id="footer" />
    </>
  );
};

export default App;
