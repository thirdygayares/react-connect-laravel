import './App.css';
import RegController from './pages/registrar/registrarController';
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

  );
}

export default App;
