import './index.css'

const Header = () => (
  <nav className="totalNavContainer">
    <div className="logoutLogoContainer">
      <img
        className="logoImgs"
        alt="website logo"
        src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
      />
      <button type="button" className="logoutButton">
        <img
          className="logoutImg0"
          alt="nav logout"
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-log-out-img.png"
        />
      </button>
    </div>
    <ul className="navItemsContianer">
      <li>
        {' '}
        <button type="button" className="logoutButton">
          <img
            className="navimgs"
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-home-icon.png"
            alt="nav home"
          />
          <p className="replaceText">Home</p>
        </button>
      </li>
      <li>
        <button type="button" className="logoutButton">
          <img
            className="navimgs"
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-products-icon.png"
            alt="nav products"
          />
          <p className="replaceText">Products</p>
        </button>
      </li>
      <li>
        <button type="button" className="logoutButton">
          <img
            className="navimgs"
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-cart-icon.png"
            alt="nav cart"
          />
          <p className="replaceText">Cart</p>
        </button>
      </li>
    </ul>
  </nav>
)

export default Header
