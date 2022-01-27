import React from 'react';
import { Container, Button, Form, Modal } from 'react-bootstrap/'


class UpdateModal extends React.Component {
  constructor (props){
    super(props);
    this.state = {
      showUpdateForm: false,
    }
  }

  handleUpdateSubmit = (e) => {
    e.preventDefault();
    let bookToUpdate = {
      title: e.target.title.value || this.props.book.title,
      description: e.target.description.value || this.props.book.description,
      status: e.target.status.value || this.props.book.status,
      email: e.target.email.value || this.props.book.email,
      __v: this.props.book.__v,
      _id: this.props.book._id
    }
    console.log('I am here', bookToUpdate);
    this.props.updateBook(bookToUpdate);
    this.props.handleCloseUpdateModal();
  }

  


  render() {
    console.log(this.props);
    return(
      <Container>
            <Modal

              show={this.props.showUpdateModal}
              onHide={this.props.handleCloseUpdateModal}
              centered
              size="xl"
            >
              <Modal.Header closeButton>
                <Modal.Title>Input Book Info</Modal.Title>
              </Modal.Header>
              <Modal.Body>

                <Form onSubmit={this.handleUpdateSubmit}>
                  <Form.Group controlId="title">
                    <Form.Label>
                      Title
                    </Form.Label>
                    <Form.Control type="text" placeholder={this.props.book.title} />
                  </Form.Group>
                  <Form.Group controlId="description">
                    <Form.Label>
                      Description
                    </Form.Label>
                    <Form.Control type="text" placeholder={this.props.book.description}/>
                  </Form.Group>
                  <Form.Group controlId="status">
                    <Form.Label>
                      Status
                    </Form.Label>
                    <Form.Control type="text" placeholder={this.props.book.status}/>
                  </Form.Group>
                  <Form.Group controlId="email">
                    <Form.Label>
                      Email
                    </Form.Label>
                    <Form.Control type="text" placeholder={this.props.book.email}/>
                  </Form.Group>
                  <Button type="submit">Update Book</Button>
                </Form>
              </Modal.Body>
            </Modal>
          </Container>
    )
  }

}

export default UpdateModal;
