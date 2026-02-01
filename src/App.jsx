import Hero from "./sections/Hero/Hero";
import Features from "./sections/Features/Features";
import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Contents from "./sections/Contents/Contents";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Features />
      <Contents />
      <Footer />
    </>
  );
}

export default App;
