import Stories from "../Stories/Stories";
import Posts from "../Posts/Posts.jsx";

export default function Feed() {
  return (
    <div className="de-feed">
      <Stories />
      <Posts />
    </div>
  );
}
