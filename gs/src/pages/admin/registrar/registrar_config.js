import React, {Component} from 'react';
import { Link } from 'react-router-dom';

class RegistrarConfig extends Component {

    render() {
        return(
            <div>

                <br/>
                <nav className="navbar navbar-light bg-light">
                <div className="container-fluid">
                <form className="d-flex">
                <input className="form-control me-2" type="search" placeholder="Search Students" aria-label="Search" />
                <button className="btn btn-outline-success" type="submit">Search</button>
            </form>
                    </div >
                </nav >

                
            <div className="container-fluid">
                <div className="col-md-12 mt-3 text center" >
                    <div className="card">
                        <div className="row">
                            <div className="card-header">
                                <h4>Registrar (FOR JONNY pa ren)

                                  <Link className="btn btn-primary float-end" to="/enroll">Add Registrar</Link> 
                                </h4>
                            </div>
                            <div className="card-body">


                                <table className="table table-bordered table-striped">

                                    <thead>
                                        <tr>
                                            <th scope="col">ID</th>
                                            <th scope="col">FullName</th>
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

            </div>

            </div >

        );
    }


}

export default RegistrarConfig;