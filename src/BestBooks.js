import React from 'react';
import axios from 'axios';
import { Form, Button, Container, Carousel, Modal } from 'react-bootstrap';
import UpdateButton from './UpdateButton';

let SERVER = process.env.REACT_APP_SERVER;

class BestBooks extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      books: [],
      showAddModal: false,
      showUpdateModal: false,
    }
  }

  getBooks = async () => {
    if (this.props.auth0.isAuthenticated) {
      const responseFromAuth0 = await this.props.auth0.getIdTokenClient();
      const jwt = responseFromAuth0.__raw;
      console.log(jwt);
      const config = {
        method: 'get',
        baseURL: process.env.REACT_APP_SERVER_URL,
        url: '/books',
        headers: { "Authorization": `Bearer ${jwt}` },
      }
      const bookResponse = await axios(config);
      this.setState({
        books: bookResponse.data
      })

      // try {
      //   console.log('get', `${SERVER}/books`);
      //   let bookResults = await axios.get(`${SERVER}/books?email=${email}`);
      //   console.log(bookResults.data);
      //   this.setState({
      //     books: bookResults.data,
      //   })
      // } catch (err) {
      //   console.error(err);
      // }
    }
  }

  makeBook = async (newBook) => {
    try {
      let url = `${SERVER}/books`;
      let bookResult = await axios.post(url, newBook);
      this.setState({
        books: [...this.state.books, bookResult.data]
      })
    } catch (err) {
      console.error(err)
    }
  }
  deleteBook = async (id) => {
    try {
      // let url = `${url}/books`;
      await axios.delete(`${SERVER}/books/${id}`)
      const updatedBooks = this.state.books.filter(book => book._id !== id);

      this.setState({
        books: updatedBooks
      });
    } catch (err) {
      console.error(err)
    }
  }

  updateBook = async (bookToUpdate) => {
    try {
      let url = `${SERVER}/books`;
      let updatedBook = await axios.put(`${url}/${bookToUpdate._id}`, bookToUpdate)
      let updatedBookData = this.state.books.map(existingBook => existingBook._id === updatedBook.data._id ? updatedBook.data : existingBook)
      this.setState({
        books: updatedBookData,
      })

    } catch (err) {
      console.error(err)
    }
  }

  componentDidMount() {
    console.log('component did mount');
    // this.getBooks(this.props.user.email);
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
    this.handleCloseAddModal();
    // console.log(newBook);
    this.makeBook(newBook);
  }


  showAddModal = (e) => {
    e.preventDefault();

    this.setState({
      showAddModal: true,
    })
  }

  handleCloseAddModal = () => {
    this.setState({
      showAddModal: false
    })
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
          <Button onClick={() => this.deleteBook(book._id)}>Delete</Button>
          <UpdateButton book={book} updateBook={this.updateBook} />
          {/* <UpdateModal  showUpdateModal={this.state.showUpdateModal} handleCloseUpdateModal={this.handleCloseUpdateModal} /> */}
        </Carousel.Caption>
      </Carousel.Item >
    )
    )

    return (
      <>
        <h2>My Essential Lifelong Learning &amp; Formation Shelf</h2>
        <Button onClick={this.showAddModal}>Submit a Book</Button>
        <>
          <Container>
            <Modal

              show={this.state.showAddModal}
              onHide={this.handleCloseAddModal}
              centered
              size="xl"
            >
              <Modal.Header closeButton>
                <Modal.Title>Input Book Info</Modal.Title>
              </Modal.Header>
              <Modal.Body>

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
                  <Button type="submit">Submit a Book</Button>
                </Form>
              </Modal.Body>
            </Modal>
          </Container>
        </>
        {this.state.books.length ? (
          <Container>
            <Carousel>
              {bestBooks}
            </Carousel>
          </Container>
        ) : (
          <h3>No Books Found :(</h3>
        )}
      </>
    )
  }

}
export default BestBooks;
