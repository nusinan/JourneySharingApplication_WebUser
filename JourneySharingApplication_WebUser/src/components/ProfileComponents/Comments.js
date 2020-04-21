import React, { Component } from 'react'
import { YpuProvider } from '../../context';
import {BrowserRouter as Router,Link,Redirect} from "react-router-dom";
import profile from '../../assets/images/profill.jpg';

export default class Comments extends Component {
    render() {
        return (
            <YpuProvider>   
            <div id="menu-0" custom-code="true">
                <section>
                    <div className="col-md-12 ph" ></div>
                    <div className="col-md-12 phf"><b>Comments</b></div>
                    <div className="col-md-12">
                            <div className="col-md-2">
                            </div>
                            <div className="col-md-8">
                            <div className="kart">
                                <div className="col-md-3">
                                        <img src="assets/images/profill.jpg" className="card-img-top" style={{marginTop: "30px"}}/>
                                </div>
                                <div className="col-md-9">
                                    <div className="card w-90">
                                        <div className="card-body">
                                            <h5 className="card-title pc">Commented by Numan Sinan </h5>
                                            <p className="card-text"> With supporting text below as a natural lead-in to additional content.
                                                    With supporting text below as a natural lead-in to additional content.
                                                    With supporting text below as a natural lead-in to additional content.
                                                    With supporting text below as a natural lead-in to additional content.
                                                    With supporting text below as a natural lead-in to additional content.
                                                    With supporting text below as a natural lead-in to additional content.
                                                    With supporting text below as a natural lead-in to additional content.</p>
                                            <p >Comment date : 01.01.2020  </p>
                                        </div>
                                    </div>  
                                </div>
                            </div>
                            <div className="kart">
                                <div className="col-md-3">
                                        <img src="assets/images/profill.jpg" className="card-img-top" style={{marginTop: "30px"}}/>
                                </div>
                                <div className="col-md-9">
                                    <div className="card w-90">
                                        <div className="card-body">
                                            <h5 className="card-title pc">Commented by Numan Sinan </h5>
                                            <p className="card-text"> With supporting text below as a natural lead-in to additional content.
                                                    With supporting text below as a natural lead-in to additional content.
                                                    With supporting text below as a natural lead-in to additional content.
                                                    With supporting text below as a natural lead-in to additional content.
                                                    With supporting text below as a natural lead-in to additional content.
                                                    With supporting text below as a natural lead-in to additional content.
                                                    With supporting text below as a natural lead-in to additional content.</p>
                                            <p >Comment date : 01.01.2020  </p>
                                        </div>
                                    </div>  
                                </div>
                            </div> 
                            <div className="kart">
                                <div className="col-md-3">
                                        <img src="assets/images/profill.jpg" className="card-img-top" style={{marginTop: "30px"}}/>
                                </div>
                                <div className="col-md-9">
                                    <div className="card w-90">
                                        <div className="card-body">
                                            <h5 className="card-title pc">Commented by Numan Sinan </h5>
                                            <p className="card-text"> With supporting text below as a natural lead-in to additional content.
                                                    With supporting text below as a natural lead-in to additional content.
                                                    With supporting text below as a natural lead-in to additional content.
                                                    With supporting text below as a natural lead-in to additional content.
                                                    With supporting text below as a natural lead-in to additional content.
                                                    With supporting text below as a natural lead-in to additional content.
                                                    With supporting text below as a natural lead-in to additional content.</p>
                                            <p >Comment date : 01.01.2020  </p>
                                        </div>
                                    </div>  
                                </div>
                            </div>    
                            </div> 
                        <div className="col-md-2">
                        </div>
                    </div>
                </section>
            </div>   
        </YpuProvider>
        )
    }
}
