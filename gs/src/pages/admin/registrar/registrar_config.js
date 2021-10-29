import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

class RegistrarConfig extends Component {
    state = {
        registrar: [],
        loading: true,
    }


    async componentDidMount() {
        const res = await axios.get('/api/registrar');
        console.log(res);
        if (res.data.status === 200) {
            this.setState({
                registrar: res.data.registrar,
                loading: false,
            });
        }
    }
    render() {
        var registrarData = " ";
        
        if (this.state.loading) {
            registrarData = <tr>
                <td colSpan="7">
                    <h2>Loading</h2>
                </td>
            </tr>
        } else {
            registrarData =
                this.state.registrar.map((item) => {
                    return (
                        <tr key={item.id}>
                            <td >{item.id}</td>
                            <td >{item.lastname} {item.firstname}</td>                 
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

        return (
            <div>
                <main class="page-content">
                    <nav className="navbar navbar-light bg-light">
                        <div className="container-fluid">
                            
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
                                    <h4>Registrar information

                                        <Link className="btn btn-primary float-end" to="/add_registrar">Add Registrar</Link>
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
                                                <th scope="col">Delete</th>
                                                <th scope="col">Reset Password</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {registrarData}
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

export default RegistrarConfig;


