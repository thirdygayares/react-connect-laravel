import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class NavbarHomePage extends Component {
    render() {
        return (
            <div >
              
                <div className="nav_homepage">
                    <nav className="navbar navbar-expand-lg navbar-dark">
                        <div className="container">
                            <Link className="navbar-brand fs-3" to="/">GGS Learing hub</Link>
                            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>
                            <div className="collapse navbar-collapse" id="navbarSupportedContent ">
                                <ul className="navbar-nav ms-auto mb-5 mb-lg-0 fs-5 ">

                                    <li className="nav-item">
                                        <Link className="nav-link " aria-current="page" to="#">tour</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link" to="#">About</Link>
                                    </li>
                                </ul>

                                <div className="col-md-3 text-end">

                                    <Link type="button" className=" btn btn-outline-warning me-2 "to="/sign-in" >Login</Link>
                                </div>
                            </div>


                        </div>
                    </nav>
                </div>
                

            </div>

            
        );
    }
}

export default NavbarHomePage;
