import Nav from "./Nav/Nav";
import Logo from "./Logo/Logo";

export default function Header() {
  return (
    <header className="de-header">
      <div className="de-header__container">
        <Logo />
        <label>
          <input
            className="de-header__input"
            type="text"
            placeholder="Pesquisar"
          />
        </label>
        <Nav />
      </div>
    </header>
  );
}
