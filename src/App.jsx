import { useState } from "react";
import Header from "./components/Header.jsx";
import Hero from "./components/Hero.jsx";
import TreatPicker from "./components/TreatPicker.jsx";
import CareChecklist from "./components/CareCheckList.jsx";
import WalkTracker from "./components/WalkTracker.jsx";
import Footer from "./components/Footer.jsx";
import "./index.css";

function App() {
  const [page, setPage] = useState("home");
  const [boops, setBoops] = useState(0);
  const [mood, setMood] = useState("calm");

  function onBoop() {
    setBoops((b) => b + 1);
  }

  return (
    <div className="app">
      <Header page={page} setPage={setPage} />

      <main className="main">
        {page === "home" && (
          <>
            <Hero boops={boops} onBoop={onBoop} mood={mood} setMood={setMood} />
            <TreatPicker />
          </>
        )}

        {page === "care" && (
          <>
            <CareChecklist />
            <TreatPicker />
          </>
        )}

        {page === "walks" && <WalkTracker />}
      </main>

      <Footer />
    </div>
  );
}

export default App;
