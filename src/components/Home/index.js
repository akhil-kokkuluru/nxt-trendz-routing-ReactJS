import './index.css'
import {Link} from 'react-router-dom'
import Header from '../Header'

const Home = () => (
  <Link className="linkingProp" to="/">
    <div className="totalhomeContainer">
      <Header />
      <div className="homebodyContianer">
        <h1 className="headingtext">Clothes That Get YOU Noticed</h1>
        <img
          className="modelImage"
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-home-img.png"
          alt="clothes that get you noticed"
        />
        <p className="discription">
          Fashion is part of the daily air and it does not quite. help that it
          changes all the time. Clothes have always been a marker of the era and
          we are in a revolution. Your fashion makes you been seen and heard
          that ‘way you are. So, celebrate the seasons new and exciting fashion
          in your own way.
        </p>
        <button type="button" className="shopButton">
          Shop Now
        </button>
      </div>
    </div>
  </Link>
)

export default Home
