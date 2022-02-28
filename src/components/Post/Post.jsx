import PostFooter from "./PostFooter/PostFooter";
import PostHeader from "./PostHeader/PostHeader";

export default function Post({
  profileImage,
  username,
  image,
  lastLiker,
  likes,
}) {
  return (
    <div className="de-post">
      <PostHeader profileImage={profileImage} username={username} />
      <img className="de-post__image" src={image} alt="post-img" />
      <PostFooter lastLiker={lastLiker} likes={likes} />
    </div>
  );
}
