// import './App.css';
import RegController from './pages/registrar/registrarController';
import AdminController from './pages/admin/adminController';

import HomePageController from './pages/Homepage/HomePageController';

import { BrowserRouter as Router, Route, Switch} from 'react-router-dom' 
import axios from 'axios';
import StudentController from './pages/Student/StudentController';
axios.defaults.baseURL = "http://127.0.0.1:8000";
axios.defaults.headers.post['Content-Type'] = 'application/json';
axios.defaults.headers.post['Accept'] = 'application/json';

function App() {
  return (

  
    <Router>

    <div>
      <Switch>

     

    
      <Route exact path ="/">
      <HomePageController/>
      </Route>

      <Route  path ="/AdminController">
        <AdminController/>
      </Route>
      
      <Route path ="/student">
      <StudentController/>
    
    
      </Route>

      <Route path ="/registrar">
      <RegController/>
      </Route>
  
      </Switch>

    </div>
    </Router>

  );
}

export default App;
