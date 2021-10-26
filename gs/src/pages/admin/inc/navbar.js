<<<<<<< HEAD
import React from 'react';
import { Component } from 'react';
import { Link } from 'react-router-dom';


class Navbar extends Component {

    render() {
        return (

            <div>
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <div className="container">
                        <Link className="navbar-brand" to="/About_us">GGS</Link>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">

                                <li className="nav-item">
                                    <Link className="nav-link active" aria-current="page" to="/About_us">About us</Link>
                                </li>

                                <li className="nav-item">
                                    <Link className="nav-link" to="/example">Navbar</Link>
                                </li>

                            </ul>

                        </div>
                    </div>
                </nav>
=======
import React, {Component} from 'react';

import {Link} from 'react-router-dom';

class Navbar extends Component {

    render(){
        return(

            <div>
                 <div>
            
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container">
                    <Link className="navbar-brand" to="{/}">GGS</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">

                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/addTeacher">Add Teachers</Link>
                            </li>

                            <li className="nav-item">
                                <Link className="nav-link" to="/viewTeacher">View Teacher</Link>
                            </li>

                        </ul>

                    </div>
                </div>
            </nav>
        </div>
>>>>>>> f67fdeb218822e03bb1530a5985694d685e89770
            </div>



        );
<<<<<<< HEAD

    }
}



=======
    }



}

>>>>>>> f67fdeb218822e03bb1530a5985694d685e89770
export default Navbar;