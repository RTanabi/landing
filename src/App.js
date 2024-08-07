import "./App.css";
import Header from "./components/Header/Header";
import "./assets/js/script";
import Services from "./components/Services/Services";
import About from "./components/About/About";
import Qualities from "./components/Qualities/Qualities";
import Features from "./components/Features/Features";
import Map from "./components/Map/Map";

function App() {
  return (
    <div className="App">
      <Header />
      <Services />
      <About />
      <Qualities />
      <Features />
      <Map />
    </div>
  );
}

export default App;
