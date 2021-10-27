import React, {Component} from 'react';
import { Link } from 'react-router-dom';

class Sidebar extends Component {

    render() {
        return (
            <div>

                <div className="flex-shrink-0 p-3  sizebarsize" >
                    <Link to="#" className="d-flex align-items-center pb-3 mb-3 link-dark text-decoration-none border-bottom">

                        <span className="fs-5 fw-semibold">Admin</span>
                    </Link>
                    <ul className="list-unstyled ps-0">
                        <li className="mb-1">
                            <button className="btn btn-toggle align-items-center rounded collapsed" data-bs-toggle="collapse" data-bs-target="#home-collapse" aria-expanded="true">
                                Content
                            </button>
                            <div className="collapse show" id="home-collapse">
                                <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small">
                                    <li><Link to="/homepage_Controller" className="link-dark rounded">Homepage Page</Link></li>
                                    <li><Link to="/About_us" className="link-dark rounded">About Page</Link></li>
                                </ul>
                            </div>
                        </li>
                        <li className="mb-1">
                            <Link to="/students_config" className="btn align-items-center rounded collapsed" >
                                 Students
                            </Link>
                            
                        </li>


                        <li className="mb-1">
                            <Link to="/teacher_config" className="btn  align-items-center rounded collapsed" >
                                Teachers
                            </Link>
                           
                        </li>


                        <li className="mb-1">
                            <Link to="/dean_config" className="btn  align-items-center rounded collapsed" >
                                Dean
                            </Link>    
                        </li>

                        
                        <li className="mb-1">
                            <Link to="registar_config" className="btn  align-items-center rounded collapsed"  >
                                Registrar
                            </Link>    
                        </li>


                        <li className="mb-1">
                            <Link to="guardian_config" className="btn  align-items-center rounded collapsed" >
                                Guardian
                            </Link>    
                        </li>


                        <li className="border-top my-3"></li>
                        <li className="mb-1">
                            <button className="btn btn-toggle align-items-center rounded collapsed" data-bs-toggle="collapse" data-bs-target="#account-collapse" aria-expanded="false">
                                Dashboard
                            </button>
                            <div className="collapse" id="account-collapse">
                                <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small">
                                    <li><Link to="#" className="link-dark rounded">Courses</Link></li>
                                    <li><Link to="#" className="link-dark rounded">Statistic</Link></li>
                                   
                                </ul>
                            </div>
                        </li>
                    </ul>
                </div>


             


            </div>


        );
    }

}


export default Sidebar;