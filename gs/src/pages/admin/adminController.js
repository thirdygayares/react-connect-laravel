import React, {Component} from 'react';
import Navbar from './inc/navbar';
import  AddTeacher from './teacher/addTeacher';
import  ViewTeacher from './teacher/viewTeacher';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

    class AdminController extends Component {

        render(){
            return(
                <Router>
                <div>
                <Navbar/>
              
                <Switch>
               
                <Route exact path="/addTeacher" component ={AddTeacher}/>
                

                
                <Route path="/viewTeacher" component ={ViewTeacher}/>
                
                

                </Switch>
                </div>
                </Router>

            );
        }



    }

    export default AdminController;