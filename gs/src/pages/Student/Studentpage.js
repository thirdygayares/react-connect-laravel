import React, { Component } from "react";

class Studentpage extends Component {
    render() {
        return (
            <div>
                <section className="studentsection"> 
                        <div className="container">
                        <div className="row">
                            {/* DATE/DEADLINE */}

                            <div className="col-md-3 mt-1">
                                <h1 className="Studentname">HELLO THIRDY</h1>
                                <h5 className="sw">Study well</h5>
                            </div>

                            <div className="col-md-3 mt-5">
                                <div className="card shadow">
                                    <div className="card-body">
                                        <div className="Date">
                                            <h2>dates</h2>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-md-3 mt-5">
                                <div className="card shadow">
                                    <div className="card-body">
                                        <div className="Deadline">
                                            <h2>Deadline</h2>
                                        </div>
                                    </div>
                                </div>
                            </div>




                            {/* Event */}
                            <div className="Event col-md-2 mt-5 ">
                                <ul class="list-group">
                                    <div className="card shadow">
                                        <div className="Card-body">
                                            <li class="list-group-item text-center"><h2>Event</h2></li>
                                            </div>
                                    </div>
                                            <li class="list-group-item">Dapibus ac facilisis in</li>
                                            <li class="list-group-item">Morbi leo risus</li>
                                            <li class="list-group-item">Porta ac consectetur ac</li>
                                            <li class="list-group-item">Vestibulum at eros</li>
                                       
                                </ul>
                            </div>
                            </div>
                            </div>

                            {/* Subject */}
                            <div className="Container-fluid">
                                <div className="rows">
                            <ul className="list-group list-group-horizontal ">
                            <li>
                           
                                <div className="card shadow s_b">
                                    <div className="card-body">  

                     
                                </div>
                            </div>               
                            </li>


                            
                            <li>
                         
                                <div className="card shadow s_b">
                                    <div className="card-body">  

                                 
                                </div>
                            </div>              
                            </li>
                            </ul>

                            <ul class="list-group list-group-horizontal">
                            <li>
                   
                                <div className="card shadow s_b">
                                    <div className="card-body">  

                                    </div>
                       
                            </div>               
                            </li>


                            
                            <li>
                         
                                <div className="card shadow s_b">
                                    <div className="card-body">  

                                    </div>
                                </div>
                                 
                            </li>
                            </ul>
                            </div>

                        
                    </div>
                </section>
            </div>
        );
    }
}

export default Studentpage;