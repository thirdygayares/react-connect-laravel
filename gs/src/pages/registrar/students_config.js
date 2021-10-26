import React from 'react';
import Navbar from './inc/navbar';
import {Link} from 'react-router-dom';

const StudentsConfig = () => {
    return(
        <div>
        <Navbar/>


        <div class="container">
        
        <div className="col-md-12 mt-4 text center" >
            <div className="card">
                <div className="card-header">
                    <h4>PRODUCTS INFORMATION
                        <Link className="btn btn-primary float-end"  to="/enroll">Enroll</Link>
                    </h4>
                </div>
                <div className="card-body">


            <table className="table">

                <thead>
                  <tr>
                    <th scope="col">ID</th>
                    <th scope="col">FullName</th>
                    <th scope="col">Courses</th>
                    <th scope="col">Section</th>
                    <th scope="col">Email</th>
                    <th scope="col">Edit</th>
                    <th scope="col">Drop</th>
                  </tr>
                </thead>
                <tbody>
                    
                  

                        <tr>
                            <td >20</td>
                            <td >Thirdy Gayares</td>
                            <td >CDS</td>
                            <td >II-ACDS</td>
                            <td >gayaresthird@gmail.com</td>
                            <td > <Link class="btn btn-primary" to ="#"> Edit </Link></td>
                            <td > <Link class="btn btn-danger" to ="#"> Drop </Link></td>
                                                                                                     
                        </tr>
                    
                </tbody>
              </table>
            </div>
        </div>
    </div>

    </div>


    </div>
    );
}


export default StudentsConfig;