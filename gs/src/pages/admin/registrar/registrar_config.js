import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import viewIcon from '../../assets/image/icons/view.png';
import editIcon from '../../assets/image/icons/edit.png';
import deleteIcon from '../../assets/image/icons/delete.png';
import resetIcon from '../../assets/image/icons/reset.png';
import addIcon from '../../assets/image/icons/add.png';
import searchIcon from '../../assets/image/icons/search.png';






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
                            <td > <Link className="btn btn-success" to={'view-registrar/${item.id}'}><img src={viewIcon} width="25" height="15" /> </Link></td>
                            <td > <Link className="btn btn-primary" to={`/edit_registrar/${item.id}`}><img src={editIcon} width="15" height="15" />  </Link></td>
                            <td > <Link className="btn btn-danger" to={`delete-registrar/${item.id}`}><img src={deleteIcon} width="15" height="15" />  </Link></td>
                            <td > <Link className="btn btn-danger" to={`reset-registrar/${item.id}`}><img src={resetIcon} width="15" height="15" />  </Link></td>
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
                                <button className="btn btn-outline-success" type="submit"><img src={searchIcon} width="30" height="30" /></button>
                            </form>
                        </div >
                    </nav >
                    <div className="container-fluid">
                        <div className="col-md-12 mt-3 text center" >
                            <div className="card">

                                <div className="card-header">
                                    <h4>Registrar information

                                        <Link className="btn btn-primary float-end" to="/admin/add_registrar"><img src={addIcon} width="15" height="15" /></Link>
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

