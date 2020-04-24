import React, { Component } from 'react'
import { YpuProvider } from '../context';
import {BrowserRouter as Router,Link,Redirect} from "react-router-dom";
import img1 from '../assets/images/f-mwo-dznni-averie-woodard-2000x2000.jpg';
import img2 from '../assets/images/mbr-2000x1333.png';
export default class Profile extends Component {
    
    render() {
        return (
            <YpuProvider>
                <div id="menu-0" custom-code="true">
                    <section>
                        <nav className="navbar navbar-dropdown bg-color transparent navbar-fixed-top">
                            <div className="container">
                                <div className="mbr-table">
                                    <div className="mbr-table-cell">
                                        <button className="navbar-toggler pull-xs-right hidden-md-up" type="button" data-toggle="collapse" data-target="#exCollapsingNavbar">
                                            <div className="hamburger-icon"></div>
                                        </button>
                                        <ul className="nav-dropdown collapse pull-xs-right nav navbar-nav navbar-toggleable-sm" id="exCollapsingNavbar">
                                        <li className="nav-item"><a ><Link className="nav-link link mbr-editable-menu-item" to = "/"><h6><b>HomePage</b></h6></Link></a></li>
                                        <li className="nav-item"><a ><Link className="nav-link link mbr-editable-menu-item" to = "/searchTrip"><h6><b>Search Trip</b></h6></Link></a></li>
                                        <li className="nav-item"><a ><Link className="nav-link link mbr-editable-menu-item" to = "/PostTrip"><h6><b>Post Trip</b></h6></Link></a></li>
                                        <li className="nav-item nav-btn"><a><Link className="nav-link btn btn-white btn-white-outline mbr-editable-menu-item" to = "/logout">logout</Link></a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </nav>
                    </section>
                        <section className="mbr-section  mbr-section-full header2 mbr-parallax-background" id="header2-1" style={{ backgroundImage:`url(${img1})` }}>
                            <div className="cont">
                            <div className="col-md-12 ">
                            <div style={{marginTop:"4em"}}></div>
                            <p className="title " style={{width: "96rem"}}><b>Numan Sinan</b></p>
                                    <div className="card" style={{width: "96rem"}}>
                                            <div className="row">
                                                    <div className="col-md-12" style={{marginBottom:"2em"}}>
                                                        <div className="col-md-3 frame"><a><Link target="iframe_a" to = "/profil">Profile</Link></a></div>
                                                        <div className="col-md-3 frame"><a><Link target="iframe_a" to = "/trips">Trips</Link></a></div>
                                                        <div className="col-md-3 frame"><a><Link target="iframe_a" to = "/comments">Comments</Link></a></div>
                                                        <div className="col-md-3 frame"><a><Link target="iframe_a" to = "/settings">Settings</Link></a></div>
                                                    </div>
                                                    <div className="col-md-12">
                                                    <iframe height="800px" width="100%" src="/profil" name="iframe_a">
                                                    </iframe>
                                                    </div>
                                            </div>
                                    </div>
                                </div>
                        </div>
                    </section>
                </div>
            </YpuProvider>
        )
    }
}
