import React, {Component} from 'react';
import { Link } from 'react-router-dom';

class DeanConfig extends Component {

    render() {
        return(
            <div>

                <br/>

                <main class="page-content"> 
        
            <div className="container-fluid">
                <div className="col-md-12 text center" >
                    <div className="card">
                   
                            <div className="card-header">
                                <h4>Dean INFORMATION (FOR JONNY pa ren)

                                  {/**<Link className="btn btn-primary float-end" to="/enroll">Enroll</Link> */}  
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

export default DeanConfig;