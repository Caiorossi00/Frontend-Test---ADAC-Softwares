import Hero from "./sections/Hero/Hero";
import Features from "./sections/Features/Features";
import "./App.css";
import Navbar from "./components/Navbar";
import Contents from "./sections/Contents/Contents";
import Gallery from "./sections/Gallery/Gallery";
import Partners from "./sections/Partners/Partners";
import Testimonials from "./sections/Testimonials/Testimonials";
import Footer from "./components/Footer";
import Card from "./components/Card";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Features />
      <Contents />
      <Gallery />
      {/* <Partners />
      <Testimonials />
      <Card />
      <Footer /> */}
    </>
  );
}

export default App;
