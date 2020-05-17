import React, { Component } from 'react'
import { YpuProvider } from '../context';
import {BrowserRouter as Router,Link,Redirect} from "react-router-dom";
import img1 from '../assets/images/f-mwo-dznni-averie-woodard-2000x2000.jpg';
import img2 from '../assets/images/mbr-2000x1333.png';
import profile from '../assets/images/profill.jpg';
export default class Profile extends Component {
 
    constructor(props) {
        super(props);
       this.state={
           name:"Numan",
           surname:"Sinan",
           emailAddress:"example@example.com",
           birthday:"08.09.1997",
           phone:5530892463,
       }
      }
      componentDidMount() {
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
                           emailAddress:json.emailAddress,
                           birthday:json.birthday,
                           phone:json.phoneNumber,
                })
        })
        
      }
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
                        <section className="mbr-section  mbr-section-full header2 mbr-parallax-background" id="header2-1" style={{ backgroundImage:`url(${img1})`}}>
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
                                                    <section>
                                                            <div className="col-md-12 ph"></div>
                                                            <div className="col-md-12 phf" ><b>Profile</b></div>
                                                                <div className="col-md-3" >
                                                                    <div style={{width: "20rem"}}>
                                                                        <img src={profile} style={{marginLeft: "36px", marginTop: "20px",width:"320px",}} className="card-img-top" alt="..."/>
                                                                        <div className="col-md-12 ph"></div>
                                                                        <div className="col-md-12 ph"></div>
                                                                        <div className="col-md-12 ph"></div>
                                                                        <div className="col-md-12 ph"></div>
                                                                        <div className="col-md-12 ph"></div>
                                                                        <div className="col-md-12 ph"></div>
                                                                        <div className="col-md-12 ph"></div>
                                                                        <div className="col-md-12 ph"></div>
                                                                        <div className="col-md-12 ph"></div>
                                                                        <div className="col-md-12 ph"></div>
                                                                    </div>
                                                                </div>
                                                                <div class="col-md-9" >
                                                                <div>
                                                                    <div class="col-md-4" >
                                                                    <hr/> 
                                                                    <h5><b>Name : </b><label className="pc"><b>{this.state.name}</b></label></h5>
                                                                    <hr/>
                                                                    <h5><b>Status : </b><label className="pc"><b>belirtilmedi</b></label></h5>  
                                                                    <hr/>
                                                                    </div>
                                                                    <div class="col-md-4" >
                                                                    <hr/>
                                                                    <h5><b>Surname : </b><label className="pc"><b>{this.state.surname}</b></label></h5>
                                                                    <hr/>
                                                                    <h5><b>Phone : </b><label className="pc"><b>{this.state.phone}</b></label></h5>    
                                                                    <hr/> 
                                                                    </div>
                                                                    <div class="col-md-4" >
                                                                    <hr/>
                                                                    <h5><b>Birthday : </b><label className="pc"><b>{this.state.birthday}</b></label></h5>  
                                                                    <hr/>
                                                                    <h5><b>E-Mail : </b><label className="pc" ><b>{this.state.emailAddress}</b></label></h5>
                                                                    
                                                                    <hr/>   
                                                                    </div>
                                                                </div>
                                                                <div>
                                                                    <div  style={{marginTop: "142px"}}>
                                                                        <div >
                                                                        <p class="card-text pc" style={{padding:"20px"}}>
                                                                        <h5 style={{color:"black"}}><b>Addition : </b></h5>
                                                                            <p style={{padding:"24px"}}>
                                                                            A biography is simply an account of someone’s life written by another person. A biography can be short in the case of few sentences biography, and it can also be long enough to fill an entire book. The short biographies explain a person’s basic life facts and their importance, but the long biographies would go an extra mile and include more details to make an interesting read. You may find yourself in a situation which requires you to write a biography of a famous person, a close friend or a relative.
                                                                            </p>
                                                                        </p>
                                                                            <h5><b>Şoförlük için Hesap Onay Durumu </b><label className="pk"><b>:  Onaylanmamış</b></label></h5>
                                                                            <label className="pc"><b> Hesabı Onaylamak için <a href="#" ><strong><Link style={{color:'red'}} to = "/confirmation">buraya tıklayınız</Link></strong></a></b></label>  
                                                                            
                                                                        </div>    
                                                                    </div>
                                                                </div>    
                                                                </div>
                                                        </section>
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
