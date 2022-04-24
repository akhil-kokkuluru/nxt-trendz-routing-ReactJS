import './index.css'

const Header = () => (
  <nav className="totalNavContainer">
    <div className="logoutLogoContainer">
      <img
        className="logoImgs"
        alt="website logo"
        src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
      />
      <img
        className="logoutImg"
        alt="nav logout"
        src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-log-out-img.png"
      />
    </div>
    <div className="navItemsContianer">
      <img
        className="navimgs"
        src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-home-icon.png"
        alt="nav home"
      />
      <img
        className="navimgs"
        src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-products-icon.png"
        alt="nav products"
      />
      <img
        className="navimgs"
        src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-cart-icon.png"
        alt="nav cart"
      />
    </div>
  </nav>
)

export default Header
