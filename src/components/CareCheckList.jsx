import { useState } from "react";

export default function CareCheckList() {
  const [items, setItems] = useState([
    { id: 1, text: "Fresh water", done: true },
    { id: 2, text: "Brush floof", done: false },
    { id: 3, text: "10 min playtime", done: false },
    { id: 4, text: "Treat (responsibly)", done: true },
  ]);

  function toggle(id) {
    setItems((prev) =>
      prev.map((it) => (it.id === id ? { ...it, done: !it.done } : it))
    );
  }

  const doneCount = items.filter((i) => i.done).length;

  return (
    <section className="card">
      <h2>Care Checklist</h2>
      <p className="muted">
        Completed: {doneCount}/{items.length}
      </p>

      <ul className="list">
        {items.map((it) => (
          <li key={it.id} className="listItem">
            <label className="checkRow">
              <input
                type="checkbox"
                checked={it.done}
                onChange={() => toggle(it.id)}
              />
              <span className={it.done ? "done" : ""}>{it.text}</span>
            </label>
          </li>
        ))}
      </ul>
    </section>
  );
}
