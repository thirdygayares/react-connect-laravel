import React, {Component} from 'react';

import {Link} from 'react-router-dom';
import axios from 'axios';


class AddTeacher extends Component {

        state = {
            lastname: '', 
            firstname: '', 
            college: '',                  
            mobilenumber: '', 
            email: '', 
            gender: '', 
        }

        handleInput = (e) => {
            this.setState({
                [e.target.name]: e.target.value
            });
        }

        addTeachers = async (e) => {
            e.preventDefault();

            const res = await axios.post('/api/add-teacher', this.state);

            if(res.data.status === 200){
                console.log(res.data.message);
                this.setState ({
                    lastname: '', 
                    firstname: '', 
                    college: '',                  
                    mobilenumber: '', 
                    email: '', 
                    gender: '',  
                });
            }
        }
    
    render(){
    return(

        <div>
   
        <main class="page-content"> 
            
        <div className="container">
        <div className="row justify-content-center">
            <div className="col-md-6 mt-4">
                    <div className="card">
                        <div className="card-header">
                            <h4>Add Teacher
                                <Link to={"/"} className="btn btn-danger float-end">BACK</Link>
                            </h4>
                        </div>

                        <div className="card-body">
                            <form onSubmit={this.addTeachers} >
                           
                         {/* 
                                <div className="form-group mb-3">
                                    <label > Image (File Upload)</label>
                                    <input type="file" name="image"className="form-control" required/>
                                </div>

                                */}

                                <div className="form-group mb-3">
                                    <label >Last Name</label>
                                    <input type="text" name="lastname" onChange={this.handleInput}   value={this.state.lastname}  className="form-control" />
                                </div>

                                <div className="form-group mb-3">
                                    <label >First Name</label>
                                    <input type="text" name="firstname" onChange={this.handleInput}  value={this.state.firstname}  className="form-control" />
                                </div>
                                                                                        
                                <div className="form-group mb-3">
                                    <label >College Department</label>
                                    <input type="text" name="college" onChange={this.handleInput} value={this.state.college} className="form-control" />
                                </div>

                                <div className="form-group mb-3">
                                    <label >Gender</label>
                                    <input type="email" name="gender" onChange={this.handleInput}  value={this.state.gender}  className="form-control" />
                                </div>
                                           
                                <div className="form-group mb-3">
                                    <label >Mobile Number</label>
                                    <input type="text" name="mobilenumber" onChange={this.handleInput}  value={this.state.mobilenumber}  className="form-control" />
                                </div>

                                <div className="form-group mb-3">
                                    <label >Email</label>
                                    <input type="email" name="email" onChange={this.handleInput}  value={this.state.email}  className="form-control" />
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
}


export default AddTeacher;