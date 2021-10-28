import React from "react";
import { Component } from 'react';
import Navbar from "./inc/navbar";
import About_us from "./Content/About_us";

import Homepage_Controller from "./Content/Homepage";
import Students from "./students/students";
import AddTeacher from "./teacher/addTeacher";
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import DeanConfig from "./dean/dean_config";
import RegistrarConfig from "./registrar/registrar_config";
import GuardinConfig from "./guardian/guardian_config";
import AdminAccount from "./admin_account/admin_account";

class AdminController extends Component{

    render(){
        return(
            <Router>
              
                <div>
                  
                    <Navbar/>
                  
                        <Switch>
                            <Route path ="/About_usCofig" component ={About_us}/>
                            <Route path ="/homepage_Controller" component ={Homepage_Controller}/>
                            <Route path ="/students_config" component = {Students}/>
                            <Route path ="/teacher_config" component = {AddTeacher}/>
                            <Route path ="/dean_config" component = {DeanConfig}/>
                            <Route path ="/registar_config" component = {RegistrarConfig}/>
                            <Route path ="/guardian_config" component = {GuardinConfig}/> 
                            <Route path ="/admin_config" component = {AdminAccount}/>                           

                        </Switch>
                     
                </div>
         
            </Router>
        );
    }
}
export default AdminController;