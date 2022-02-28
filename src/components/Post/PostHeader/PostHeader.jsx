export default function PostHeader({ profileImage, username }) {
  return (
    <div className="de-post__header">
      <img src={profileImage} alt={username} />
      <span>{username}</span>
      <img src="./images/ellipsis-horizontal.svg" alt="ellipsis-horizontal" />
    </div>
  );
}
