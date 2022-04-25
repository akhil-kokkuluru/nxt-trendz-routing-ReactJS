import './index.css'
import {Link} from 'react-router-dom'
import {Component} from 'react'

class LoginForm extends Component {
  state = {isPasswordCorrect: true}

  render() {
    return (
      <Link className="linkingProp" to="/login">
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
                <input
                  className="inputbox"
                  type="text"
                  placeholder="Username"
                />
              </div>
              <div className="usernameContainer">
                <p className="labelCss">PASSWORD</p>
                <input
                  className="inputbox"
                  type="text"
                  placeholder="Password"
                />
              </div>
              <button className="buttonCss" type="submit">
                Login
              </button>
            </form>
          </div>
        </div>
      </Link>
    )
  }
}
export default LoginForm
