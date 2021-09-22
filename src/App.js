import './App.css';
import Button from '@material-ui/core/Button';
import SchedList from './components/SchedList';
import Semester from './components/Semester';
import Admin from './components/Admin';
import {BrowserRouter, Switch, Route, Link} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <div>
          <Button variant="outlined" color="primary" style={{margin: 10}} 
          component={Link} to={{pathname:'/'}}>
            Home
          </Button>            
          <Button variant="outlined" color="primary" style={{margin: 10}} 
          component={Link} to={{pathname:'/Admin'}}>
            Admin
          </Button>
        </div>
       <Switch>
        <Route exact path='/' component={Semester} />
        <Route path='/schedule' component={SchedList} />
        <Route path='/admin' component={Admin} />
       </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;