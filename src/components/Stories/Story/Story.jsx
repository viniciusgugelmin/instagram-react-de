export default function Story({ profileImage, username }) {
  return (
    <div className="de-story">
      <div className="de-story__thumbnail">
        <img src={profileImage} alt={username} />
      </div>
      <span>username</span>
    </div>
  );
}
