import React from 'react';
import axios from 'axios';
import Carousel from 'react-bootstrap/Carousel';

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

  componentDidMount() {
    console.log('component did mount');
    this.getBooks();
  }

  render() {

    console.log(this.state);

    /* TODO: render user's books in a Carousel */

    let bestBooks = this.state.books.map((book, index) => (
      < Carousel.Item key={index} >
        <img style={{width: '50%'}}
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

        {this.state.books.length ? (
          <Carousel>
            {bestBooks}
          </Carousel>
          // <p>Book Carousel coming soon</p>
        ) : (
          <h3>No Books Found :(</h3>
        )}
      </>
    )
  }
}

export default BestBooks;
