// import './App.css';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import axios from 'axios';



// admin page
// homepage
import HomePageController from "./pages/Homepage/HomePageController";
import AdminController from "./pages/admin/AdminController";
import RegController from "./pages/registrar/registrarController"
// end of admin page





//ending of homepage

axios.defaults.baseURL = "http://127.0.0.1:8000";
axios.defaults.headers.post['Content-Type'] = 'application/json';
axios.defaults.headers.post['Accept'] = 'application/json';


function App() {
  return (
    <div>

      <Router>    
        <Switch>
          
         {/** start of homepage */} 
  {/* 
       <Route>       
       <HomePageController/>
       </Route>        */}

       <Route>       
       <AdminController/>
       </Route> 

       {/* <Route>       
       <RegController/>
       </Route>  */}


       

          {/** end of homepage */} 




        </Switch>
      </Router>
    </div>
  );
}

export default App;
       