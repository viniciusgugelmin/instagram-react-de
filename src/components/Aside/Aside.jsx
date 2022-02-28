import UserPreview from "./UserPreview/UserPreview";
import UserSuggestions from "./UserSuggestions/UserSuggestions";

export default function Aside({ user }) {
  return (
    <aside className="de-aside">
      <div className="de-aside__container">
        <UserPreview {...user} />
        {user && <UserSuggestions />}
        <div className="de-aside__copyright">
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
