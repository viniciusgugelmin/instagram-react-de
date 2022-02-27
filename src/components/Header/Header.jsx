import Nav from "./Nav/Nav";
import Logo from "./Logo/Logo";

export default function Header() {
  return (
    <header className="header">
      <div className="menu-topo">
        <Logo />

        <label>
          <input type="text" placeholder="Pesquisar" />
        </label>

        <Nav />
      </div>
    </header>
  );
}
