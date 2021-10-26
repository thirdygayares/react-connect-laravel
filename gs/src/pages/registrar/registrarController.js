import React from 'react';
import StudentsConfig from './students_config';
import Jin from './example';
import AddStudents from './addStudents';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

const RegController = () =>{

    return (
        <Router>
        <div>
          <Switch>
            <Route exact path="/"> 
              <StudentsConfig/>
            </Route>

            <Route path="/example">
              <Jin/>
            </Route>

            <Route path="/enroll">
              <AddStudents/>
            </Route>

<<<<<<< HEAD
=======

>>>>>>> f67fdeb218822e03bb1530a5985694d685e89770
          </Switch>
        </div>
      </Router>
    );

}

export default RegController;