export default function Header({ page, setPage }) {
  return (
    <header className="header">
      <div className="brand">
        <span className="logo">🍐</span>
        <div className="brandName">Pear</div>
        <div className="brandTag">royal chonk corner</div>
      </div>

      <nav className="nav">
        <button
          className={page === "home" ? "navBtn active" : "navBtn"}
          onClick={() => setPage("home")}
        >
          Home
        </button>

        <button
          className={page === "care" ? "navBtn active" : "navBtn"}
          onClick={() => setPage("care")}
        >
          Care
        </button>

        <button
          className={page === "walks" ? "navBtn active" : "navBtn"}
          onClick={() => setPage("walks")}
        >
          Walks
        </button>
      </nav>
    </header>
  );
}
