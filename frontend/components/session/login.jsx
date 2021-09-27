import React from 'react';
import { Link } from 'react-router-dom';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInput(type) {
    return (e) => {
      this.setState({ [type]: e.target.value });
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.login(this.state)
      .then(() => this.props.history.push('/'));
  }

  render() {
    return (

      <div id="login-container">

        <div id="login-session-form">
          <div id="login-title"><h2>Sign-in</h2></div>

          <div id="login-center-section">

            <div id="login-base">
            <form id="login-form">
              <label className="login-label">Email
                <br />
              <input className="login-input" type="text" value={this.state.email} onChange={this.handleInput('email')} />
              </label>
              <br />
              <label className="login-label">Password
                <br />
              <input className="login-input" type="password" value={this.state.password} onChange={this.handleInput('password')} />
              </label>
              <br />
              <button className="button login-button" onClick={this.handleSubmit}>Sign-in</button>
            </form>
            </div>
          </div>
          <br />

          <Link className="button cancel-button" to="/">Cancel Login</Link>

        </div>
      </div>

    );
  }
}

export default Login;
