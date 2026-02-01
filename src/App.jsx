import Hero from "./sections/Hero/Hero";
import Features from "./sections/Features/Features";
import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Contents from "./sections/Contents/Contents";
import Gallery from "./sections/Gallery/Gallery";
import Partners from "./sections/Partners/Partners";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Features />
      <Contents />
      <Gallery />
      <Partners />
      <Footer />
    </>
  );
}

export default App;
