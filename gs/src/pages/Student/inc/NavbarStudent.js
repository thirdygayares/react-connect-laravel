import react from "react";
import { Component } from 'react';
import { Link } from 'react-router-dom';

import dp from '../../assets/image/profile_picture/admin/Gayares.jpg';
import messagesIcon from '../../assets/image/icons/messages.png';
import notificationIcon from '../../assets/image/icons/notification.png';

class NavbarStudent extends Component {
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
                                <ul className="navbar-nav ms-auto mb-2 mb-lg-0 fs-5 ">

                                    {/**starts Messages*/}
                                    <Link className="nav-link dropdown-toggle dropdown-toggle-nocaret" to="#" data-bs-toggle="dropdown">
                                        <div className="messages">
                                            <span className="notify-badge">5</span>
                                            <img src={messagesIcon} width="24" height="24" />
                                        </div>
                                    </Link>
                                    <div className="dropdown-menu dropdown-menu-end p-0">
                                        <div className="p-2 border-bottom m-2">
                                            <h5 className="h5 mb-0">Messages</h5>
                                        </div>
                                        <div className="header-message-list p-2">
                                            <Link className="dropdown-item" to="#">
                                                <div className="d-flex align-items-center">

                                                    <div className="ms-3 flex-grow-1">
                                                        <h6 className="mb-0 dropdown-msg-user">Amelio Joly <span className="msg-time float-end text-secondary">1 m</span></h6>
                                                        <small className="mb-0 dropdown-msg-text text-secondary d-flex align-items-center">The standard chunk of lorem...</small>
                                                    </div>
                                                </div>
                                            </Link>
                                            <Link className="dropdown-item" to="#">
                                                <div className="d-flex align-items-center">

                                                    <div className="ms-3 flex-grow-1">
                                                        <h6 className="mb-0 dropdown-msg-user">Althea Cabardo <span className="msg-time float-end text-secondary">7 m</span></h6>
                                                        <small className="mb-0 dropdown-msg-text text-secondary d-flex align-items-center">Many desktop publishing</small>
                                                    </div>
                                                </div>
                                            </Link>

                                        </div>
                                        <div className="p-2">
                                            <div><hr className="dropdown-divider" /></div>
                                            <Link className="dropdown-item" to="#">
                                                <div className="text-center">View All Messages</div>
                                            </Link>
                                        </div>
                                    </div>
                                    {/**end Messages*/}
                                    <Link className="nav-link dropdown-toggle dropdown-toggle-nocaret" to="#" data-bs-toggle="dropdown">
                                        <div className="notifications">
                                            <span className="notify-badge">8</span>
                                            <img src={notificationIcon} width="24" height="24" />
                                            <i className="bi bi-bell-fill"></i>
                                        </div>
                                    </Link>
                                    <div className="dropdown-menu dropdown-menu-end p-0">
                                        <div className="p-2 border-bottom m-2">
                                            <h5 className="h5 mb-0">Notifications</h5>
                                        </div>
                                        <div className="header-notifications-list p-2">
                                            <Link className="dropdown-item" to="#">
                                                <div className="d-flex align-items-center">
                                                    <div className="notification-box bg-light-primary text-primary"><i className="bi bi-basket2-fill"></i></div>
                                                    <div className="ms-3 flex-grow-1">
                                                        <h6 className="mb-0 dropdown-msg-user">New Orders <span className="msg-time float-end text-secondary">1 m</span></h6>
                                                        <small className="mb-0 dropdown-msg-text text-secondary d-flex align-items-center">You have recived new orders</small>
                                                    </div>
                                                </div>
                                            </Link>
                                            <Link className="dropdown-item" to="#">
                                                <div className="d-flex align-items-center">
                                                    <div className="notification-box bg-light-purple text-purple"><i className="bi bi-people-fill"></i></div>
                                                    <div className="ms-3 flex-grow-1">
                                                        <h6 className="mb-0 dropdown-msg-user">New Customers <span className="msg-time float-end text-secondary">7 m</span></h6>
                                                        <small className="mb-0 dropdown-msg-text text-secondary d-flex align-items-center">5 new user registered</small>
                                                    </div>
                                                </div>
                                            </Link>

                                        </div>
                                        <div className="p-2">
                                            <div><hr className="dropdown-divider" /></div>
                                            <Link className="dropdown-item" to="#">
                                                <div className="text-center">View All Notifications</div>
                                            </Link>
                                        </div>
                          
                                    </div>

                                            {/**starts user Profile */}
                                            <div className="col-md-5 text-end">
                                            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbar-list-4" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                                                <span className="navbar-toggler-icon"></span>
                                            </button>
                                            <div className="collapse navbar-collapse" id="navbar-list-4">
                                                <ul className="navbar-nav">
                                                <li className="nav-item dropdown">
                                                        <Link class="nav-link dropdown-toggle" to="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                                            <img src={dp} width="40" height="40" className="rounded-circle" />
                                                        </Link>
                                                       
                                                           <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><Link className="dropdown-item" to="#">Action</Link></li>
            <li><Link className="dropdown-item" to="#">Another action</Link></li>
            
            <li><Link className="dropdown-item" to="#">Something else here</Link></li>
          </ul>

                                                    </li>
                                                </ul>
                                            </div>
                                            </div>
                                       
                                        {/**end user Profile */}

                                    

                                </ul>
                            </div>



                        </div>
                    </nav>
                </div>







            </div>
        );
    }
}

export default NavbarStudent;