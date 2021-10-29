import './App.css';
import RegController from './pages/registrar/registrarController';
import AdminController from './pages/admin/adminController';
import HomePageController from './pages/Homepage/HomePageController';
import {BrowserRouter as Router,Route, Switch} from 'react-router-dom';

function App() {
  return (
    <Router>

    <div>
      <Switch>

     

    
      <Route exact path ="/">
      <HomePageController/>
      </Route>

      <Route >
      <AdminController/>
      </Route>

      <Route>
      <RegController/>
      </Route>
  

      </Switch>

    </div>
    </Router>

  );
}

export default App;
