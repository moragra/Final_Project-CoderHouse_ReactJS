export default function NavBar({ children }) {
  return (
    <nav className="NavBar">
      <h1>Utropico</h1>
      <ul>
        <li>
          <a href="/">Bedroom</a>
        </li>
        <li>
          <a href="/">Dining</a>
        </li>
        <li>
          <a href="/">Living</a>
        </li>
        <li>
          <a href="/">Lamps</a>
        </li>
      </ul>
      <ul>
        <li>{children}</li>
      </ul>
    </nav>
  );
}
