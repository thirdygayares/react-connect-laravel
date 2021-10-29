import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import Students from "./students/students";

import AddTeacher from "./teacher/addTeacher";
import DeanConfig from "./dean/dean_config";

import RegistrarConfig from "./registrar/registrar_config";
import AddRegistrar from "./registrar/add_registrar";

import GuardinConfig from "./guardian/guardian_config";
import AddGuardian from "./guardian/addguardian";

import AdminAccount from "./admin_account/admin_account";
import AddAdmin from "./admin_account/create_admin";

import Homepage_Controller from "./Content/Homepage";
import About_us from "./Content/About_us";

import ViewTeacher from "./teacher/viewTeacher";

// Navbar
import Navbar from "./inc/navbar.js";

class AdminController extends Component {

    render() {
        return (
            <Router>
                <Navbar />
                <Switch>
                    {/** starts of admin */}

                    <Route path="/admin/About_usCofig" component={About_us} />
                    <Route path="/admin/homepage_Controller" component={Homepage_Controller} />
                    
                    <Route path="/admin/students_config" component={Students} />

                    <Route path="/admin/teacherview" component={ViewTeacher} />
                    <Route path="/admin/add_teacher" component={AddTeacher} />

                    <Route path="/admin/dean_config" component={DeanConfig} />

                    <Route path="/admin/registar_config" component={RegistrarConfig} />
                    <Route path="/admin/add_registrar" component={AddRegistrar} />

                    <Route path="/admin/guardian_config" component={GuardinConfig} />
                    <Route path="/admin/addguardian" component={AddGuardian} />

                    <Route path="/admin/admin_config" component={AdminAccount} />
                    <Route path="/admin/create_admin" component={AddAdmin} />

                    {/** ending of admin */}
                </Switch>
            </Router>

        );
    }
}

export default AdminController;
