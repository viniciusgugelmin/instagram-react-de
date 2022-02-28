import { useEffect, useState } from "react";
import Post from "../Post/Post";

export default function Posts() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    setPosts([
      {
        profileImage: "./images/9gag_logo.png",
        username: "9gag",
        image: "./images/gato-telefone.png",
        lastLiker: {
          profileImage: "./images/respondeai.svg",
          username: "respondeai",
        },
        likes: 101523,
      },
      {
        profileImage: "./images/meowed.svg",
        username: "meowed",
        image: "./images/gato-telefone.png",
        lastLiker: {
          profileImage: "./images/respondeai.svg",
          username: "respondeai",
        },
        likes: 3,
      },
    ]);
  }, []);

  return (
    <div className="posts">
      {posts.map((post, index) => (
        <Post key={index} {...post} />
      ))}
    </div>
  );
}
