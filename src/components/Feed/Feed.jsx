import Stories from "../Stories/Stories";
import Posts from "./Posts/Posts.jsx";

export default function Feed() {
  return (
    <div className="feed">
      <Stories />
      <Posts />
    </div>
  );
}
