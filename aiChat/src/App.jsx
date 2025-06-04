import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0f0d29] to-[#1f1d3a] text-white font-sans">
      <Header />
      <HeroSection />
      <Footer />
    </div>
  );
}

export default App;
