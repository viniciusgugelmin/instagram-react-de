export default function UserPreview({ profileImage, profileID, username }) {
  return (
    <div className="de-aside__user-preview">
      <img src={profileImage} alt={username} />
      <div className="de-aside__user-profile">
        <h1>{profileID}</h1>
        <h2>{username}</h2>
      </div>
    </div>
  );
}
