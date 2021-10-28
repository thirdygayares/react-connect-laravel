import React from "react";
import { Component } from 'react';
import Navbar from "./inc/navbar";
import About_us from "./Content/About_us";
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Homepage_Controller from "./Content/Homepage";
import Students from "./students/students";
import ViewTeacher from "./teacher/viewTeacher";
import AddTeacher from "./teacher/addTeacher";
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
                            <Route path ="/teacher_config" component = {ViewTeacher}/>
                            <Route path ="/dean_config" component = {DeanConfig}/>
                            <Route path ="/registar_config" component = {RegistrarConfig}/>
                            <Route path ="/guardian_config" component = {GuardinConfig}/> 
                            <Route path ="/admin_config" component = {AdminAccount}/>       
                            <Route path ="/add_teacher" component = {AddTeacher}/>                           


                        </Switch>
                     
                </div>
         
            </Router>
        );
    }
}
export default AdminController;