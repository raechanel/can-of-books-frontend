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
import { Form , Button, Container } from 'react-bootstrap';

import axios from 'axios';

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

  handleBookSubmit = (e) => {
    e.preventDefault();
    let newBook = {
      title: e.target.title.value,
      description: e.target.description.value,
      status: e.target.status.value,
      email: e.target.email.value
    }
    console.log(newBook);
  }

  makeBook = async (newBook) => {
    let bookResult = await axios.post();
  }

  render() {
    return (
      <>
        <Router>
          <Header user={this.state.user} onLogout={this.logoutHandler} />
          <Switch>
            <Route exact path="/">
              {this.state.user ? <BestBooks /> : <Login onLogin={this.loginHandler}/>}
            </Route>
            <Route exactPath="/profile">
              <Profile user={this.state.user}/>
            </Route>
          </Switch>
          <Container>
            <Form onSubmit={this.handleBookSubmit}>
              <Form.Group controlId = "title"> 
                <Form.Label>
                  Title
                </Form.Label>
                <Form.Control type="text" />
              </Form.Group>
              <Form.Group controlId = "description"> 
                <Form.Label>
                  Description
                </Form.Label>
                <Form.Control type="text" />
              </Form.Group>
              <Form.Group controlId = "status"> 
                <Form.Label>
                  Status
                </Form.Label>
                <Form.Control type="text" />
              </Form.Group>
              <Form.Group controlId = "email"> 
                <Form.Label>
                  Email
                </Form.Label>
                <Form.Control type="text" />
              </Form.Group>
              <Button type="submit">Add a Book</Button>
            </Form>
          </Container>
          <Footer />
        </Router>
      </>
    )
  }
}

export default App;
