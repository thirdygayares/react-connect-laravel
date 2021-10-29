
import React, { Component } from 'react';
import Slider from './inc/slider';
import SampleBottom from './images/SampleBottom.jpg';


class HomePagefrontend extends Component {
    render() {
        
        return (
          
            <div>
                {/* this is for the quote */}
                <section className="section bg-c-light">
                    <div className="container">
                        <div className="row">
                            <div classname="col-md-12 ">
                                <h2 className="MainHeading"> Quote for today</h2>
                            </div>
                            <div className="col-md-6">
                                <h3 className="quotebody">Success is not the key to happiness. Happiness is the key to success. If you love what you are doing, you will be successful.
                                </h3>
                            </div>
                            <div className="bg" >

                            </div>
                            <div classname="col-md-12 ">
                                <h3 className="Author">- Albert Schweitzer</h3>
                            </div>
                        </div>
                    </div>
                </section>

                {/* for the images */}
                <Slider />


                {/* for last part */}
                <section className="bottom border-top">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12 mb-5 text-left">
                                <h2 className="bottomheading">Updates/News</h2>
                                <div className="underline"></div>
                            </div>

                            <div className="col-md-4 ">
                                <div className="card shadow">
                                    <img src={SampleBottom} className="w-100 border-bottom" alt="SampleBottom" />
                                    <div className="card-body">
                                        <h6>helloawghnawfuaewuihfawuifhawuhfaewfhewarfoaewvfk
                                            jafhgauhfjaeiwjfiajvguwaghfyihewfauiwgfewyagfw</h6>
                                    </div>
                                </div>
                            </div>

                            <div className="col-md-4 ">
                                <div className="card shadow">
                                    <img src={SampleBottom} className="w-100 border-bottom" alt="SampleBottom" />
                                    <div className="card-body">
                                        <h6>helloawghnawfuaewuihfawuifhawuhfaewfhewarfoaewvfk
                                            jafhgauhfjaeiwjfiajvguwaghfyihewfauiwgfewyagfw</h6>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 ">
                                <div className="card shadow">
                                    <img src={SampleBottom} className="w-100 border-bottom" alt="SampleBottom" />
                                    <div className="card-body">
                                        <h6>helloawghnawfuaewuihfawuifhawuhfaewfhewarfoaewvfk
                                        </h6>

                                    </div>
                                </div>
                            </div>


                        </div>
                    </div>
                </section>
            </div>
        );
    }
}

export default HomePagefrontend;