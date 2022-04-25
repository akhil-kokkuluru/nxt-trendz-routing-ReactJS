import './index.css'
import {Link} from 'react-router-dom'
import {Component} from 'react'

class LoginForm extends Component {
  state = {
    displayWrongPassword: false,
    username: '',
    password: '',
    errorText: '',
  }

  onUsernameInput = event => {
    this.setState({username: event.target.value})
  }

  onPasswordInput = event => {
    this.setState({password: event.target.value})
  }

  onLoginSuccess = () => {
    const {history} = this.props
    history.push('/')
  }

  onSubmitForm = async event => {
    event.preventDefault()
    const {username, password} = this.state
    const userDetails = {username, password}
    const url = 'https://apis.ccbp.in/login'
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }
    const response = await fetch(url, options)
    const data = await response.json()

    if (response.ok === true) {
      this.onLoginSuccess()
    } else {
      this.setState({displayWrongPassword: true, errorText: data.error_msg})
    }
  }

  render() {
    const {displayWrongPassword, errorText} = this.state
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
                <label className="labelCss" htmlFor="usernameid">
                  USERNAME
                </label>
                <input
                  className="inputbox"
                  type="text"
                  placeholder="Username"
                  onChange={this.onUsernameInput}
                  id="usernameid"
                />
              </div>
              <div className="usernameContainer">
                <label className="labelCss" htmlFor="passwordid">
                  PASSWORD
                </label>
                <input
                  className="inputbox"
                  type="password"
                  placeholder="Password"
                  onChange={this.onPasswordInput}
                  id="passwordid"
                />
              </div>
              {displayWrongPassword && (
                <p className="errorText">*{errorText}</p>
              )}

              <button
                className="buttonCss"
                type="submit"
                onClick={this.onSubmitForm}
              >
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
