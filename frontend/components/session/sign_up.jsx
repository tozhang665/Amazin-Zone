import React from 'react';
import { Link } from 'react-router-dom';

class SignUp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      email:'',
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
    this.props.createNewUser(this.state)
      .then(() => this.props.history.push('/'));
  }

  render() {
    return (
      <div id="login-session-form">
        <h2>Sign Up!</h2>
        <div id="login-center-section">

          <div id="login-base">
          <form>
            <label>Username:
            <input
              type="text"
              value={this.state.username}
              onChange={this.handleInput('username')}
            />
            </label>
            <label>Email:
            <input
              type="text"
              value={this.state.email}
              onChange={this.handleInput('email')}
            />
            </label>

            <label>Password:
            <input
              type="password"
              value={this.state.password}
              onChange={this.handleInput('password')}
            />
              <button className="button" onClick={this.handleSubmit}>Sign Up!</button>
            </label>
          </form>

          </div>
        </div>
      <Link className="button"to="/">Cancel SignUp</Link>
      </div>

    );
  }
}

export default SignUp;
