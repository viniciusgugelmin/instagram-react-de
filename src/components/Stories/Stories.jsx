import { useState, useEffect } from "react";

import Story from "./Story/Story";

export default function Stories() {
  const [stories, setStories] = useState([]);

  useEffect(() => {
    setStories([
      {
        profileImage: "./images/9gag_logo.png",
        username: "9gag",
      },
      {
        profileImage: "./images/meowed.svg",
        username: "meowed",
      },
      {
        profileImage: "./images/barked.svg",
        username: "barked",
      },
      {
        profileImage: "./images/nathanwpylestrangeplanet.svg",
        username: "nathanwpyle",
      },
      {
        profileImage: "./images/wawawiwacomicsa.svg",
        username: "wawawiwac",
      },
      {
        profileImage: "./images/respondeai.svg",
        username: "respondeai",
      },
      {
        profileImage: "./images/filomoderna.svg",
        username: "filomoderna",
      },
      {
        profileImage: "./images/memeriagourmet.svg",
        username: "memeriago",
      },
    ]);
  }, []);

  return (
    <div className="de-stories">
      {stories.map((userStory, index) => (
        <Story key={index} {...userStory} />
      ))}
      <div className="de-story__scroll-button">
        <ion-icon name="chevron-forward-circle"></ion-icon>
      </div>
    </div>
  );
}
