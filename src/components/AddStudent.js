import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

class AddStudent extends Component {
    constructor(props) {
    super(props);
    this.state = {open: false, name: '', email: '', status_code: 0 };
  };

  handleClickOpen = () => {
    this.setState( {open:true} );
  };

  handleClose = () => {
    this.setState( {open:false} );
  };

  handleChange = (event) => {

    console.log("Event.target.name: " + event.target.name + " Event.target.value: " 
    + event.target.value );
    this.setState({[event.target.name]: event.target.value});
  }

// Save course and close modal form
  handleAdd = () => {
    console.log(this.state); 

    this.props.addStudent(this.state);
    this.handleClose();
  }

  render()  { 
    return (
        <div>
          <Button variant="outlined" color="primary" style={{margin: 10}} onClick={this.handleClickOpen}>
            Add Student
          </Button>
          <Dialog open={this.state.open} onClose={this.handleClose}>
              <DialogTitle>Add Student</DialogTitle>
              <DialogContent>
                <TextField autoFocus fullWidth label="Student Name" name="name" onChange={this.handleChange}/> 
                <TextField fullWidth label="Student Email" name="email" onChange={this.handleChange}/>
              </DialogContent>
              <DialogActions>
                <Button color="secondary" onClick={this.handleClose}>Cancel</Button>
                <Button color="primary" onClick={this.handleAdd}>Add</Button>
              </DialogActions>
            </Dialog>      
        </div>
    ); 
  }
}

// required property:  addStudent is a function to call to perform the Add action
AddStudent.propTypes = {
    addStudent : PropTypes.func.isRequired
}

export default AddStudent;