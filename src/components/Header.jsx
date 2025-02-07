function Header({ toggle, darkMode }) {
  return (
    <>
      <header className="header">
        <h1>Rakim Craig</h1>
        <button
          className="btn"
          onClick={toggle}
          style={{
            backgroundColor: darkMode ? "var(--dark)" : "var(--light)",
            color: darkMode ? "var(--light)" : "var(--dark)",
            borderColor: darkMode ? "var(--light)" : "var(--dark)",
          }}
        >
          Dark Mode
        </button>
      </header>
    </>
  );
}
export default Header;
