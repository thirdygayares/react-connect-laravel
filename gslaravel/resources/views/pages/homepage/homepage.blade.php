
@extends('pages.layouts.frontend')
@section('content')

<div>
    {{-- {/* this is for the quote */} --}}
    <section class="section bg-c-light">
        <div class="container">
            <div class="row">
                <div class="col-md-12 ">
                    <h2 class="MainHeading"> Quote for today</h2>
                </div>
                <div class="col-md-6">
                    <h3 class="quotebody">Success is not the key to happiness. Happiness is the key to success. If you love what you are doing, you will be successful.
                    </h3>
                </div>
                <div class="bg" >
                   
                    <img  src="{{ asset('images/bghomepage.jpg')}}" class="bg">
                </div>
                <div class="col-md-12 ">
                    <h3 class="Author">- Albert Schweitzer</h3>
                </div>
            </div>
        </div>
    </section>


    {{-- {/* for the images */} --}}
    <div class = "sliderimage border-top" >
        <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
            <div class="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
            </div>
            <div class="carousel-inner">
                <div class="carousel-item active">
                    <img  src="{{ asset('images/Sam.jpg')}}" class="img-fluid" alt="..." >
                </div>
                <div class="carousel-item">
                    <img  src="{{ asset('images/Sam.jpg')}}" class="d-block w-100" alt="..." >
                </div>
                <div class="carousel-item">
                    <img  src="{{ asset('images/Sam.jpg')}}" class="d-block w-100" alt="..." >
                </div>
            </div>

            
            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
            </button>
        </div>
        </div>


    {{-- {/* for last part */} --}}
    <section class="bottom border-top">
        <div class="container">
            <div class="row">
                <div class="col-md-12 mb-5 text-left">
                    <h2 class="bottomheading">Updates/News</h2>
                    <div class="underline"></div>
                </div>

                <div class="col-md-4 ">
                    <div class="card shadow">
                        <img src="{{ asset('images/SampleBottom.jpg')}}" class="w-100 border-bottom" alt="SampleBottom" >
                        <div class="card-body">
                            <h6>helloawghnawfuaewuihfawuifhawuhfaewfhewarfoaewvfk
                                jafhgauhfjaeiwjfiajvguwaghfyihewfauiwgfewyagfw</h6>
                        </div>
                    </div>
                </div>

                <div class="col-md-4 ">
                    <div class="card shadow">
                        <img src="{{ asset('images/SampleBottom.jpg')}}" class="w-100 border-bottom" alt="SampleBottom" >
                        <div class="card-body">
                            <h6>helloawghnawfuaewuihfawuifhawuhfaewfhewarfoaewvfk
                                jafhgauhfjaeiwjfiajvguwaghfyihewfauiwgfewyagfw</h6>
                        </div>
                    </div>
                </div>

                <div class="col-md-4 ">
                    <div class="card shadow">
                        <img src="{{ asset('images/SampleBottom.jpg')}}" class="w-100 border-bottom" alt="SampleBottom" >
                        <div class="card-body">
                            <h6>helloawghnawfuaewuihfawuifhawuhfaewfhewarfoaewvfk
                            </h6>

                        </div>
                    </div>
                </div>


            </div>
        </div>
    </section>
</div>


@endsection