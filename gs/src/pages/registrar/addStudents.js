import React from 'react';
import Navbar from './inc/navbar';
import {Link} from 'react-router-dom';


const AddStudents = () => {
    return(
        <div>
        <Navbar/>
            
        <div className="container">
        <div className="row justify-content-center">
            <div className="col-md-6 mt-4">
                    <div className="card">
                        <div className="card-header">
                            <h4>Enroll Students
                                <Link to="/" className="btn btn-danger float-end">BACK</Link>
                            </h4>
                        </div>

                        <div className="card-body">
                            <form action="#" method="POST" >
                         
                                <div className="form-group mb-3">
                                    <label for=""> Image (File Upload)</label>
                                    <input type="file" name="image"className="form-control" required/>
                                </div>

                                
                                <div className="form-group mb-3">
                                    <label for=""> Category</label>
                                    <input type="text" name="category" className="form-control" require/>
                                </div>



                                <div className="form-group mb-3">
                                    <label for=""> Name</label>
                                    <input type="text" name="name" className="form-control" required/>
                                </div>
                              

                                <div className="form-group mb-3">
                                    <label for=""> Price</label>
                                    <input type="text" name="price"  className="form-control" required/>
                                </div>

                                <div className="form-group mb-3">
                                    <label for=""> Description</label>
                                    <textarea type="text" name="description" className="form-control" rows="3"></textarea >
                                </div>

                                <div className="form-group mb-3">
                                    <label for=""> Size</label>
                                    <input type="text" name="size"  className="form-control" required/>
                                </div>

                                <div className="form-group mb-3">
                                    <label for=""> Color</label>
                                    <input type="text" name="color"  className="form-control" required/>
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


export default AddStudents;