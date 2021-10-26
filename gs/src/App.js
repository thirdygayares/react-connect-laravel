import './App.css';
import RegController from './pages/registrar/registrarController';
<<<<<<< HEAD
import AdminController from './pages/admin/AdminController';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom' 

function App() {
  return (
    
   <Router> 
    <div>
      <Switch>

        <Route exact path ="/">
        <RegController/>
        </Route> 
      
        <Route> 
          <AdminController/>    
        </Route>

      </Switch>
    </div>
    </Router> 
=======
import AdminController from './pages/admin/adminController';
import {BrowserRouter as Router,Route, Switch} from 'react-router-dom';

function App() {
  return (
    <Router>

    <div>
      <Switch>

    
      <Route exact path ="/">
        <RegController/>
      </Route>

      <Route >
      <AdminController/>
      </Route>
  

      </Switch>

    </div>
    </Router>

>>>>>>> f67fdeb218822e03bb1530a5985694d685e89770
  );
}

export default App;
