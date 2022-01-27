import React from 'react';
import { Button } from 'react-bootstrap';
import UpdateModal from './UpdateModal';


class UpdateButton extends React.Component{
  constructor(props){
    super(props);
    this.state={
      showUpdateModal: false,
    }
  }

  handleShowUpdateModal = (e) => {
    e.preventDefault();

    this.setState({
      showUpdateModal: true,
    })
  }

  handleCloseUpdateModal = () => {
    this.setState({
      showUpdateModal: false
    })
  }

  render(){
    return(
      <>
        <Button onClick={this.handleShowUpdateModal}>Update</Button>
        <UpdateModal book={this.props.book} showUpdateModal={this.state.showUpdateModal} handleCloseUpdateModal={this.handleCloseUpdateModal} updateBook={this.props.updateBook} />
      </>
    )
  }
}

export default UpdateButton;
