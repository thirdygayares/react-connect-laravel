<div >

    <div class="nav_homepage">
        <nav class="navbar navbar-expand-lg navbar-dark">
            <div class="container">
                <a class="navbar-brand fs-3" href="/">GGS Learning hub</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent ">
                    <ul class="navbar-nav ms-auto mb-2 mb-lg-0 fs-5 ">

                        {{-- {/**starts Messages*/} --}}
                        <a class="nav-link dropdown-toggle dropdown-toggle-nocaret" href="#" data-bs-toggle="dropdown">
                            <div class="messages">
                                <span class="notify-badge">5</span>
                                <img src="{{asset('image/icons/messages.png')}}" width="24" height="24" >
                            </div>
                        </a>
                        <div class="dropdown-menu dropdown-menu-end p-0">
                            <div class="p-2 border-bottom m-2">
                                <h5 class="h5 mb-0">Messages</h5>
                            </div>
                            <div class="header-message-list p-2">
                                <a class="dropdown-item" href="#">
                                    <div class="d-flex align-items-center">

                                        <div class="ms-3 flex-grow-1">
                                            <h6 class="mb-0 dropdown-msg-user">Amelio Joly <span class="msg-time float-end text-secondary">1 m</span></h6>
                                            <small class="mb-0 dropdown-msg-text text-secondary d-flex align-items-center">The standard chunk of lorem...</small>
                                        </div>
                                    </div>
                                </a>
                                <a class="dropdown-item" href="#">
                                    <div class="d-flex align-items-center">

                                        <div class="ms-3 flex-grow-1">
                                            <h6 class="mb-0 dropdown-msg-user">Althea Cabardo <span class="msg-time float-end text-secondary">7 m</span></h6>
                                            <small class="mb-0 dropdown-msg-text text-secondary d-flex align-items-center">Many desktop publishing</small>
                                        </div>
                                    </div>
                                </a>

                            </div>
                            <div class="p-2">
                                <div><hr class="dropdown-divider" ></div>
                                <a class="dropdown-item" href="#">
                                    <div class="text-center">View All Messages</div>
                                </a>
                            </div>
                        </div>
                        {{-- {/**end Messages*/} --}}
                        <a class="nav-link dropdown-toggle dropdown-toggle-nocaret" href="#" data-bs-toggle="dropdown">
                            <div class="notifications">
                                <span class="notify-badge">8</span>
                                <img src="{{asset('image/icons/notification.png')}}" width="24" height="24" >
                                <i class="bi bi-bell-fill"></i>
                            </div>
                        </a>
                        <div class="dropdown-menu dropdown-menu-end p-0">
                            <div class="p-2 border-bottom m-2">
                                <h5 class="h5 mb-0">Notifications</h5>
                            </div>
                            <div class="header-notifications-list p-2">
                                <a class="dropdown-item" href="#">
                                    <div class="d-flex align-items-center">
                                        <div class="notification-box bg-light-primary text-primary"><i class="bi bi-basket2-fill"></i></div>
                                        <div class="ms-3 flex-grow-1">
                                            <h6 class="mb-0 dropdown-msg-user">New Orders <span class="msg-time float-end text-secondary">1 m</span></h6>
                                            <small class="mb-0 dropdown-msg-text text-secondary d-flex align-items-center">You have recived new orders</small>
                                        </div>
                                    </div>
                                </a>
                                <a class="dropdown-item" href="#">
                                    <div class="d-flex align-items-center">
                                        <div class="notification-box bg-light-purple text-purple"><i class="bi bi-people-fill"></i></div>
                                        <div class="ms-3 flex-grow-1">
                                            <h6 class="mb-0 dropdown-msg-user">New Customers <span class="msg-time float-end text-secondary">7 m</span></h6>
                                            <small class="mb-0 dropdown-msg-text text-secondary d-flex align-items-center">5 new user registered</small>
                                        </div>
                                    </div>
                                </a>

                            </div>
                            <div class="p-2">
                                <div><hr class="dropdown-divider" ></div>
                                <a class="dropdown-item" href="#">
                                    <div class="text-center">View All Notifications</div>
                                </a>
                            </div>
              
                        </div>

                                {{-- {/**starts user Profile */} --}}
                                <div class="col-md-5 text-end">
                                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbar-list-4" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                                    <span class="navbar-toggler-icon"></span>
                                </button>
                                <div class="collapse navbar-collapse" id="navbar-list-4">
                                    <ul class="navbar-nav">
                                    <li class="nav-item dropdown">
                                            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                                <img src="{{asset('image/profile_picture/admin/Gayares.jpg')}}" width="40" height="40" class="rounded-circle" >
                                            </a>
                                           
                                               <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                            <li><a class="dropdown-item" href="#">Action</a></li>
                            <li><a class="dropdown-item" href="#">Another action</a></li>

                            <li><a class="dropdown-item" href="#">Something else here</a></li>
                                
                                    </ul>

                                        </li>
                                    </ul>
                                </div>
                                </div>
                           
                            {{-- {/**end user Profile */} --}}

                        

                    </ul>
                </div>



            </div>
        </nav>
    </div>
