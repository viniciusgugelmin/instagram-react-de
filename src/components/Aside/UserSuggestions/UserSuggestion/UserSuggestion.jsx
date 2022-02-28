export default function UserSuggestion({
  profileID,
  profileImage,
  username,
  isFollowing,
}) {
  return (
    <li>
      <img src={profileImage} alt={username} />
      <div className="nome-perfil">
        <h1>{profileID}</h1>
        <h2>{isFollowing ? "Segue você" : "Novo no instagram"}</h2>
      </div>
      <h4>Seguir</h4>
    </li>
  );
}
