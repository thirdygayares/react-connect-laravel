import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

class ViewTeacher extends Component {
    state = {
        teacher: [],
        loading: true,
    }


    async componentDidMount() {
        const res = await axios.get('/api/teacher');
        console.log(res);
        if (res.data.status === 200) {
            this.setState({
                teacher: res.data.teacher,
                loading: false,
            });
        }
    }
    render() {

        var Teacher_data = " ";

        if (this.state.loading) {
            Teacher_data = <tr>
                <td colSpan="7">
                    <h2>Loading</h2>
                </td>
            </tr>
        } else {
            Teacher_data =
                this.state.teacher.map((item) => {
                    return (
                        <tr key={item.id}>
                            <td >{item.id}</td>
                            <td >{item.lastname}</td>
                            <td >{item.college}</td>                   
                            <td >{item.mobilenumber}</td>
                            <td >{item.email}</td>
                            <td > <Link className="btn btn-success" to={'view-teacher/${item.id}'}> View </Link></td>
                            <td > <Link className="btn btn-primary" to={'edit-teacher/${item.id}'}> Edit </Link></td>
                            <td > <Link className="btn btn-danger" to={'delete-teacher/${item.id}'}> Delete </Link></td>
                            <td > <Link className="btn btn-danger" to={'reset-teacher/${item.id}'}> Reset Password </Link></td>
                        </tr>
                    );
                });

        }


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
                                            <th scope="col">Delete</th>
                                            <th scope="col">Reset Password</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {Teacher_data}
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