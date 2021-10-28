import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class AdminAccount extends Component {

    render() {
        return (
            <div>

                <main class="page-content">

                    <div className="container-fluid">

                        <div className="col-md-12 mt-4 text center" >
                            <div className="card">
                                <div className="card-header">
                                    <nav className="navbar navbar-light bg-light">

                                        <form className="d-flex">
                                            <input className="form-control me-2" type="search" placeholder="Search Guardian" aria-label="Search" />
                                            <button className="btn btn-outline-success" type="submit">Search</button>
                                        </form>
                                    </nav >
                                    <h4>Admin INFORMATION
                                        <Link className="btn btn-primary float-end" to="/enroll">Add Admin</Link>
                                    </h4>
                                </div>
                                <div className="card-body">


                                    <table className="table table-bordered table-striped">

                                        <thead>
                                            <tr>
                                                <th scope="col">Admin ID</th>
                                                <th scope="col">FullName</th>

                                                <th scope="col">Contact Number</th>
                                                <th scope="col">Email</th>
                                                <th scope="col">Edit</th>
                                                <th scope="col">Delete</th>
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






            </div>

        );
    }


}

export default AdminAccount;