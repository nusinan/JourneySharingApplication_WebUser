import React, { Component } from 'react'
import {YpuProvider} from '../context';
import img1 from '../assets/images/f-mwo-dznni-averie-woodard-2000x2000.jpg';
import img2 from '../assets/images/mbr-2000x1333.png';
import {BrowserRouter as Router,Link,Redirect} from "react-router-dom";

export default class SearchTrip extends Component {
    render() {
        return (
            <YpuProvider>
                <div id="menu-0" custom-code="true">
                    <section>
                        <nav className="navbar navbar-dropdown bg-color transparent navbar-fixed-top">
                            <div className="container">
                                <div className="mbr-table">
                                    <div className="mbr-table-cell">
                                    </div>
                                    <div className="mbr-table-cell">
                                    <ul className="nav-dropdown collapse pull-xs-right nav navbar-nav navbar-toggleable-sm" id="exCollapsingNavbar">
                                        <li className="nav-item"><a ><Link className="nav-link link mbr-editable-menu-item" to = "/"><h6><b>HomePage</b></h6></Link></a></li>
                                        <li className="nav-item"><a ><Link className="nav-link link mbr-editable-menu-item" to = "/searchTrip"><h6><b>Search Trip</b></h6></Link></a></li>
                                        <li className="nav-item"><a ><Link className="nav-link link mbr-editable-menu-item" to = "/PostTrip"><h6><b>Post Trip</b></h6></Link></a></li>
                                        <li className="nav-item nav-btn"><a><Link className="nav-link btn btn-white btn-white-outline mbr-editable-menu-item" to = "/login">login</Link></a></li>
                                        <li className="nav-item nav-btn"><a><Link className="nav-link btn btn-white btn-white-outline mbr-editable-menu-item" to = "/login">Register</Link></a></li>
                                        </ul>
                                        
                                    </div>
                                </div>
                            </div>
                        </nav>
                    </section>
                    <section className="mbr-section mbr-section-hero mbr-section-full header2 mbr-parallax-background mbr-after-navbar"  id="header2-1" style={{ backgroundImage:`url(${img1})` }}>

                    <div className="mbr-overlay" style={{opacity: 0.2, backgroundcolor:'rgb(71, 85, 119)'}}>
                    </div>

                        <div className="mbr-table mbr-table-full">
                            <div className="mbr-table-cell">

                                <div className="container">
                                
                                    <div className="mbr-section row">
                                    <h4 className=" display-3 "  style={{ color:'rgb(71, 85, 119)'}}> NEREYE GİTMEK İSTİYORSUNUZ </h4>
                                    
                                    <h4 className="mbr-section-title display-3"> YOLCULUK ARA </h4>
                                    <div className="col-md-12 order-md-1">
                                        <h4 className="mb-3 mbr-section-text input-group-append" >Bulunduğunuz Konumunuzu Seçiniz</h4>
                                        <label for="address2"><span className="text-muted"></span></label>
                                        <form className="needs-validation" novalidate>
                                        
                                        <div className="mb-3">
                                            
                                            <input type="email" className="form-control" id="email" placeholder="Istanbul/Türkiye"/>
                                            <div className="invalid-feedback mbr-section-text" >
                                            
                                            </div>
                                        </div>
                            
                                        <div className="mb-3">
                                                <label for="address2"><span className="text-muted"></span></label>
                                                <h4 className="mb-3 mbr-section-text input-group-append">Gitmek istediğiniz Konum </h4>
                                            <input type="text" className="form-control" placeholder="Nereye Gitmek istiyorsunuz" aria-label="Recipient's username" aria-describedby="basic-addon2"/>
                                            <div className="invalid-feedback mbr-section-text">
                                            
                                            </div>
                                        </div>
                                            
                                        <div className="mb-3">
                                        </div>
                                        <div className="input-group-append ">
                                            <button type="submit" className="button mt-4  btn-custom text-uppercase">Yolculuk Ara</button>
                                            </div>
                                        </form>
                                    </div>
                                        </div>
                                        <div className="mbr-section-text">
                                                <p>Yolculuk paylaşım uygulaması ile  gitmek istediğiniz yere gitmekte olan araçlarla birlikte gidin&nbsp;</p>
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
