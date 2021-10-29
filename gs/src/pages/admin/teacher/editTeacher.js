import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';


class EditTeacher extends Component {

        state = {
            lastname: '',   
            firstname: '', 
            gender: '',  
            college: '',                  
            mobilenumber: '', 
            email: '',           
        }

        handleInput = (e) => {
            this.setState({
                [e.target.name]: e.target.value
            });
        }
        async componentDidMount(){
            const teacher_id = this.props.match.params.id;
            console.log(teacher_id);
            const res = await axios.get(`http://127.0.0.1:8000/api/edit-teacher/${teacher_id}`);
            if(res.data.status === 200)
            {
                this.setState({
                    lastname: res.data.teacher.lastname,   
                    firstname: res.data.teacher.firstname,   
                    gender: res.data.teacher.gender,    
                    college: res.data.teacher.college,                    
                    mobilenumber: res.data.teacher.mobilenumber,   
                    email: res.data.teacher.email,           
                });
            }

        }

         updateTeacher = async (e) => {
             e.preventDefault(); 

            document.getElementById('updatebtn').innerText = "Updating";
            const teacher_id = this.props.match.params.id;
            const res = await axios.put(`http://127.0.0.1:8000/api/update-teacher/${teacher_id}`, this.state);  

            if(res.data.status === 200){
                console.log(res.data.message);
                document.getElementById('updatebtn').innerText = "Updated Succesfully!";


            }
         }

    render(){
    return(
        <div>
   
        <main class="page-content">      
        <div className="container-fluid">
        <div className="row justify-content-center">
            <div className="col-ms-6 mt-4">
                    <div className="card">
                        <div className="card-header">
                            <h4>Edit Teacher
                                <Link to="/admin/teacherview" className="btn btn-danger float-end">BACK</Link>
                            </h4>
                        </div>

                        <div className="card-body">
                            <form onSubmit={this.updateTeacher} >
                           
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
                                    <label >Gender</label>
                                    <input type="text" name="gender" onChange={this.handleInput}  value={this.state.gender}  className="form-control" />
                                </div>
                                        

                                                                         
                                <div className="form-group mb-3">
                                    <label >College Department</label>
                                    <input type="text" name="college" onChange={this.handleInput} value={this.state.college} className="form-control" />
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
                                 <button type="submit" id ="updatebtn" className="btn btn-primary">Update Teacher</button>

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


export default EditTeacher;