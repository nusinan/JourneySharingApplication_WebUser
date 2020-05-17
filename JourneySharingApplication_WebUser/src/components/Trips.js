import React, { Component } from 'react'
import { YpuProvider } from '../context';
import {BrowserRouter as Router,Link,Redirect} from "react-router-dom";
import img1 from '../assets/images/f-mwo-dznni-averie-woodard-2000x2000.jpg';
import img2 from '../assets/images/mbr-2000x1333.png';
import profile from '../assets/images/profill.jpg';
export default class Trips extends Component {
    constructor(props) {
        super(props);
        this.state={
           name:"Numan",
           surname:"Sinan",
        }
    }
    componentDidMount(){
    fetch('http://25.109.92.209:8081/user/me',{
        method: 'GET',
        headers: {
        "Content-type": "application/json; charset=UTF-8",
        "Accept-Language":"en",
        "Authorization":"Bearer "+localStorage.getItem('jwt')
        }
    })
    .then(response => response.json())
    .then(json => {
        console.log(json);
        this.setState({name:json.name,
                       surname:json.surname,
                    })
    })
}
render(){   
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
                        <p className="title " style={{width: "96rem"}}><b>{this.state.name} {this.state.surname}</b></p>
                                <div className="card" style={{width: "96rem"}}>
                                        <div className="row">
                                            <div className="col-md-12" style={{marginBottom:"2em"}}>
                                            <div className="col-md-3 frame"><a><Link  to = "/profile">Profile</Link></a></div>
                                            <div className="col-md-3 frame"><a><Link  to = "/trips">Trips</Link></a></div>
                                            <div className="col-md-3 frame"><a><Link  to = "/comments">Comments</Link></a></div>
                                            <div className="col-md-3 frame"><a><Link  to = "/settings">Settings</Link></a></div>
                                        </div>
                                                <div className="col-md-12">
                                                <div id="menu-0" custom-code="true">
                                                    <section>
                                                        <div className="col-md-12 ph" ></div>
                                                        <div className="col-md-12 phf"><b>Trips</b></div>
                                                        <div className="col-md-12">
                                                                <div className="col-md-2">
                                                                </div>
                                                                <div className="col-md-8">
                                                                    <div class="kart">
                                                                        <div className="col-md-3">
                                                                                <img src="assets/images/fcuj-bvjrrs-alicja-koczaska-160x160.jpg" className="card-img-top" style={{marginTop: "30px"}}/>
                                                                        </div>
                                                                            <div className="col-md-9">
                                                                                    <div className="card w-90">
                                                                                        <div className="card-body">
                                                                                            <h5 className="card-title "><b>Travelled Person</b> <label className="pc"> Ozan Duran</label>  </h5>
                                                                                            <h5 className="card-title "><b>Where : </b> <label className="pc">Ankara</label>  </h5>
                                                                                            <h5 className="card-title "><b>to : </b> <label className="pc"> Istanbul</label>  </h5>
                                                                                            <h5 className="card-title "><b>E-Mail : </b> <label className="pc">example@example.com</label>  </h5>
                                                                                            <h5 className="card-title "><b>Phone : </b> <label className="pc">555 555 55 55</label>  </h5>
                                                                                            <h5 className="card-title "><b>Travel  Date : </b> <label className="pc">01.01.2020</label>  </h5>
                                                                                        </div>  
                                                                                    </div>
                                                                            </div>
                                                                    </div>
                                                                    <div class="kart">
                                                                        <div className="col-md-3">
                                                                                <img src="assets/images/fqkbxo2nkq0-sticker-mule-160x160.png" className="card-img-top" style={{marginTop: "30px"}}/>
                                                                        </div>
                                                                            <div className="col-md-9">
                                                                                    <div className="card w-90">
                                                                                        <div className="card-body">
                                                                                            <h5 className="card-title "><b>Travelled Person</b> <label className="pc"> Anna Watson</label>  </h5>
                                                                                            <h5 className="card-title "><b>Where : </b> <label className="pc">İzmir</label>  </h5>
                                                                                            <h5 className="card-title "><b>to : </b> <label className="pc"> Antalya</label>  </h5>
                                                                                            <h5 className="card-title "><b>E-Mail : </b> <label className="pc">example@example.com</label>  </h5>
                                                                                            <h5 className="card-title "><b>Phone : </b> <label className="pc">555 555 55 55</label>  </h5>
                                                                                            <h5 className="card-title "><b>Travel  Date : </b> <label className="pc">04.02.2020</label>  </h5>
                                                                                        </div>  
                                                                                    </div>
                                                                            </div>
                                                                    </div>
                                                                    <div class="kart">
                                                                        <div className="col-md-3">
                                                                                <img src="assets/images/hasan.png" className="card-img-top" style={{marginTop: "30px"}}/>
                                                                        </div>
                                                                            <div className="col-md-9">
                                                                                    <div className="card w-90">
                                                                                        <div className="card-body">
                                                                                            <h5 className="card-title "><b>Travelled Person</b> <label className="pc"> Hasan Hüseyin Güneş</label>  </h5>
                                                                                            <h5 className="card-title "><b>Where : </b> <label className="pc">İstanbul</label>  </h5>
                                                                                            <h5 className="card-title "><b>to : </b> <label className="pc">Tunceli</label>  </h5>
                                                                                            <h5 className="card-title "><b>E-Mail : </b> <label className="pc">example@example.com</label>  </h5>
                                                                                            <h5 className="card-title "><b>Phone : </b> <label className="pc">555 555 55 55</label>  </h5>
                                                                                            <h5 className="card-title "><b>Travel  Date : </b> <label className="pc">09.06.2020</label>  </h5>
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
                                                </div>
                                        </div>
                                </div>
                            </div>
                    </div>
                </section>
            </div>
        </YpuProvider>
    )}
}
