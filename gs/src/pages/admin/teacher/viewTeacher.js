import React, {Component} from 'react';
import { Link } from 'react-router-dom';

class ViewTeacher extends Component {

    render() {
        return(
            <div>

<main class="page-content"> 
        

                <nav className="navbar navbar-light bg-light">
                <div className="container-fluid">
                <div className="btn-group" role="group" aria-label="Button group with nested dropdown">
                <Link className="navbar-brand">Filter</Link>
            {/**First Filter */}
                <div className="btn-group" role="group">
                <button id="btnGroupDrop1" type ="button" className="btn btn-primary dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                College
                </button>
                <ul className="dropdown-menu" aria-labelledby="btnGroupDrop1">
                <li><Link className="dropdown-item" href="#">list of College</Link></li>
                <li><Link className="dropdown-item" href="#">list of College</Link></li>
                </ul>
                </div>


            </div >

            <form className="d-flex">
                <input className="form-control me-2" type="search" placeholder="Search Teacher" aria-label="Search" />
                <button className="btn btn-outline-success" type="submit">Search</button>
            </form>
                    </div >
                </nav >



            <div className="container-fluid">
                <div className="col-md-12 mt-3 text center" >
                    <div className="card">
                       
                            <div className="card-header">
                                <h4>Teachers INFORMATION (FOR JONNY pa ren)

                                  <Link className="btn btn-primary float-end" to="/add_teacher">Add Teacher</Link> 
                                </h4>
                            </div>
                            <div className="card-body">


                                <table className="table table-bordered table-striped">

                                    <thead>
                                        <tr>
                                            <th scope="col">ID</th>
                                            <th scope="col">FullName</th>
                                            <th scope="col">College</th>
                                   
                                            <th scope="col">Contact Number</th>
                                            <th scope="col">Email</th>
                                            <th scope="col">View</th>
                                            <th scope="col">Edit</th>
                                            <th scope="col">Reset Password</th>
                                        </tr>
                                    </thead>
                                    <tbody>

                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>

        


            </main>
            </div >

        );
    }


}

export default ViewTeacher;