import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import searchIcon from '../../assets/image/icons/search.png';
import addIcon from '../../assets/image/icons/add.png';
import viewIcon from '../../assets/image/icons/view.png';
import deleteIcon from '../../assets/image/icons/delete.png';




class GuardinConfig extends Component {
//basta nag add ako sa guardian di ko alam yung mga opening bracket e
    state = {
        guardian: [],
        loading: true,
    }
    async componentDidMount() {
        const res = await axios.get('http://127.0.0.1:8000/api/students');
        //console.log(res);
        if (res.data.status === 200) {
            this.setState({
                student: res.data.guardian,
                loading: false,
            });
        }
    }

  render() {
    var Guardian_data = " ";

    if (this.state.loading) {
        
        Guardian_data = <tr>
            <td colSpan="7">
                <h2>Loading</h2>
            </td>
        </tr>
    } else {
        Guardian_data =
            this.state.guardian.map((item) => {
                return (
                    <tr key={item.id}>
                        <td >{item.id}</td>
                        <td >{item.lastname}</td>
                        <td >{item.firstname}</td>
                        <td >{item.gender}</td>
                        <td >{item.mobilenumber}</td>
                        <td >{item.email}</td>
                        <td >{item.guardedby}</td>
                        <td > <Link className="btn btn-primary" to={'view-guardian/${item.id}'}><img src={viewIcon} width="25" height="15" />  </Link></td>
                        <td > <Link className="btn btn-danger" to={'delete-guardian/${item.id}'}><img src={deleteIcon} width="15" height="15" /> </Link></td>
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
    <button className="btn btn-outline-success" type="submit"><img src={searchIcon} width="30" height="30" /></button>
</form>
</nav >
            <h4>GUARDIAN INFORMATION
                <Link className="btn btn-primary float-end" to="/addguardian"><img src={addIcon} width="15" height="15" /></Link>
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