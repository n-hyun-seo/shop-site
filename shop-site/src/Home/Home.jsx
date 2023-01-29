export default function Home() {
  return (
    <div className="home-page">
      <div className="nav-bar">
        <button className="text hardware">Hardware</button>
        <button className="text news">News</button>
        <img
          src="https://cdn.cloudflare.steamstatic.com/steamdeck/images/sd_logo_gradient_animated.png"
          className="logo"
          alt="steam deck logo"
        ></img>

        <button className="text pricing">Pricing</button>
        <button className="text cart">Cart</button>
      </div>
      <div className="content">
        <p className="price">Prices starting at $399.99*</p>
        <p className="price-sub-text">
          *Prices may vary depending on your region.
        </p>
        <img
          src="https://cdn.arstechnica.net/wp-content/uploads/2022/03/elden-deck.png"
          className="sd-image"
          alt="steam deck"
        ></img>
        <button type="button" className="buy">
          Buy now!
        </button>
        <p className="delivery-estimate">Expected Delivery Date: 1-2 weeks**</p>
        <p className="delivery-sub-text">
          **Expected delivery date may vary depending on stock and demand.
        </p>
      </div>
      <img
        className="chat-agent"
        src="https://www.mayernetworks.com/wp-content/uploads/2021/07/support-icon.png"
        alt="support"
      ></img>
      <div className="my-info">
        <img
          className="github-image"
          src="https://git-scm.com/images/logos/downloads/Git-Icon-White.png"
          alt="github logo"
        />
        <a className="github-text" href="https://github.com/n-hyun-seo/shop-site" target="_blank">n-hyun-seo</a>
      </div>
    </div>
  );
}
