import { useState } from "react";

export default function WalkTracker() {
  const [walks, setWalks] = useState([
    { id: 1, date: "2026-01-09", minutes: 40 },
    { id: 2, date: "2026-01-10", minutes: 25 },
  ]);

  const [date, setDate] = useState("2026-01-11");
  const [minutes, setMinutes] = useState(30);

  function addWalk(e) {
    e.preventDefault();

    const m = Number(minutes);
    if (!date) return;
    if (!Number.isFinite(m) || m <= 0) return;

    const newWalk = { id: crypto.randomUUID(), date, minutes: m };
    setWalks((prev) => [newWalk, ...prev]);
  }

  function removeWalk(id) {
    setWalks((prev) => prev.filter((w) => w.id !== id));
  }

  const total = walks.reduce((sum, w) => sum + w.minutes, 0);

  return (
    <section className="card">
      <h2>Walk Tracker</h2>
      <p className="muted">Add walks and remove them — like a mini app.</p>

      <form className="form" onSubmit={addWalk}>
        <div className="field">
          <label className="label">Date</label>
          <input
            className="input"
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
        </div>

        <div className="field">
          <label className="label">Minutes</label>
          <input
            className="input"
            type="number"
            min="1"
            value={minutes}
            onChange={(e) => setMinutes(e.target.value)}
          />
        </div>

        <button className="primary" type="submit">
          Add walk ➕
        </button>

        <div className="pill">Total minutes: {total}</div>
      </form>

      <div className="walkGrid">
        {walks.map((w) => (
          <div key={w.id} className="walkCard">
            <div className="walkTop">
              <div>
                <div className="walkDate">{w.date}</div>
                <div className="muted">{w.minutes} min</div>
              </div>

              <button
                className="iconBtn"
                onClick={() => removeWalk(w.id)}
                aria-label="Remove walk"
              >
                ✖
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
