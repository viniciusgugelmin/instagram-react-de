export default function Posts() {
  return (
    <div className="posts">
      <div className="post">
        <div className="post-header">
          <img src="./images/meowed.svg" alt="meowed" />
          <span>meowed</span>
          <img
            src="./images/ellipsis-horizontal.svg"
            alt="ellipsis-horizontal"
          />
        </div>
        <img
          className="post-img"
          src="./images/gato-telefone.png"
          alt="gato-telefone"
        />
        <div className="post-interactions">
          <div className="main-interactions">
            <ion-icon name="heart-outline"></ion-icon>
            <ion-icon name="chatbubble-outline"></ion-icon>
            <ion-icon name="paper-plane-outline"></ion-icon>
          </div>
          <ion-icon name="bookmark-outline"></ion-icon>
        </div>
        <div className="likes">
          <img src="./images/respondeai.svg" alt="respondeai" />
          <span>
            Curtido por <strong>respondeai</strong> e{" "}
            <strong>outras 101.523 pessoas</strong>
          </span>
        </div>
      </div>
    </div>
  );
}
