import React from "react";
import { Component } from 'react';

import {BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Navbar from  "./inc/navbar"

class Homepage_Controller extends Component{
    render(){
        return(

            <Router>
                <Navbar/>
                    <div>
                        <main>
                            <Route path ="/" component ={}/>
                        </main>
                    </div>
            </Router>
        );
    }
}

export default Homepage_Controller;