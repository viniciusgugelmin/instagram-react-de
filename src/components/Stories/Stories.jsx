import Story from "./Story/Story";

export default function Stories() {
  const userStories = [
    {
      profileImage: "./images/9gag_logo.svg.png",
      username: "9gag",
    },
  ];

  return (
    <div className="stories">
      {userStories.map((userStory, index) => (
        <Story
          key={index}
          profileImage={userStory.profileImage}
          username={userStory.username}
        />
      ))}
      <div className="story">
        <div className="thumbnail">
          <img src="./images/meowed.svg" alt="meowed" />
        </div>
        <span>meowed</span>
      </div>
      <div className="story">
        <div className="thumbnail">
          <img src="./images/barked.svg" alt="barked" />
        </div>
        <span>barked</span>
      </div>
      <div className="story">
        <div className="thumbnail">
          <img
            src="./images/nathanwpylestrangeplanet.svg"
            alt="nathanwpylestrangeplanet"
          />
        </div>
        <span>nathanwpyle</span>
      </div>
      <div className="story">
        <div className="thumbnail">
          <img src="./images/wawawiwacomicsa.svg" alt="wawawiwacomicsa" />
        </div>
        <span>wawawiwac</span>
      </div>
      <div className="story">
        <div className="thumbnail">
          <img src="./images/respondeai.svg" alt="respondeai" />
        </div>
        <span>respondeai</span>
      </div>
      <div className="story">
        <div className="thumbnail">
          <img src="./images/filomoderna.svg" alt="filomoderna" />
        </div>
        <span>filomoderna</span>
      </div>
      <div className="story">
        <div className="thumbnail">
          <img src="./images/memeriagourmet.svg" alt="memeriagourmet" />
        </div>
        <span>memeriago</span>
      </div>

      <div className="botao-scroll">
        <ion-icon name="chevron-forward-circle"></ion-icon>
      </div>
    </div>
  );
}
