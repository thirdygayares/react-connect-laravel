import '../../App.css';
import react from "react";
import { Component } from "react";
import NavbarStudent from "./inc/NavbarStudent";
import Studentpage from "./Studentpage";
import Stundentsubject from "./Studentsubject";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';




class StudentController extends Component{
    render(){
        return(
            <Router>
            <div>
                <NavbarStudent/>
            <Switch>
           
           <Route exact path="/student" component ={Studentpage}/>
           <Route  path="/student/sub" component ={Stundentsubject}/>
           </Switch>
            </div>
            </Router>

        );

    }
}

export default StudentController;