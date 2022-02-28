import { useEffect, useState } from "react";
import Aside from "../Aside/Aside";
import Feed from "../Feed/Feed";

export default function Content() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    setUser({
      profileImage: "./images/catanacomics.png",
      username: "catanacomics",
      profileID: "Catana",
    });
  }, []);

  return (
    <main className="de-content">
      <Feed />
      <Aside user={user} />
    </main>
  );
}
