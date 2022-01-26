import React from 'react';
import axios from 'axios';
import Carousel from 'react-bootstrap/Carousel';

import { Form , Button, Container } from 'react-bootstrap';


let url = 'http://localhost:3001'

class BestBooks extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      books: []
    }
  }



  /* TODO: Make a GET request to your API to fetch books for the logged in user  */

  getBooks = async () => {
    console.log(`${url}/books`);
    let bookResults = await axios.get(url + '/books');

    console.log(bookResults.data);
    this.setState({
      books: bookResults.data
    });
  }

  makeBook = async (newBook) => {
    let url = 'http://localhost:3001/books'
    let bookResult = await axios.post(url, newBook);

    // console.log(bookResult.data);
    this.setState({
      books: [...this.state.books, bookResult.data]
    })
  }

  componentDidMount() {
    console.log('component did mount');
    this.getBooks();
  }

  handleBookSubmit = (e) => {
    e.preventDefault();
    let newBook = {
      title: e.target.title.value,
      description: e.target.description.value,
      status: e.target.status.value,
      email: e.target.email.value
    }
    // console.log(newBook);
    this.makeBook(newBook);
  }

  render() {

    console.log(this.state);

    /* DONE: render user's books in a Carousel */

    let bestBooks = this.state.books.map((book, index) => (
      < Carousel.Item key={index} >
        <img style={{ width: '50%' }}
          className="d-block w-100"
          src="https://via.placeholder.com/350x150"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>{book.title}</h3>
          <p>{book.description}</p>
        </Carousel.Caption>
      </Carousel.Item >
    )
    )

    return (
      <>
        <h2>My Essential Lifelong Learning &amp; Formation Shelf</h2>
        <>
            <Container>
              <Form onSubmit={this.handleBookSubmit}>
                <Form.Group controlId="title">
                  <Form.Label>
                    Title
                  </Form.Label>
                  <Form.Control type="text" />
                </Form.Group>
                <Form.Group controlId="description">
                  <Form.Label>
                    Description
                  </Form.Label>
                  <Form.Control type="text" />
                </Form.Group>
                <Form.Group controlId="status">
                  <Form.Label>
                    Status
                  </Form.Label>
                  <Form.Control type="text" />
                </Form.Group>
                <Form.Group controlId="email">
                  <Form.Label>
                    Email
                  </Form.Label>
                  <Form.Control type="text" />
                </Form.Group>
                <Button type="submit">Add a Book</Button>
              </Form>
            </Container>
        </>
        {this.state.books.length ? (
          <Carousel>
            {bestBooks}
          </Carousel>
        ) : (
          <h3>No Books Found :(</h3>
        )}
      </>
    )
  }
}

export default BestBooks;
