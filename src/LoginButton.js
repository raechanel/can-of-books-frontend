import React from 'react';
import { Button } from 'react-bootstrap';
import { useAuth0 } from "@auth0/auth0-react";

const LoginButton = () => {

  const { loginWithRedirect } = useAuth0();

  return (
    <>
      <Button onClick={() => loginWithRedirect()}>Login</Button>
      {/* {this.state.showButton ? <Button onClick={() => this.setState({showButton: false})}>Login</Button> : <LoginForm onLogin={this.props.onLogin}/>} */}
    </>
  )
}
export default LoginButton;
