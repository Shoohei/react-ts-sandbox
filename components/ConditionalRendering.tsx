import React from "react";
import LifeCycleComponent from "../utilities/LifeCycleComponent";

class ConditionalRendering extends LifeCycleComponent {
  constructor(props) {
    super(props);
    this.handleLogin = this.handleLogin.bind(this);
    this.handleLogout = this.handleLogout.bind(this);
    this.state = { isLoggedIn: false };
  }

  handleLogin() {
    this.setState({ isLoggedIn: true });
  }
  handleLogout() {
    this.setState({ isLoggedIn: false });
  }
  render() {
    return (
      <div>
        <h1>Conditional rendering</h1>
        <Message isLoggedIn={this.state.isLoggedIn} />
        {this.state.isLoggedIn ? (
          <Logout onClickCallback={this.handleLogout} />
        ) : (
          <Login onClickCallback={this.handleLogin} />
        )}
      </div>
    );
  }
}

function Message(props) {
  if (props.isLoggedIn) {
    return <h2>Welcome back!</h2>;
  } else {
    return <h2>Please login first</h2>;
  }
}

function Login(props) {
  return <button onClick={props.onClickCallback}>Login</button>;
}

function Logout(props) {
  return <button onClick={props.onClickCallback}>Logout</button>;
}

export default ConditionalRendering;
