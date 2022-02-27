export default function Aside() {
  return (
    <aside className="menu-lateral">
      <div className="menu-sticky">
        <div className="menu-laterial-perfil">
          <img src="./images/catanacomics.png" alt="profile" />
          <div className="nome-perfil">
            <h1>catanacomics</h1>
            <h2>Catana</h2>
          </div>
        </div>
        <div className="grid-sugestoes">
          <div className="title">
            <h3>Sugestões para você</h3>
            <span>Ver tudo</span>
          </div>
          <ul>
            <li>
              <img src="./images/badvibesmemes.png" alt="badvibesmemes" />
              <div className="nome-perfil">
                <h1>bad.vibes.memes</h1>
                <h2>Segue você</h2>
              </div>
              <h4>Seguir</h4>
            </li>
            <li>
              <img src="./images/chibirdart.svg" alt="badvibesmemes" />
              <div className="nome-perfil">
                <h1>chibirdart</h1>
                <h2>Segue você</h2>
              </div>
              <h4>Seguir</h4>
            </li>
            <li>
              <img src="./images/razoesparaacreditar.svg" alt="badvibesmemes" />
              <div className="nome-perfil">
                <h1>razoesparaacreditar</h1>
                <h2>Novo no Instagram</h2>
              </div>
              <h4>Seguir</h4>
            </li>
            <li>
              <img src="./images/adorableanimals.svg" alt="badvibesmemes" />
              <div className="nome-perfil">
                <h1>adorable_animals</h1>
                <h2>Segue você</h2>
              </div>
              <h4>Seguir</h4>
            </li>
            <li>
              <img src="./images/smallcutecats.svg" alt="badvibesmemes" />
              <div className="nome-perfil">
                <h1>smallcutecats</h1>
                <h2>Segue você</h2>
              </div>
              <h4>Seguir</h4>
            </li>
          </ul>
        </div>
        <div className="copyright">
          <p>
            Sobre • Ajuda • Imprensa • API • Carreiras • Privacidade • Termos •
            Localizações • Contas mais relevantes • Hashtags • Idioma
          </p>
          <p>© 2021 INSTAGRAM DO FACEBOOK</p>
        </div>
      </div>
    </aside>
  );
}
