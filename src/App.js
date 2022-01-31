import React from 'react';
import Header from './Header';
import Footer from './Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import BestBooks from './BestBooks';
import Profile from './Profile';
import Login from './Login';
import { withAuth0 } from '@auth0/auth0-react';



class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      user: null,
    }
  }

  loginHandler = (user) => {
    this.setState({
      user,
    })
  }

  logoutHandler = () => {
    this.setState({
      user: null,
    })
  }




  render() {
    return (

      <>
        <Router>
          <Header user={this.state.user} onLogout={this.logoutHandler} />
          <Switch>
            <Route exact path="/">
              {this.state.user ? <BestBooks user={this.state.user} /> : <Login onLogin={this.loginHandler} />}
            </Route>
            <Route exactPath="/profile">
              <Profile user={this.state.user} />
              </Route>
              </Switch>
              <Footer />
            </Router>
          {/* {this.props.auth0.isAuthenticated ? <BestBooks /> : <h1>Please log in </h1>} */}
      </>
    )
  }
}

export default withAuth0(App);
// export default App;

