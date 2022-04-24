import './index.css'
import {Component} from 'react'

class LoginForm extends Component {
  render() {
    return (
      <div className="totalContainer">
        <div className="contentContainer">
          <img
            className="logoImg"
            alt="website logo"
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
          />
          <img
            className="imgCss"
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-login-img.png"
            alt="website login"
          />
          <form className="inputsContainer">
            <div className="usernameContainer">
              <p className="labelCss">USERNAME</p>
              <input className="inputbox" type="text" placeholder="Username" />
            </div>
            <div className="usernameContainer">
              <p className="labelCss">PASSWORD</p>
              <input className="inputbox" type="text" placeholder="Password" />
            </div>
            <button className="buttonCss" type="submit">
              Login
            </button>
          </form>
        </div>
      </div>
    )
  }
}
export default LoginForm
