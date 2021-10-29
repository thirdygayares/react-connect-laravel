// import './App.css';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import axios from 'axios';

// Navbar
import Navbar from "./pages/admin/inc/navbar.js";

// admin page

import Students from "./pages/admin/students/students";

import AddTeacher from "./pages/admin/teacher/addTeacher";
import DeanConfig from "./pages/admin/dean/dean_config";

import RegistrarConfig from "./pages/admin/registrar/registrar_config";
import AddRegistrar from "./pages/admin/registrar/add_registrar";

import GuardinConfig from "./pages/admin/guardian/guardian_config";
import AddGuardian from "./pages/admin/guardian/addguardian";

import AdminAccount from "./pages/admin/admin_account/admin_account";
import AddAdmin from "./pages/admin/admin_account/create_admin";

import Homepage_Controller from "./pages/admin/Content/Homepage";
import About_us from "./pages/admin/Content/About_us";

import ViewTeacher from "./pages/admin/teacher/viewTeacher";

// end of admin page


// homepage


//ending of homepage

axios.defaults.baseURL = "http://127.0.0.1:8000";
axios.defaults.headers.post['Content-Type'] = 'application/json';
axios.defaults.headers.post['Accept'] = 'application/json';


function App() {
  return (
    <div>

      <Router>

      <Navbar/>
        <Switch>
          
      {/** starts of admin */}
        <Route path ="/admin/About_usCofig" component ={About_us}/>  
        <Route path ="/admin/homepage_Controller" component ={Homepage_Controller}/>


        <Route path ="/admin/students_config" component = {Students}/>

        <Route path ="/admin/teacherview" component ={ViewTeacher}/>
        <Route path ="/admin/add_teacher" component = {AddTeacher}/> 

        <Route path ="/admin/dean_config" component = {DeanConfig}/>
        
        <Route path ="/admin/registar_config" component = {RegistrarConfig}/>
        <Route path ="/admin/add_registrar" component = {AddRegistrar}/>

        <Route path ="/admin/guardian_config" component = {GuardinConfig}/> 
        <Route path ="/admin/addguardian" component = {AddGuardian}/>

        <Route path ="/admin/admin_config" component = {AdminAccount}/>  
        <Route path ="/admin/create_admin" component = {AddAdmin}/>       
        {/** ending of admin */} 





        </Switch>
      </Router>
    </div>
  );
}

export default App;
       