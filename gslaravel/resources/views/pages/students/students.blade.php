@extends('pages.students.layouts.frontend')
@section('content')

<div>
    <section class="studentsection"> 
            <div class="container">
            <div class="row">
                {{-- {/* DATE/DEADLINE */} --}}

                <div class="col-md-3 mt-1">
                    <h1 class="Studentname">HELLO THIRDY</h1>
                    <h5 class="sw">Study well</h5>
                </div>

                <div class="col-md-3 mt-5">
                    <div class="card shadow">
                        <div class="card-body">
                            <div class="Date">
                                <h2>dates</h2>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="col-md-3 mt-5">
                    <div class="card shadow">
                        <div class="card-body">
                            <div class="Deadline">
                                <h2>Deadline</h2>
                            </div>
                        </div>
                    </div>
                </div>




                {{-- {/* Event */} --}}
                <div class="Event col-md-2 mt-5 ">
                    <ul class="list-group">
                        <div class="card shadow">
                            <div class="Card-body">
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

                {{-- {/* Subject */} --}}
                <div class="Container-fluid">
                    <div class="rows">
                <ul class="list-group list-group-horizontal ">
                <li>
               
                    <div class="card shadow s_b">
                        <div class="card-body">  

         
                    </div>
                </div>               
                </li>


                
                <li>
             
                    <div class="card shadow s_b">
                        <div class="card-body">  

                     
                    </div>
                </div>              
                </li>
                </ul>

                <ul class="list-group list-group-horizontal">
                <li>
       
                    <div class="card shadow s_b">
                        <div class="card-body">  

                        </div>
           
                </div>               
                </li>


                
                <li>
             
                    <div class="card shadow s_b">
                        <div class="card-body">  

                        </div>
                    </div>
                     
                </li>
                </ul>
                </div>

            
        </div>
    </section>
</div>

@endsection