import React from 'react';
import { Component } from 'react';
import { Link } from 'react-router-dom';
import dp from '../assets/image/profile_picture/admin/Gayares.jpg';
import messagesIcon from '../assets/image/icons/messages.png';
import notificationIcon from '../assets/image/icons/notification.png';

class Navbar extends Component {

    render() {
        return (

            <div>

                <div className="wrapper">
                    <header className="top-header">
                        <nav className="navbar  navbar-expand gap-3 ">
                            <div className="mobile-toggle-icon fs-3">
                                <i className="bi bi-list"></i>
                            </div>
                            <div className="top-navbar-right ms-auto ">
                                <ul className="navbar-nav align-items-center">
                                    {/**starts Messages*/}
                                    <li className="nav-item dropdown dropdown-large">
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
                                    </li>

                                    {/**end Messages*/}



                                    {/**Starts Notification*/}

                                    <li className="nav-item dropdown dropdown-large">
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
                                    </li>
                                    {/**End Notification Notification*/}


                                    {/**starts user Profile */}
                                    <li className="nav-item dropdown dropdown-user-setting">
                                        <Link className="nav-link dropdown-toggle dropdown-toggle-nocaret" to="#" data-bs-toggle="dropdown">
                                            <div className="user-setting d-flex align-items-center">
                                                <img src={dp} class="user-img" />
                                            </div>
                                        </Link>
                                        <ul className="dropdown-menu dropdown-menu-end">
                                            <li>
                                                <Link className="dropdown-item" to="#">
                                                    <div className="d-flex align-items-center">
                                                        <img src={dp} class="rounded-circle" width="54" height="54" />
                                                        <div className="ms-3">
                                                            <h6 className="mb-0 dropdown-user-name">Jhon Deo</h6>
                                                            <small className="mb-0 dropdown-user-designation text-secondary">HR Manager</small>
                                                        </div>
                                                    </div>
                                                </Link>
                                            </li>
                                            <li><hr className="dropdown-divider" /></li>
                                            <li>
                                                <Link className="dropdown-item" to="pages-user-profile.html">
                                                    <div className="d-flex align-items-center">
                                                        <div className=""><i className="bi bi-person-fill"></i></div>
                                                        <div className="ms-3"><span>Profile</span></div>
                                                    </div>
                                                </Link>
                                            </li>

                                            <li><hr className="dropdown-divider" /></li>
                                            <li>
                                                <Link className="dropdown-item" to="authentication-signup-with-header-footer.html">
                                                    <div className="d-flex align-items-center">
                                                        <div className=""><i className="bi bi-lock-fill"></i></div>
                                                        <div className="ms-3"><span>Logout</span></div>
                                                    </div>
                                                </Link>
                                            </li>
                                        </ul>
                                    </li>

                                    {/**end user Profile */}


                                </ul>



                            </div>

                        </nav>
                    </header>
                </div >






                {/**Start of Navbar*/}

                <aside className="sidebar-wrapper" data-simplebar="true">
                    <div className="sidebar-header">
                        <div>

                        </div>
                        <div>
                            <h4 className="logo-text">GGS Admin</h4>
                        </div>
                        <div className="toggle-icon ms-auto"> <i className="bi bi-list"></i>
                        </div>
                    </div>

                    <ul className="metismenu" id="menu">
                        <li>
                            <Link to='#'>
                                <div className="parent-icon"><i className="bi bi-house-fill"></i>
                                </div>
                                <div className="menu-title">Dashboard</div>
                            </Link>

                        </li>


                        
                        <li className="menu-label">Content</li>

                        {/** Add Content of homepage*/}
                        <li>


                            <ul>
                                <li> <Link to="/homepage_Controller"><i className="bi bi-circle"></i>Edit Homepage</Link>
                                </li>
                            </ul>
                        </li>
                        {/**End of Department of homepage  */}


                         {/** Add Content of homepage*/}
                        <li>


                            <ul>
                                <li> <Link to="/About_usCofig"><i className="bi bi-circle"></i>Edit About us</Link>
                                </li>
                            </ul>
                        </li>
                        {/**End of Department of homepage  */}



                     <li className="menu-label">Account</li>
                   
                        {/** Students */}
                        <li>

                            <ul>
                                <li> <Link to="/students_config"><i className="bi bi-circle"></i>View Students</Link>
                                </li>

                            </ul>
                        </li>


                        {/** End of Students */}

                        {/** Teacher */}
                        <li>

                            <ul>
                                <li> <Link to="/teacher_config"><i className="bi bi-circle"></i>View Teacher</Link>
                                </li>
                            </ul>
                        </li>
                        {/** End of Teacher */}


                        {/** Registrar */}
                        <li>
                            <ul>
                                <li> <Link to="registar_config"><i className="bi bi-circle"></i>View Registrar</Link>
                                </li>
                            </ul>
                        </li>
                        {/** End of Registrar */}



                        {/** Dean */}
                        <li>
                            <ul>
                                <li> <Link to="/dean_config"><i className="bi bi-circle"></i>View Dean</Link>
                                </li>
                            </ul>
                        </li>
                        {/** End of Dean */}



                        {/** Guardiab */}

                        <li>
                            <ul>
                                <li> <Link to="/guardian_config"><i className="bi bi-circle"></i>View Guardian</Link>
                                </li>
                            </ul>
                        </li>
                        {/** End of Guardiab */}


                        {/** Admin acoount */}
                        <li>
                            <ul>
                                <li> <Link to="/admin_config"><i className="bi bi-circle"></i>Admin Account</Link>
                                </li>
                            </ul>
                        </li>
                        {/** End of Account */}




                        <li className="menu-label">Course</li>

                        {/** Add Department*/}
                        <li>


                            <ul>
                                <li> <Link to="#"><i className="bi bi-circle"></i>Add Department</Link>
                                </li>
                            </ul>
                        </li>
                        {/**End of Department  */}


                        {/** Add Course*/}
                        <li>
                            <ul>
                                <li> <Link to="#"><i className="bi bi-circle"></i>Add Year And Course</Link>
                                </li>
                            </ul>
                        </li>

                        {/**End of course  */}


                        {/** Add Subject */}
                        <li>
                            <ul>
                                <li> <Link to="#"><i className="bi bi-circle"></i>Add Subject</Link>
                                </li>
                            </ul>
                        </li>
                        {/** End of Subject */}


                        {/** Add Section */}
                        <li>
                            <ul>
                                <li> <Link to="#"><i className="bi bi-circle"></i>Add Section</Link>
                                </li>
                            </ul>
                        </li>
                        {/** End of Section */}


                    </ul>

                </aside>

                {/**End of Navbar*/}




            </div>



        );

    }
}



export default Navbar;