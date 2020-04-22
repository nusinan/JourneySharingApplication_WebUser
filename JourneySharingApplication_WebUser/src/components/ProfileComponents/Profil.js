import React, { Component } from 'react'
import { YpuProvider } from '../../context';
import {BrowserRouter as Router,Link,Redirect} from "react-router-dom";
import profile from '../../assets/images/profill.jpg';

export default class Profil extends Component {
    render() {
        return (
           <YpuProvider>
                <section>
                    <div className="col-md-12 ph"></div>
                    <div className="col-md-12 phf" ><b>Profile</b></div>
                        <div className="col-md-3" >
                            <div style={{width: "20rem"}}>
                                <img src={profile} style={{marginLeft: "36px", marginTop: "20px"}} className="card-img-top" alt="..."/>
                                <hr className="hrc"/>
                                <h5 className="pi"><b>Name : </b><label className="pc"><b>Numan</b></label></h5>
                                <hr className="hrc"/>
                                <h5 className="pi"><b>Surname : </b><label className="pc"><b>Sinan</b></label></h5>
                                <hr className="hrc"/>
                                <h5 className="pi"><b>Yaş : </b><label className="pc"><b>22</b></label></h5>
                                <hr className="hrc"/>
                                <h5 className="pi"><b>Konum : </b><label className="pc"><b>Istanbul</b></label></h5>
                                <hr className="hrc"/>
                                <h5 className="pi"><b>Addition : </b><label className="pc"><b>Software Engineering</b></label></h5>
                                <hr className="hrc"/>
                                <h5 className="pi"><b>E-Mail : </b><label className="pc"><b>numansinan00@gmail.com</b></label></h5>
                                <hr className="hrc"/>
                                <h5 className="pi"><b>Phone : </b><label className="pc"><b>05530892463</b></label></h5>
                            </div>
                        </div>
                        <div class="col-md-9" >
                                <div class="card">
                                    <div class="card-body">
                                    <h5 class="card-title" style={{padding: "20px"}}><b>Bio</b></h5>
                                    <p class="card-text"style={{padding:"20px",color:"slategray"}}>
                                        With supporting text below as a natural lead-in to additional content.
                                        With supporting text below as a natural lead-in to additional content.
                                        With supporting text below as a natural lead-in to additional content.
                                        With supporting text below as a natural lead-in to additional content.
                                        With supporting text below as a natural lead-in to additional content.
                                        With supporting text below as a natural lead-in to additional content.
                                        With supporting text below as a natural lead-in to additional content.
                                        With supporting text below as a natural lead-in to additional content.
                                        With supporting text below as a natural lead-in to additional content.
                                        With supporting text below as a natural lead-in to additional content.
                                        With supporting text below as a natural lead-in to additional content.
                                        With supporting text below as a natural lead-in to additional content.
                                        With supporting text below as a natural lead-in to additional content.
                                        With supporting text below as a natural lead-in to additional content.
                                        With supporting text below as a natural lead-in to additional content.
                                        With supporting text below as a natural lead-in to additional content.
                                        With supporting text below as a natural lead-in to additional content.
                                        With supporting text below as a natural lead-in to additional content.
                                        </p>
                                    </div>
                                    
                                </div>
                        </div>
                </section>
           </YpuProvider>
        )
    }
}
