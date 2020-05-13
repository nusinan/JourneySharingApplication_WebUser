import React, { Component } from 'react'
import { YpuProvider } from '../context';
import {BrowserRouter as Router,Link,Redirect} from "react-router-dom";
import img1 from '../assets/images/f-mwo-dznni-averie-woodard-2000x2000.jpg';
import img2 from '../assets/images/mbr-2000x1333.png';
import dlFront from '../assets/images/dl-front.png';
import dlBack from '../assets/images/dl-back.png';
import filedl from '../assets/images/filedl.jpg';
export default class Confirmation extends Component {
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
                                                            <div className="col-md-12 phf" ><b>Confirmation</b></div>
                                                        <div className="col-md-2" >
                                                        </div>
                                                        <div className="col-md-8" >
                                                                <div className="col-md-12" >
                                                                <form onSubmit={this.imgSubmit} >
                                                                <div className="col-md-5" >
                                                                    <div className="col-md-12" >
                                                                        <img src={dlFront} style={{width: '320px',height:'220px'}} className="card-img-top" alt="..."/>
                                                                    </div>
                                                                    <div className="col-md-12 mtop" >
                                                                    </div>
                                                                    <div className="col-md-12" >
                                                                        <img src={dlBack} style={{width: '320px',height:'220px'}} className="card-img-top" alt="..."/>
                                                                    </div>
                                                                    <div className="col-md-12 mtop" >
                                                                    </div>
                                                                    <div className="col-md-12" style={{marginTop:"80px"}}  >
                                                                        <img src={filedl} style={{width: '280px',height:'280px'}} className="card-img-top" alt="..."/>
                                                                    </div>
                                                                </div>
                                                                <div className="col-md-7" >
                                                                <div className="col-md-12 mtop" >
                                                                    </div>
                                                                    <div className="col-md-12 " style={{marginTop:"40px"}}  >
                                                                        <input type="file" className="form-control" placeholder="Update Photo" name="img"   aria-describedby="basic-addon2" value={this.state.img} onChange={this.handleChange}/>
                                                                    </div>
                                                                   
                                                                    <div className="col-md-12" style={{marginTop:"200px"}} >
                                                                        <input type="file" className="form-control" placeholder="Update Photo" name="img"   aria-describedby="basic-addon2" value={this.state.img} onChange={this.handleChange}/>
                                                                    </div>
                                                                    <div className="col-md-12 ph" style={{marginTop:"160px"}} ><h6><b>Yada belge yükleyin öğrenci gazi engelli belgesi</b></h6> </div>
                                                                    <div className="input-group-append">
                                                                    <div className="col-md-12"style={{marginTop:"80px"}} >
                                                                        <input type="file" className="form-control" placeholder="Update Photo" name="img"   aria-describedby="basic-addon2" value={this.state.img} onChange={this.handleChange}/>
                                                                        <div className="col-md-12 ph" style={{marginTop:"40px"}} ><h6><b>Gönderilecek Belgenin Türünü seçiniz</b></h6> </div>
                                                                        <div className="col-md-12 " >
                                                                        <div className="col-md-4 ">
                                                                            <input type="radio" className="form-check-input " name="doc"  value ="student"  onChange={this.checkBoxChange} id="remember"/>
                                                                            <label className="form-label mbr-section-text "   htmlFor="remember">Öğrenci</label>
                                                                        </div>
                                                                        <div className="col-md-4 ">
                                                                            <input type="radio" className="form-check-input " name="doc"  value ="ghazi"  onChange={this.checkBoxChange} id="remember"/>
                                                                            <label className="form-label mbr-section-text "   htmlFor="remember">Gazi</label>
                                                                        </div>
                                                                        <div className="col-md-4">
                                                                            <input type="radio" className="form-check-input " name="doc"  value ="disabled"  onChange={this.checkBoxChange} id="remember"/>
                                                                            <label className="form-label mbr-section-text "   htmlFor="remember">Engelli</label>
                                                                        </div>
                                                                        </div>
                                                                    </div>
                                                                    <div className="col-md-12 mtop" ></div>
                                                                    <div className="col-md-12 mtop" ></div>
                                                                    <div ><label className=" er inputErr ">{this.state.imgError}</label></div>
                                                                    </div>
                                                                    <div className="col-md-12 mtop" ><button type="submit" className="pbutton mt-4  btn-custom text-uppercase">Gönder</button></div>
                                                                    <div className="col-md-12 " style={{marginBottom:"160px"}} >
                                                                    </div>
                                                                </div>
                                                                </form>
                                                                </div>
                                                        </div>
                                                        <div className="col-md-2" >
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
