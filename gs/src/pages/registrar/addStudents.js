import React, {Component} from 'react';
import Navbar from './inc/navbar';
import {Link} from 'react-router-dom';


class AddStudents extends Component {

        state = {
            lastname: '', 
            firstname: '', 
            college: '',
            course: '',
            section: '', 
            mobilenumber: '', 
            email: '', 
        }

        handleInput = (e) => {
            this.setState({
                [e.target.name]: e.target.value
            });
        }

        enrollStudents = (e) => {
            e.preventDefault();
        }


        
    render(){
    return(
        <div>
        <Navbar/>
            
        <div className="container">
        <div className="row justify-content-center">
            <div className="col-md-6 mt-4">
                    <div className="card">
                        <div className="card-header">
                            <h4>Enroll Students
                                <Link to={"/"} className="btn btn-danger float-end">BACK</Link>
                            </h4>
                        </div>

                        <div className="card-body">
                            <form onSubmit="this.enrollStudents" >
                           
                         {/* 
                                <div className="form-group mb-3">
                                    <label for=""> Image (File Upload)</label>
                                    <input type="file" name="image"className="form-control" required/>
                                </div>

                                */}

                                <div className="form-group mb-3">
                                    <label for="">last Name</label>
                                    <input type="text" name="lastname" onChange={this.handleInput}   value={this.state.lastname}  className="form-control" required/>
                                </div>

                                <div className="form-group mb-3">
                                    <label for="">First Name</label>
                                    <input type="text" name="firstname" onChange={this.handleInput}  value={this.state.firstname}  className="form-control" required/>
                                </div>
                                                                                        
                                <div className="form-group mb-3">
                                    <label for="">College</label>
                                    <input type="text" name="college" onChange={this.handleInput} value={this.state.college} className="form-control" require/>
                                </div>

                                <div className="form-group mb-3">
                                    <label for="">Course</label>
                                    <input type="text" name="course" onChange={this.handleInput}  value={this.state.course}  className="form-control" require/>
                                </div>

                                
                                <div className="form-group mb-3">
                                    <label for="">Section</label>
                                    <input type="text" name="section" onChange={this.handleInput}  value={this.state.section}  className="form-control" require/>
                                </div>


                                <div className="form-group mb-3">
                                    <label for="">Mobile Number</label>
                                    <input type="text" name="mobilenumber" onChange={this.handleInput}  value={this.state.mobilenumber}  className="form-control" required/>
                                </div>

                                <div className="form-group mb-3">
                                    <label for="">Email</label>
                                    <input type="email" name="email" onChange={this.handleInput}  value={this.state.email}  className="form-control" required/>
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

        </div>


    );
}
}


export default AddStudents;