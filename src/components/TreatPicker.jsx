import { useMemo, useState } from "react";

export default function TreatPicker() {
  const treats = useMemo(
    () => [
      "Samlon bites",
      "Peanut butter",
      "Cheese cube",
      "Chicken strip",
      "Apple slice",
    ],
    [],
  );

  const [treat, setTreat] = useState("Salmon bites");
  const [status, setStatus] = useState("Ready for treats");

  function pickTreat() {
    const next = treats[Math.floor(Math.random() * treats.length)];
    setTreat(next);
    setStatus("Pear approves");

    window.clearTimeout(pickTreat._t);
    pickTreat._t = window.setTimeout(() => setStatus("Ready for treats"), 900);
  }

  return (
    <section className="card">
      <h2>Treat Picker</h2>
      <p className="muted">Click to choose a random snack for Pear</p>

      <div className="row">
        <button className="secondary" onClick={pickTreat}>
          Pick a treat 🎲
        </button>
        <div className="pill">{treat}</div>
      </div>
      <div className="status">{status}</div>
    </section>
  );
}
