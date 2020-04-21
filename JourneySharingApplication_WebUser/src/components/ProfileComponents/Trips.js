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
                                    <div class="kart">
                                        <div className="col-md-3">
                                                <img src={profile} className="card-img-top" style={{marginTop: "30px"}}/>
                                        </div>
                                            <div className="col-md-9">
                                                    <div className="card w-90">
                                                        <div className="card-body">
                                                            <h5 className="card-title "><b>Travelled Person</b> <label className="pc"> Numan Sinan</label>  </h5>
                                                            <h5 className="card-title "><b>Where : </b> <label className="pc">Kütahya</label>  </h5>
                                                            <h5 className="card-title "><b>to : </b> <label className="pc"> Istanbul</label>  </h5>
                                                            <h5 className="card-title "><b>E-Mail : </b> <label className="pc">numansinan00@gmail.com</label>  </h5>
                                                            <h5 className="card-title "><b>Phone : </b> <label className="pc">05530892463</label>  </h5>
                                                            <h5 className="card-title "><b>Travel  Date : </b> <label className="pc">01.01.2020</label>  </h5>
                                                        </div>  
                                                    </div>
                                            </div>
                                    </div>
                                    <div class="kart">
                                        <div className="col-md-3">
                                                <img src={profile} className="card-img-top" style={{marginTop: "30px"}}/>
                                        </div>
                                            <div className="col-md-9">
                                                    <div className="card w-90">
                                                        <div className="card-body">
                                                            <h5 className="card-title "><b>Travelled Person</b> <label className="pc"> Numan Sinan</label>  </h5>
                                                            <h5 className="card-title "><b>Where : </b> <label className="pc">Kütahya</label>  </h5>
                                                            <h5 className="card-title "><b>to : </b> <label className="pc"> Istanbul</label>  </h5>
                                                            <h5 className="card-title "><b>E-Mail : </b> <label className="pc">numansinan00@gmail.com</label>  </h5>
                                                            <h5 className="card-title "><b>Phone : </b> <label className="pc">05530892463</label>  </h5>
                                                            <h5 className="card-title "><b>Travel  Date : </b> <label className="pc">01.01.2020</label>  </h5>
                                                        </div>  
                                                    </div>
                                            </div>
                                    </div>
                                    <div class="kart">
                                        <div className="col-md-3">
                                                <img src={profile} className="card-img-top" style={{marginTop: "30px"}}/>
                                        </div>
                                            <div className="col-md-9">
                                                    <div className="card w-90">
                                                        <div className="card-body">
                                                            <h5 className="card-title "><b>Travelled Person</b> <label className="pc"> Numan Sinan</label>  </h5>
                                                            <h5 className="card-title "><b>Where : </b> <label className="pc">Kütahya</label>  </h5>
                                                            <h5 className="card-title "><b>to : </b> <label className="pc"> Istanbul</label>  </h5>
                                                            <h5 className="card-title "><b>E-Mail : </b> <label className="pc">numansinan00@gmail.com</label>  </h5>
                                                            <h5 className="card-title "><b>Phone : </b> <label className="pc">05530892463</label>  </h5>
                                                            <h5 className="card-title "><b>Travel  Date : </b> <label className="pc">01.01.2020</label>  </h5>
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
