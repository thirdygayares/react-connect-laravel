import './App.css';
import AddStudents from './pages/add';
import Jin from './pages/example';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/"> 
            <AddStudents/>
          </Route>
          <Route path="/example">
            <Jin/>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
