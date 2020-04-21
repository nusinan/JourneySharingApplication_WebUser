import React, { Component } from 'react'
import { YpuProvider } from '../../context';
import {BrowserRouter as Router,Link,Redirect} from "react-router-dom";
import profile from '../../assets/images/profill.jpg';

export default class Trips extends Component {
    render() {
        return (
            <YpuProvider>   
                <div id="menu-0" custom-code="true">
                    <section>
                        <div className="col-md-12 ph" ></div>
                        <div className="col-md-12 phf"><b>Trips</b></div>
                        <div className="col-md-12">
                                <div className="col-md-2">
                                </div>
                                <div className="col-md-8">
                                    <div className="col-md-3">
                                            <img src={profile} className="card-img-top" style={{marginTop: "30px"}}/>
                                    </div>
                                    <div className="col-md-9">
                                            <div className="card w-90">
                                                <div className="card-body">
                                                    <h5 className="card-title "><b>Travelled Person</b> <label className="pc"> Numan Sinan</label>  </h5>
                                                    
                                                    <label><b>Nereden :Kütahya   Nereye : Istanbul</b></label>
                                                    <p className="card-text pc" style={{padding:"16px"}}> With supporting text below as a natural lead-in to additional content.
                                                            With supporting text below as a natural lead-in to additional content.
                                                            With supporting text below as a natural lead-in to additional content.
                                                            With supporting text below as a natural lead-in to additional content.
                                                            With supporting text below as a natural lead-in to additional content.
                                                            With supporting text below as a natural lead-in to additional content.
                                                            With supporting text below as a natural lead-in to additional content.</p>
                                                    <label><b>Travel  Date : </b><p className="pc"><b>01.01.2020</b></p></label>
                                                
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
