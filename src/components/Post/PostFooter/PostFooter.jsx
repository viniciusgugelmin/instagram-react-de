import { useEffect, useState } from "react";

export default function PostFooter({ lastLiker, likes }) {
  const [realLikes, setRealLikes] = useState(likes - 1);

  useEffect(() => {
    setRealLikes(likes - 1);
  }, [likes]);

  return (
    <>
      <div className="de-post__interactions">
        <div className="de-post__main-interactions">
          <ion-icon name="heart-outline"></ion-icon>
          <ion-icon name="chatbubble-outline"></ion-icon>
          <ion-icon name="paper-plane-outline"></ion-icon>
        </div>
        <ion-icon name="bookmark-outline"></ion-icon>
      </div>
      <div className="de-post__likes">
        {lastLiker && (
          <>
            <img src={lastLiker.profileImage} alt={lastLiker.username} />
            <span>
              Curtido por <strong>{lastLiker.username}</strong>
              {realLikes > 0 && (
                <>
                  {" "}
                  e{" "}
                  <strong>
                    {realLikes > 1 && "outras"} {realLikes} pessoa
                    {realLikes > 2 && "s"}
                  </strong>
                </>
              )}
            </span>
          </>
        )}
      </div>
    </>
  );
}
