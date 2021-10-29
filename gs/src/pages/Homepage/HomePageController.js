import React, {Component} from 'react';
import NavbarHomePage from './inc/navbar';
import HomePagefrontend from  './HomePagefrontend'
import loginhomepages from './inc/loginhomepages';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';


class HomePageController extends Component{
    render(){
        return(
            <Router>
            <div>
            <NavbarHomePage/>
          
            <Switch>
           
            <Route exact path="/" component ={HomePagefrontend}/>
            

            
            <Route path="/sign-in" component ={loginhomepages}/>
            
            

            </Switch>
            </div>
            </Router>
           
        );
    }

}

export default HomePageController;