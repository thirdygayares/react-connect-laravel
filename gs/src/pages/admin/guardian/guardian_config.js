import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';


class GuardinConfig extends Component {
    state = {
        guardian: [],
        loading: true,
    }

    async componentDidMount() {
        const res = await axios.get('/api/guardian');
        console.log(res);
        if (res.data.status === 200) {
            this.setState({
                guardian: res.data.guardian,
                loading: false,
            });
        }
    }
  render() {

    var guardianData = " ";

    if (this.state.loading) {
        guardianData = <tr>
            <td colSpan="7">
                <h2>Loading</h2>
            </td>
        </tr>
    } else {
        guardianData =
            this.state.guardian.map((item) => {
                return (
                    <tr key={item.id}>
                        <td >{item.id}</td>
                        <td >{item.lastname} </td>     
                        <td >{item.email}</td>                               
                        <td >{item.mobilenumber}</td>
                        <td >{item.guardedby}</td>
                        <td > <Link className="btn btn-success" to={'view-guardian/${item.id}'}> View </Link></td>
                        <td > <Link className="btn btn-primary" to={'edit-guardian/${item.id}'}> Edit </Link></td>
                        <td > <Link className="btn btn-danger" to={'delete-guardian/${item.id}'}> Delete </Link></td>
                        <td > <Link className="btn btn-danger" to={'reset-guardian/${item.id}'}> Reset Password </Link></td>
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
    <input className="form-control me-2" type="search" placeholder="Search Guardian" aria-label="Search" />
    <button className="btn btn-outline-success" type="submit">Search</button>
</form>
</nav >
            <h4>GUARDIAN INFORMATION
                <Link className="btn btn-primary float-end" to="/addguardian">Add Guardian</Link>
            </h4>
        </div>
        <div className="card-body">


            <table className="table table-bordered table-striped">

                <thead>
                    <tr>
                        <th scope="col">ID</th>
                        <th scope="col">FullName</th> 
                        <th scope="col">Email</th>          
                        <th scope="col">Contact Number</th>
                        <th scope="col">Guarded name</th>   
                        <th scope="col">View</th>
                        <th scope="col">Edit</th>
                        <th scope="col">Delete</th>
                        <th scope="col">Reset Password</th> 
                    </tr>
                </thead>
                <tbody>
                        {guardianData}
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

export default GuardinConfig;