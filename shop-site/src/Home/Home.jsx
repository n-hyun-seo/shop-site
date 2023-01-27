export default function Home() {
  return (
    <div className="home-page">
      <div className="nav-bar">
        <img
          src="https://cdn.cloudflare.steamstatic.com/steamdeck/images/sd_logo_gradient_animated.png"
          className="logo"
          alt="steam deck logo"
        ></img>
      </div>
      <div className="content">
        <div className="left">
          <p className="first-line">YOUR GAMES</p>
          <p className="second-line">ARE GOING</p>
          <p className="third-line">PLACES.</p>
        </div>
        <div className="right">
          <img
            src="https://cdn.arstechnica.net/wp-content/uploads/2022/03/elden-deck.png"
            className="sd-image"
            alt="steam deck"
          ></img>
          <button type="button" className="buy">
            Buy now!
          </button>
          <p className="delivery-estimate">Expected Delivery Date: 1-2 weeks</p>
        </div>
      </div>
    </div>
  );
}
