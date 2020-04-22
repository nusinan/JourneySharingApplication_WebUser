import React, { Component } from 'react'
import { YpuProvider } from '../../context';
import {BrowserRouter as Router,Link,Redirect} from "react-router-dom";


import profile from '../../assets/images/profill.jpg';

export default class Settings extends Component {
    render() {
        return (
           <YpuProvider>
                <section>
                    <div className="col-md-12 ph" ></div>
                    <div className="col-md-12 phf" ><b>Settings</b></div>
                        <div className="col-md-2" >
                        </div>
                        <div className="col-md-8" >
                                <div className="col-md-12" >
                                    <div className="col-md-5" >
                                            <img src={profile} style={{width: '150px',height:'150px'}} className="card-img-top" alt="..."/>
                                    </div>
                                    <div className="col-md-7" >
                                        <div className="input-group mb-3">
                                        <form>
                                                <input type="file" className="form-control" placeholder="Recipient's username"  aria-describedby="basic-addon2"/>
                                                <div className="input-group-append">
                                                <button type="submit" className="pbutton mt-4  btn-custom text-uppercase">Update</button>
                                                </div>
                                        </form> 
                                        </div> 
                                    </div>
                                </div>
                                <div className="col-md-12 mtop" >
                                    <div className="col-md-5" >
                                            <h5 className="ptext"><b>Name : </b><label className="pc"><b>Numan</b></label></h5>
                                    </div>
                                    <div className="col-md-7" >
                                    <form>
                                            <input type="text" className="form-control" placeholder="Name" aria-label="Recipient's username" aria-describedby="basic-addon2"/>
                                            <div className="input-group-append">
                                            <button type="submit" className="pbutton mt-4  btn-custom text-uppercase">Update</button>
                                            </div>
                                    </form>
                                    </div>
                                   
                                </div>
                                <div className="col-md-12 mtop"  >
                                        <div className="col-md-5" >
                                                <h5 className="ptext"><b>Surname : </b><label class="pc"> <b>Sinan</b></label> </h5>
                                        </div>
                                        <div className="col-md-7" >
                                        <form>
                                                <input type="text" className="form-control" placeholder="Surname" aria-label="Recipient's username" aria-describedby="basic-addon2"/>
                                                <div className="input-group-append">
                                                <button type="submit" className="pbutton mt-4  btn-custom text-uppercase">Update</button>
                                                </div>
                                        </form> 
                                        </div>
                                </div>
                                <div className="col-md-12 mtop"  >
                                        <div className="col-md-5" >
                                                <h5 className="ptext"><b>Addition: </b><label class="pc"> <b>Software Engineering</b></label> </h5>
                                        </div>
                                        <div className="col-md-7" >
                                        <form>
                                                <input type="text" className="form-control" placeholder="Addition" aria-label="Recipient's username" aria-describedby="basic-addon2"/>
                                                <div className="input-group-append">
                                                <button type="submit" className="pbutton mt-4  btn-custom text-uppercase">Update</button>
                                                </div>
                                        </form> 
                                        </div>
                                </div>
                                <div className="col-md-12 mtop"  >
                                        <div className="col-md-5" >
                                        <h5 className="ptexte"><b>E-Mail Adress : </b><label class="pc"><b>numansinan00@gmail.com</b></label></h5>
                                        </div>
                                        <div className="col-md-7" >
                                        <form>
                                                <input type="email" className="form-control" placeholder="example@example.com" aria-label="Recipient's username" aria-describedby="basic-addon2"/>
                                                <div className="input-group-append">
                                                <button type="submit" className="pbutton mt-4  btn-custom text-uppercase">Update</button>
                                                </div>
                                        </form> 
                                        </div>
                                </div>
                                <div className="col-md-12 mtop"  >
                                        <div className="col-md-5" >
                                                <h5 className="ptext"><b>Phone Number :</b><label class="pc"><b>05530892463</b></label></h5>
                                                
                                        </div>
                                        <div className="col-md-7" >
                                        <form>
                                                <input type="tel" className="form-control" placeholder="Phone Number" aria-label="Recipient's username" aria-describedby="basic-addon2"/>
                                                <div className="input-group-append">
                                                <button type="submit" className="pbutton mt-4  btn-custom text-uppercase">Update</button>
                                                </div>
                                        </form> 
                                        </div>
                                </div>
                                <div className="col-md-12 mtop"  >
                                        <div className="col-md-5" >
                                                <h5 className="ptext"><b>Birthday :</b><label class="pc"> <b>08.09.1997</b></label></h5> 
                                        </div>
                                        <div className="col-md-7" >
                                        <form>
                                                <input type="date" class="form-control" placeholder="Phone Number" aria-label="Recipient's username" aria-describedby="basic-addon2"/>
                                                <div className="input-group-append">
                                                <button type="submit" className="pbutton mt-4  btn-custom text-uppercase">Update</button>
                                                </div>
                                        </form> 
                                        </div>
                                </div>
                                <div className="col-md-12 mtop"  >
                                        <div className="col-md-6" >
                                        <h5 className="ptext"><b>Social Media Accounts </b></h5> 
                                        </div>
                                        <div className="col-md-6" >
                                        </div>
                                </div>
                                <div className="col-md-12 mtop"  >
                                        <div className="col-md-5" >
                                        <h5 className="ptext"><b>Facebook Account  </b><label class="pc"> <b>www.facebook.com</b>  </label></h5> 
                                        </div>
                                        <div className="col-md-7" >
                                        <form>
                                                <input type="text" className="form-control" placeholder="Facebook Account" aria-label="Recipient's username" aria-describedby="basic-addon2"/>
                                                <div className="input-group-append">
                                                <button type="submit" className="pbutton mt-4  btn-custom text-uppercase">Update</button>
                                                </div>
                                        </form> 
                                        </div>
                                </div>
                                <div className="col-md-12 mtop"  >
                                        <div className="col-md-5" >
                                        <h5 className="ptext"><b>Instagram Account  </b><label class="pc"><b>numan_sinan</b></label></h5> 
                                        </div>
                                        <div className="col-md-7" >
                                        <form>
                                                <input type="text" class="form-control" placeholder="Instagram Account" aria-label="Recipient's username" aria-describedby="basic-addon2"/>
                                                <div className="input-group-append">
                                                <button type="submit" className="pbutton mt-4  btn-custom text-uppercase">Update</button>
                                                </div>
                                        </form>       
                                        </div>
                                </div>
                        </div>
                        <div classNames="col-md-2" >
                        </div>
                </section>
           </YpuProvider>
        )
    }
}
