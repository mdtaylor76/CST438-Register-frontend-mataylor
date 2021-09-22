import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Radio from '@material-ui/core/Radio';
import {DataGrid} from '@material-ui/data-grid';
import Grid from '@material-ui/core/Grid';
import {SEMESTER_LIST} from '../constants.js'
import AddStudent from './AddStudent';
import Cookies from 'js-cookie';
import {SERVER_URL} from '../constants.js';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

class Admin extends Component {
    constructor(props) {
      super(props);
      this.state = { };
      console.log("admin page class");
    }

    // Add student
    addStudent = (student) => {
      const token = Cookies.get('XSRF-TOKEN');
  
      console.log("Name: " + student.name + " email: " + student.email);
   
      fetch(`${SERVER_URL}/addstudent?email=${student.email}&name=${student.name}`,
      {
        method: 'POST',
        headers: { 'X-XSRF-TOKEN': token }
      })
      .then(res => {
          if (res.ok) {
            console.log("Student Added");
            toast.success("Student successfully added", {
                position: toast.POSITION.BOTTOM_LEFT
            });
            //this.fetchCourses();
          } else {
            toast.error("Error when adding", {
                position: toast.POSITION.BOTTOM_LEFT
            });
            console.error('Post http status =' + res.status);
          }})
      .catch(err => {
        console.log("Error");
        toast.error("Error when adding", {
              position: toast.POSITION.BOTTOM_LEFT
          });
          console.error(err);
      })
    } 
 
    render()  { 
      return (
        <div>
          <AppBar position="static" color="default">
             <Toolbar>
                <Typography variant="h6" color="inherit">
                   Admin
                </Typography>
             </Toolbar>
          </AppBar>
         <Grid container>
           <Grid item>
             <AddStudent addStudent={this.addStudent}  />
           </Grid>
         </Grid>
         <ToastContainer autoClose={1500} /> 
       </div>
     )
   }
}
export default Admin;