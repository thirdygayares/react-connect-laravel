import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import viewIcon from '../../assets/image/icons/view.png';
import resetIcon from '../../assets/image/icons/reset.png';
import searchIcon from '../../assets/image/icons/search.png';




class Students extends Component {

    state = {
        student: [],
        loading: true,
    }


    async componentDidMount() {
        const res = await axios.get('http://127.0.0.1:8000/api/students');
        //console.log(res);
        if (res.data.status === 200) {
            this.setState({
                student: res.data.students,
                loading: false,
            });
        }
    }


    render() {

        var Students_data = " ";

        if (this.state.loading) {
            
            Students_data = <tr>
                <td colSpan="7">
                    <h2>Loading</h2>
                </td>
            </tr>
        } else {
            Students_data =
                this.state.student.map((item) => {
                    return (
                        <tr key={item.id}>
                            <td >{item.id}</td>
                            <td >{item.lastname}</td>
                            <td >{item.college}</td>
                            <td >{item.course}</td>
                            <td >{item.section}</td>
                            <td >{item.mobilenumber}</td>
                            <td >{item.email}</td>
                            <td > <Link className="btn btn-primary" to={'view-students/${item.id}'}><img src={viewIcon} width="25" height="15" />  </Link></td>
                            <td > <Link className="btn btn-danger" to={'delete-students/${item.id}'}><img src={resetIcon} width="15" height="15" /> </Link></td>
                        </tr>
                    );
                });

        }

        return (

            

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

            {/**Second Filter */}

                <div className="btn-group" role="group">
                <button id="btnGroupDrop1" type ="button" className="btn btn-primary dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                Course
                </button>
                <ul className="dropdown-menu" aria-labelledby="btnGroupDrop1">
                <li><Link className="dropdown-item" href="#">list of Course</Link></li>
                <li><Link className="dropdown-item" href="#">list of Course</Link></li>
                </ul>
                </div>


            {/**Third Filter */}

                <div className="btn-group" role="group">
                <button id="btnGroupDrop1" type ="button" className="btn btn-primary dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                Section
                </button>
                <ul className="dropdown-menu" aria-labelledby="btnGroupDrop1">
                <li><Link className="dropdown-item" href="#">list of Section</Link></li>
                <li><Link className="dropdown-item" href="#">list of Section</Link></li>
                </ul>
            </div>


            </div >

            <form className="d-flex">
                <input className="form-control me-2" type="search" placeholder="Search Students" aria-label="Search" />
                <button className="btn btn-outline-success" type="submit"><img src={searchIcon} width="30" height="30" /></button>
            </form>
                    </div >
                </nav >



            <div className="container-fluid">
                <div className="col-md-12 mt-3 text center" >
                    <div className="card">
                       
                            <div className="card-header">
                                <h4>STUDENTS INFORMATION (FOR JONNY)

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
                                            <th scope="col">Courses</th>
                                            <th scope="col">Section</th>
                                            <th scope="col">Contact Number</th>
                                            <th scope="col">Email</th>
                                            <th scope="col">View</th>
                                            <th scope="col">Reset Password</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {Students_data}
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

export default Students;