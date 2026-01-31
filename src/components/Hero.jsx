export default function Hero({ boops, onBoop, mood, setMood }) {
  const moodText =
    mood === "royal"
      ? "His Royal Fluffiness requests head scratches."
      : mood === "chaos"
      ? "Zoomies are lifestyle."
      : "Professional napper. Full-time snack inspector.";

  return (
    <section className="card hero">
      <div className="heroLeft">
        <h1>
          Meet <span className="accent">Pear</span>🍐
        </h1>
        <p className="muted">{moodText}</p>

        <div className="row">
          <button className="primary" onClick={onBoop}>
            Boop Pear✨
          </button>
          <div className="pill">Boops: {boops}</div>
        </div>

        <div className="row">
          <label className="label">Mood</label>
          <select
            className="select"
            value={mood}
            onChange={(e) => setMood(e.target.value)}
          >
            <option value="calm">Calm</option>
            <option value="royal">Royal</option>
            <option value="chaos">Chaos</option>
          </select>
        </div>
      </div>
      <div className="heroRight">
        <div className="pearAvatar" aria-label="Pear avatar">
          <div className="ear left" />
          <div className="ear right" />
          <div className="face">
            <div className="eye left" />
            <div className="eye right" />
            <div className="nose" />
            <div className="blush left" />
            <div className="blush right" />
          </div>
        </div>
        <div className="hint">Tip: try “Chaos” mood 😈</div>
      </div>
    </section>
  );
}
