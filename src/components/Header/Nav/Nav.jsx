export default function NavHeader() {
  const navOptions = [
    "paper-plane-outline",
    "compass-outline",
    "heart-outline",
    "person-outline",
  ];

  return (
    <nav className="de-header__nav">
      {navOptions.map((option, index) => (
        <ion-icon key={index} name={option}></ion-icon>
      ))}
    </nav>
  );
}
