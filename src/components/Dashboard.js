import React, { Component } from 'react';
import 'react-toastify/dist/ReactToastify.css';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';

class Dashboard extends Component {
    constructor(props) {
      super(props);
      this.state = { };
      console.log("Dashboard");
    }

 
    render()  { 
      return (
        <div>
      <div>
          <Button variant="outlined" color="primary" style={{margin: 10}} 
          component={Link} to={{pathname:'/Semester'}}>
            Semester
          </Button>            
          <Button variant="outlined" color="primary" style={{margin: 10}} 
          component={Link} to={{pathname:'/Admin'}}>
            Admin
          </Button>
        </div>
       </div>
     )
   }
}
export default Dashboard;