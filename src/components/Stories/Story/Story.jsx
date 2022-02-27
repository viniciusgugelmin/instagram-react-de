export default function Story(props) {
  const { profileImage, username } = props;

  return (
    <div className="story">
      <div className="thumbnail">
        <img src={profileImage} alt={username} />
      </div>
      <span>username</span>
    </div>
  );
}
