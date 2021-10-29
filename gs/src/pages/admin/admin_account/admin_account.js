import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import addIcon from '../../assets/image/icons/add.png';



import axios from 'axios';


class AdminAccount extends Component {
    state = {
        admin: [],
        loading: true,
    }

    async componentDidMount() {
        const res = await axios.get('/api/admin');
        console.log(res);
        if (res.data.status === 200) {
            this.setState({
                admin: res.data.admin,
                loading: false,
            });
        }
    }

    render() {
        var admindata = " ";

        if (this.state.loading) {
            admindata = <tr>
                <td colSpan="7">
                    <h2>Loading</h2>
                </td>
            </tr>
        } else {
            admindata =
                this.state.admin.map((item) => {
                    return (
                        <tr key={item.id}>
                            <td >{item.id}</td>
                            <td >{item.lastname} {item.firstname}</td>                 
                            <td >{item.mobilenumber}</td>
                            <td >{item.email}</td>
                            <td > <Link className="btn btn-success" to={'view-admin/${item.id}'}> View </Link></td>
                            <td > <Link className="btn btn-primary" to={'edit-admin/${item.id}'}> Edit </Link></td>
                            <td > <Link className="btn btn-danger" to={'delete-admin/${item.id}'}> Delete </Link></td>
                            <td > <Link className="btn btn-danger" to={'reset-admin/${item.id}'}> Reset Password </Link></td>
                        </tr>
                    );
                });

        }


        return (
            <div>

                <main class="page-content">

                    <div className="container-fluid">

                        <div className="col-md-12 mt-4 text center" >
                            <div className="card">
                                <div className="card-header">
                                    <nav className="navbar navbar-light bg-light">

                                        <form className="d-flex">
                                            <input className="form-control me-2" type="search" placeholder="Search Admin" aria-label="Search" />
                                            <button className="btn btn-outline-success" type="submit">Search</button>
                                        </form>
                                    </nav >
                                    <h4>Admin INFORMATION

                                        <Link className="btn btn-primary float-end" to="/admin/create_admin"><img src={addIcon} width="15" height="15" /></Link>

                                      
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
                                                {admindata}
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