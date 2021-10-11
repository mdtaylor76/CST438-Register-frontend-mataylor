import './App.css';
import Button from '@material-ui/core/Button';
import SchedList from './components/SchedList';
import Semester from './components/Semester';
import Admin from './components/Admin';
import Login from './components/Login';
import {BrowserRouter, Switch, Route, Link} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
       <Switch>
        <Route exact path='/' component={Login} />
        <Route exact path='/semester' component={Semester} />
        <Route path='/schedule' component={SchedList} />
       </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;