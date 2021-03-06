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
                                    <ul className="nav-dropdown collapse pull-xs-right nav navbar-nav navbar-toggleable-sm" id="exCollapsingNavbar">
                                        <li className="nav-item"><a ><Link className="nav-link link mbr-editable-menu-item" to = "/"><h6><b>HomePage</b></h6></Link></a></li>
                                        <li className="nav-item"><a ><Link className="nav-link link mbr-editable-menu-item" to = "/searchTrip"><h6><b>SearchTrip</b></h6></Link></a></li>
                                        <li className="nav-item"><a ><Link className="nav-link link mbr-editable-menu-item" to = "/PostTrip"><h6><b>PostTrip</b></h6></Link></a></li>
                                        <li className="nav-item nav-btn"><a><Link className="nav-link btn btn-white btn-white-outline mbr-editable-menu-item" to = "/profile">Profile</Link></a></li>
                                        <li className="nav-item nav-btn"><a ><Link className="nav-link btn btn-white btn-white-outline mbr-editable-menu-item" to = "/logout">logout</Link></a></li>
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
                                            
                                            <h4 className="mbr-section-title display-3"> YOLCULUK İLANI VER </h4>
                                            <p class="lead mbr-section-text input-group-append ">Below is an example form built entirely with Bootstrap's form controls. Each required form group has a validation state that can be triggered by attempting to submit the form without completing it.</p>
                       
                                            <div class="col-md-8 order-md-1 ">
                                            
                                                <h4 class="mb-3 mbr-section-text input-group-append  ">konumunuzu seçiniz</h4>
                                                
                                                <form class="needs-validation" novalidate>
                                                
                                                <div class="mb-3">
                                                    <input type="email" class="form-control" id="email" placeholder="Istanbul/Türkiye"/>
                                                    <div class="invalid-feedback mbr-section-text" >
                                                    
                                                    </div>
                                                </div>
                                    
                                                <div class="mb-3">
                                                        <h4 class="mb-3 mbr-section-text input-group-append ">Gitmek istediğiniz Konum </h4>
                                                    <input type="text" class="form-control " id="address" placeholder="Beykent üniversitesi/Ayazağa" required/>
                                                    <div class="invalid-feedback mbr-section-text">
                                                    
                                                    </div>
                                                </div>
                                                <div class="mb-3">
                                                        <h4 class="mb-3 mbr-section-text input-group-append ">Saat belirt</h4>
                                                    <input type="time" class="form-control " id="address"  placeholder="14:30" required/>
                                                    <div class="invalid-feedback mbr-section-text">
                                                    </div>
                                                </div>
                                                <div class="mb-3 " >
                                                        <h4 class="mb-3 mbr-section-text input-group-append ">Yolculk Ve Araç Hakkında Açıklama </h4>
                                                    <textarea class="form-control rounded-0" id="exampleFormControlTextarea2" placeholder="Araç 2018 bmw i3 tür 3 kişilik yerim var evcil hayvan almıyorum" rows="3"></textarea>
                                                    <div class="invalid-feedback mbr-section-text">
                                                    </div>
                                                </div>
                                                <div class="mb-3">
                                                    
                                                </div>
                                                <div className="input-group-append ">
                                                <button type="submit" className="button mt-4  btn-custom text-uppercase">Yolculuk İLANI VER</button>
                                                </div>
                                                </form>
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
