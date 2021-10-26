import React from "react";
import { Component } from 'react';
import Navbar_Homepage from "./inc/navbar";
import About_us from "./Content/About_us";

import {BrowserRouter as Router, Route, Switch } from 'react-router-dom';

class AdminController extends Component{

    render(){
        return(
            <Router>
              
                <div>
                    <Navbar_Homepage/>

                        <Switch>
                            <Route path ="/About_us" component ={About_us}/>

                        </Switch>
                </div>
         
            </Router>
        );
    }
}
export default AdminController;