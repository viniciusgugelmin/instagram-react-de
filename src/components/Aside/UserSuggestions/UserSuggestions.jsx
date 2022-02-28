import { useEffect, useState } from "react";
import UserSuggestion from "./UserSuggestion/UserSuggestion";

export default function UserSuggestions() {
  const [suggestions, setSuggestions] = useState([]);

  useEffect(() => {
    setSuggestions([
      {
        profileID: "bad.vibes.memes",
        profileImage: "./images/badvibesmemes.png",
        username: "badvibesmemes",
        isFollowing: true,
      },
      {
        profileID: "razoesparaacreditar",
        profileImage: "./images/razoesparaacreditar.svg",
        username: "razoesparaacreditar",
        isFollowing: false,
      },
      {
        profileID: "adorable_animals",
        profileImage: "./images/adorableanimals.svg",
        username: "adorableanimals",
        isFollowing: false,
      },
      {
        profileID: "smallcutecats",
        profileImage: "./images/smallcutecats.svg",
        username: "smallcutecats",
        isFollowing: true,
      },
    ]);
  }, []);

  return (
    <div className="de-aside__suggestions">
      <div className="title">
        <h3>Sugestões para você</h3>
        <span>Ver tudo</span>
      </div>
      <ul>
        {suggestions.map((suggestion) => (
          <UserSuggestion key={suggestion.profileID} {...suggestion} />
        ))}
      </ul>
    </div>
  );
}
