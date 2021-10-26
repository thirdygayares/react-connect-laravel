<<<<<<< HEAD
import React, { Component } from 'react';
import Navbar from './inc/navbar';
import { Link } from 'react-router-dom';
=======
import React, {Component} from 'react';
import Navbar from './inc/navbar';
import {Link} from 'react-router-dom';
>>>>>>> f67fdeb218822e03bb1530a5985694d685e89770
import axios from 'axios';

class StudentsConfig extends Component {

<<<<<<< HEAD
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
=======
        state = {
            student: [],
            loading: true,
        }


    async componentDidMount(){
        const res = await axios.get('http://127.0.0.1:8000/api/students');
        //console.log(res);
        if(res.data.status === 200){
                this.setState({
                    student: res.data.students,
                    loading:false,
                });
>>>>>>> f67fdeb218822e03bb1530a5985694d685e89770
        }
    }


<<<<<<< HEAD
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
                            <td > <Link className="btn btn-primary" to={'edit-students/${item.id}'}> Edit </Link></td>
                            <td > <Link className="btn btn-danger" to={'delete-students/${item.id}'}> Drop </Link></td>
                        </tr>
                    );
                });

        }

        return (
            <div>
                <Navbar />


                <div className="container">

                    <div className="col-md-12 mt-4 text center" >
                        <div className="card">
                            <div className="card-header">
                                <h4>STUDENTS INFORMATION
                                    <Link className="btn btn-primary float-end" to="/enroll">Enroll</Link>
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
                                            <th scope="col">Edit</th>
                                            <th scope="col">Drop</th>
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


            </div>
        );
    }
=======
    render(){
                var Students_data = " ";

                if(this.state.loading){
                    Students_data = <tr>
                            <td colSpan ="7">
                                <h2>Loading</h2>
                            </td>
                    </tr>
                }else{
                    Students_data =  
                    this.state.student.map((item)=>{
                    return(
                    <tr key={item.id}>
                    <td >{item.id}</td>
                    <td >{item.lastname}</td>
                    <td >{item.college}</td>
                    <td >{item.course}</td>
                    <td >{item.section}</td>
                    <td >{item.mobilenumber}</td>
                    <td >{item.email}</td>
                    <td > <Link className="btn btn-primary" to ={'edit-students/${item.id}'}> Edit </Link></td>
                    <td > <Link className="btn btn-danger" to ={'delete-students/${item.id}'}> Drop </Link></td>
                    </tr>
                    );
                });

                }

    return(
        <div>
        <Navbar/>


        <div className="container">
        
        <div className="col-md-12 mt-4 text center" >
            <div className="card">
                <div className="card-header">
                    <h4>STUDENTS INFORMATION
                        <Link className="btn btn-primary float-end"  to="/enroll">Enroll</Link>
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
                    <th scope="col">Edit</th>
                    <th scope="col">Drop</th>
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


    </div>
    );
}
>>>>>>> f67fdeb218822e03bb1530a5985694d685e89770
}


export default StudentsConfig;