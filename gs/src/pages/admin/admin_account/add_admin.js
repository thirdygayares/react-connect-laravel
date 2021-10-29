import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';


function AddStudents() {

    const [adminInput, setAdmin] = useState({
        lastname: '',
        firstname: '',
        contactnumber: '',
        email: '',
    });

    const handleInput = (e) => {
        e.persist();
        setAdmin({...registerInput, [e.target.name]: e.target.value });

    }

    const registerSubmit = (e) => {
        e.preventDefault();

        const data = {
            firstname: registerInput.firstname,
            contactnumber: registerInput.contactnumber,
            email: registerInput.contactnumber,
        }

        axios.post(`api/adminregister`, data).then(res => {

        });
      
    }


        return (

            <div>
                <main class="page-content">

                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-md-6 mt-4">
                                <div className="card">
                                    <div className="card-header">
                                        <h4>Add admin
                                            <Link to={"/"} className="btn btn-danger float-end">BACK</Link>
                                        </h4>
                                    </div>

                                    <div className="card-body">
                                        <form onSubmit={adminSubmit} >

                                            {/* 
                                <div className="form-group mb-3">
                                    <label > Image (File Upload)</label>
                                    <input type="file" name="image"className="form-control" required/>
                                </div>

                                */}

                                            <div className="form-group mb-3">
                                                <label >last Name</label>
                                                <input type="text" name="lastname" onChange={this.handleInput} value={adminInput.lastname} className="form-control" />
                                            </div>

                                            <div className="form-group mb-3">
                                                <label >First Name</label>
                                                <input type="text" name="firstname" onChange={this.handleInput} value={adminInput.firstname} className="form-control" />
                                            </div>

                                            <div className="form-group mb-3">
                                                <label >Contact Number</label>
                                                <input type="text" name="contactnumber" onChange={this.handleInput} value={adminInput.contactnumber} className="form-control" />
                                            </div>

                                            <div className="form-group mb-3">
                                                <label >Email</label>
                                                <input type="text" name="email" onChange={this.handleInput} value={adminInput.email} className="form-control" />
                                            </div>

                                         
                                            <div className="form-group mb-3">
                                                <button type="submit" className="btn btn-primary">Submit</button>

                                            </div>


                                        </form>
                                    </div>


                                </div>
                            </div>
                        </div>
                    </div>
                </main>
            </div>

        );
    }



export default AddStudents;