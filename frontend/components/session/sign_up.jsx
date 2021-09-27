import React from 'react';
import { Link } from 'react-router-dom';

class SignUp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
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

  renderErrors() {
    return(
      <ul>
        {this.props.sessionErrors.map((error, i) => (
          <li className="login-errors" key={`error-${i}`}>
            {error}
          </li>
        ))}
      </ul>
    );
  }


  componentWillUnmount(){
    this.props.resetErrors();
  }

render() {
    return (

      <div id="login-container">

        <div id="login-session-form">
          <div id="login-title"><h2>Sign-up</h2></div>

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
              <button className="button login-button" onClick={this.handleSubmit}>Sign-up</button>
              <br />
            </form>
            </div>
          </div>
          <br />
          {this.renderErrors()}
          <Link className="button cancel-button" to="/">Cancel Submit</Link>

        </div>
      </div>

    );
  }
}
export default SignUp;
