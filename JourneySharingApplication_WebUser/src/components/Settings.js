import React, { Component } from 'react'
import { YpuProvider } from '../context';
import {BrowserRouter as Router,Link,Redirect} from "react-router-dom";
import profile from '../assets/images/profill.jpg';
import img1 from '../assets/images/f-mwo-dznni-averie-woodard-2000x2000.jpg';
const initialState ={
        imgError:"",
        nameError:"",
        surnameError:"",
        additionError:"",
        emailError:"",
        dateError:"",
        phoneNumberError:"",
}
export default class Settings extends Component {
        fileSelectedHandler=event=>{
                console.log(event);
        }
        onChange =(e)=>{
                let files = e.target.files;
                console.log(e);
             }
        constructor(props){
                super(props)
        }
        state ={
                initialState,
                name:"Numan",
                surname:"Sinan",
                img:"",
                addition:"",
                emailAddress:"",
                biography:"",
                phoneNumber:"",
                facebook:"",
                instagram:"",
                whatsapp:"",
                telegram:"",
                wechat:"",
                vKontakte:"",
                twitter:"",
                update:"",
                err:"",
                password:"",
                birthday:"",
                gender:"",
                date:"",
        }
        handleChange = event =>{
        const isCheckbox = event.target.type === "checkbox";
        this.setState({
                [event.target.name]:isCheckbox
                ?event.target.checked
                :event.target.value,
        })
        };
        profileUpdate=()=>{
        fetch('http://25.109.92.209:8081/user/updateProfile',{
                method: 'PATCH',
                body: JSON.stringify({
                        additions: null,
                        biography: this.state.biography,
                        birthday: this.state.birthday,
                        discountTypeFk: null,
                        emailAddress: this.state.emailAddress,
                        gender: true,
                        id: "5f42ecc1-2fe9-4018-bffa-98f2fb4bf0d7",
                        isActive: true,
                        joinDate: "2020-03-31 14:40:11.627 +0000",
                        name: this.state.name,
                        password: "$2a$10$urWX2Ra8De5VdAPwbyY0xOVqpztCPpy/dwPzEqYXLAocw2xKT4.Cm",
                        profilePicture: "",
                        roleFk: {id: 2, name: "User", isActive: true},
                        socialMediaFk: null,
                        surname: this.state.surname,
                }),
                headers: {
                "Content-type": "application/json; charset=UTF-8",
                "Accept-Language":"en",
                "Authorization":"Bearer "+localStorage.getItem('jwt')
                }
                })
                .then(response => response.json())
                .then(json => {console.log(json)})
        }
        componentDidMount(){
        fetch('http://25.109.92.209:8081/user/me',{
                method: 'GET',
                headers: {
                "Content-type": "application/json; charset=UTF-8",
                "Accept-Language":"tr",
                "Authorization":"Bearer "+localStorage.getItem('jwt')
                }
        })
        .then(response => response.json())
        .then(json => {
                console.log(json);
                this.setState({
                name:json.name,
                surname:json.surname,
                emailAddress:json.emailAddress,
                date:json.birthday,
                password:json.password,
                birthday:json.birthday,
                gender:json.gender,
                })
        })}
        imgSubmit = event =>{
                event.preventDefault();
                let imgError = "";
                if(!this.state.img ){
                        imgError ="Lütfen Profil resmi seçiniz";
                        this.setState({imgError});
                }
                else{
                        this.setState(initialState);
                        this.succes("Profile Photo");   
                }
        }
        nameSubmit = event =>{
        event.preventDefault();
        let nameError = "";
        if(!this.state.name ){
                nameError ="Lütfen İsim giriniz";
                this.setState({nameError});
                }
        else{
                this.setState(initialState)
                this.succes("Name"); 
                this.profileUpdate();
                }
        }
                        
        surnameSubmit = event =>{
        event.preventDefault();
        let surnameError = "";
        if(!this.state.surname){
                surnameError ="Lütfen Soyadınızı giriniz";
                this.setState({surnameError});
        }
        else{
                this.setState(initialState);
                this.succes("Surname");
                this.profileUpdate();     
                }
        }
                
                
        biographySubmit = event =>{
                event.preventDefault();
                let additionError = "";
                if(!this.state.biography ){
                        additionError ="Lütfen biyografi kısmını doldurunuz";
                        this.setState({additionError});
                }
                else{
                        this.setState(initialState);
                        this.succes("Biography");
                        this.profileUpdate();     
                }
        }
        emailSubmit = event =>{
                event.preventDefault();
                let emailError = "";
                if(!this.state.email.match(/^([a-z\d\.-]+)@([a-z\d-]+)\.([a-z]{2,8})(\.[a-z]{2,8})?$/)){
                        emailError = 'Lütfen geçerli bir Mail adresi giriniz   example@ypu.com';
                        this.setState({emailError});
                        }
                        else{
                        this.setState(initialState);
                        this.succes("E-Mail");
                        this.profileUpdate();      
                }
        } 
        succes =(name)=>{
                let update="";
                this.state.update=name +" has been updated";
                setTimeout(() => {
                        this.setState({update});
                }, 2000);
        }
        phoneNumberSubmit = event =>{
                event.preventDefault();
                let phoneNumberError = "";
                if(!this.state.phoneNumber.match(/^[+]*[0-9]*[ ]{0,1}[(]{0,1}[ ]{0,1}[0-9]{1,3}[ ]{0,1}[)]{0,1}[ ]{0,1}[0-9]{1,3}[ ]{0,1}[0-9]{2}[ ]{0,1}[0-9]{2}[ ]{0,1}[-\.\/]{0,1}[ ]{0,1}[0-9]{1,5}$/))
                {
                        phoneNumberError ="Lütfen geçerli bir telefon numarası giriniz example 555 555 55 55";
                        this.setState({phoneNumberError});
                }
                else{
                        this.setState(initialState);
                        this.succes("Phone Number");
                        this.profileUpdate();     
                }
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
                                                <div className="col-md-12 ph navbar navbar-dropdown bg-color transparent " >
                                                        <div ><label className=" usucces  tp ">{this.state.update}</label></div>
                                                </div> 
                                                <div className="col-md-12 phf" ><b></b></div>
                                                <div className="col-md-12 phf" ><b>Settings</b></div>
                                                        <div className="col-md-2" >
                                                        </div>
                                                        <div className="col-md-8" >
                                                                <div className="col-md-12" >
                                                                <form onSubmit={this.imgSubmit} >
                                                                <div className="col-md-5" >
                                                                        <img src={profile} style={{width: '150px',height:'150px'}} className="card-img-top" alt="..."/>
                                                                </div>
                                                                <div className="col-md-7" >
                                                                                <input type="file" className="form-control" placeholder="Update Photo" name="img"   aria-describedby="basic-addon2" value={this.state.img} onChange={this.handleChange}/>
                                                                                <div className="input-group-append">
                                                                                <button type="submit" className="pbutton mt-4  btn-custom text-uppercase">Update</button>
                                                                                <div ><label className=" er inputErr ">{this.state.imgError}</label></div>
                                                                                </div>
                                                                </div>
                                                                </form>
                                                                </div>
                                                                <div className="col-md-12 mtop" >
                                                                <form onSubmit={this.nameSubmit} >
                                                                        <div className="col-md-5" >
                                                                                <h5 className="ptext"><b>Name : </b><label className="pc"><b>{this.state.name}</b></label></h5>
                                                                        </div>
                                                                        <div className="col-md-7" >
                                                                                <input type="text" className="form-control" placeholder="Name" name="name" aria-label="Recipient's username" aria-describedby="basic-addon2" value={this.state.name}  onChange={this.handleChange}/>
                                                                                <div className="input-group-append">
                                                                                <button type="submit" className="pbutton mt-4  btn-custom text-uppercase">Update</button>
                                                                                <div ><label className=" er inputErr ">{this.state.nameError}</label></div>
                                                                                </div>
                                                                        </div>
                                                                </form>   
                                                                </div>
                                                                <div className="col-md-12 mtop"  >
                                                                <form onSubmit={this.surnameSubmit}>
                                                                        <div className="col-md-5" >
                                                                                <h5 className="ptext"><b>Surname : </b><label class="pc"> <b>{this.state.surname}</b></label> </h5>
                                                                        </div>
                                                                        <div className="col-md-7" >
                                                                                <input type="text" className="form-control" placeholder="Surname" name="surname" aria-label="Recipient's username" aria-describedby="basic-addon2"onChange={this.handleChange}/>
                                                                                <div className="input-group-append">
                                                                                <button type="submit" className="pbutton mt-4  btn-custom text-uppercase">Update</button>
                                                                                <div ><label className=" er inputErr ">{this.state.surnameError}</label></div>
                                                                                </div>
                                                                        </div>
                                                                </form>         
                                                                </div>
                                                                <div className="col-md-12 mtop"  >
                                                                <form onSubmit={this.biographySubmit}>
                                                                        <div className="col-md-5" >
                                                                                <h5 className="ptext"><b>Biography: </b><label class="pc"> <b></b></label> </h5>
                                                                        </div>
                                                                        <div className="col-md-7" >
                                                                                <textarea name="text" className="form-control" rows="10" cols="63" name="biography" value={this.state.biography} placeholder="Biography" onChange={this.handleChange}></textarea>
                                                                                <div className="input-group-append">
                                                                                <button type="submit" className="pbutton mt-4  btn-custom text-uppercase">Update</button>
                                                                                <div ><label className=" er inputErr ">{this.state.additionError}</label></div>
                                                                                </div>
                                                                        </div>
                                                                </form>
                                                                </div>
                                                                <div className="col-md-12 mtop"  >
                                                                <form onSubmit={this.emailSubmit}>
                                                                        <div className="col-md-5" >
                                                                        <h5 className="ptexte"><b>E-Mail Adress : </b><label class="pc"><b>{this.state.emailAddress}</b></label></h5>
                                                                        </div>
                                                                        <div className="col-md-7" >
                                                                                <input type="email" className="form-control" name="emailAddress" placeholder="example@example.com" aria-label="Recipient's username" aria-describedby="basic-addon2" onChange={this.handleChange}/>
                                                                                <div className="input-group-append">
                                                                                <button type="submit" className="pbutton mt-4  btn-custom text-uppercase">Update</button>
                                                                                <div ><label className=" er inputErr ">{this.state.emailError}</label></div>
                                                                                </div>
                                                                        </div>
                                                                </form>
                                                                </div>
                                                                <div className="col-md-12 mtop"  >
                                                                        <div className="col-md-6" >
                                                                        <h5 className="ptext"><b>Social Media Accounts </b></h5> 
                                                                        </div>
                                                                        <div className="col-md-6" >
                                                                        </div>
                                                                </div>
                                                                <div className="col-md-12 mtop"  >
                                                                <form onSubmit={this.phoneNumberSubmit}>
                                                                        <div className="col-md-5" >
                                                                                <h5 className="ptext"><b>Phone Number :</b><label class="pc"><b>05530892463</b></label></h5>
                                                                        </div>
                                                                        <div className="col-md-7" >
                                                                                <input type="tel" className="form-control" name="phoneNumber" placeholder="Phone Number" aria-label="Recipient's username" aria-describedby="basic-addon2" onChange={this.handleChange}/>
                                                                                <div className="input-group-append">
                                                                                <button type="submit" className="pbutton mt-4  btn-custom text-uppercase">Update</button>
                                                                                <div ><label className=" er inputErr ">{this.state.phoneNumberError}</label></div>
                                                                                </div>
                                                                        </div>
                                                                </form>
                                                                </div>
                                                                <div className="col-md-12 mtop"  >
                                                                <form onSubmit={this.surnameSubmit}>
                                                                        <div className="col-md-5" >
                                                                        <h5 className="ptext"><b>Facebook Account  </b><label class="pc"> <b>www.facebook.com</b>  </label></h5> 
                                                                        </div>
                                                                        <div className="col-md-7" >
                                                                                <input type="text" className="form-control" placeholder="Facebook Account" aria-label="Recipient's username" aria-describedby="basic-addon2" onChange={this.handleChange}/>
                                                                                <div className="input-group-append">
                                                                                <button type="submit" className="pbutton mt-4  btn-custom text-uppercase">Update</button>
                                                                                <div ><label className=" er inputErr ">{this.state.emailError}</label></div>
                                                                                </div>
                                                                        </div>
                                                                </form>
                                                                </div>
                                                                <div className="col-md-12 mtop" >
                                                                <form onSubmit={this.surnameSubmit}>
                                                                        <div className="col-md-5" >
                                                                        <h5 className="ptext"><b>Instagram Account  </b><label class="pc"><b>numan_sinan</b></label></h5> 
                                                                        </div>
                                                                        <div className="col-md-7" >
                                                                                <input type="text" class="form-control" placeholder="Instagram Account" aria-label="Recipient's username" aria-describedby="basic-addon2" onChange={this.handleChange}/>
                                                                                <div className="input-group-append">
                                                                                <button type="submit" className="pbutton mt-4  btn-custom text-uppercase">Update</button>
                                                                                <div ><label className=" form-label  er input-group-append">{this.state.emailError}</label></div>
                                                                                </div>
                                                                        </div>
                                                                </form>
                                                                </div>
                                                                <div className="col-md-12 mtop"  >
                                                                <form onSubmit={this.surnameSubmit}>
                                                                        <div className="col-md-5" >
                                                                        <h5 className="ptext"><b>Whatsapp  </b><label class="pc"><b>www.whatsapp.com</b></label></h5> 
                                                                        </div>
                                                                        <div className="col-md-7" >
                                                                                <input type="text" class="form-control" placeholder="Instagram Account" aria-label="Recipient's username" aria-describedby="basic-addon2" onChange={this.handleChange}/>
                                                                                <div className="input-group-append">
                                                                                <button type="submit" className="pbutton mt-4  btn-custom text-uppercase">Update</button>
                                                                                <div ><label className=" form-label  er input-group-append">{this.state.emailError}</label></div>
                                                                                </div>
                                                                        </div>
                                                                </form>
                                                                </div>
                                                                <div className="col-md-12 mtop" >
                                                                <form onSubmit={this.surnameSubmit}>
                                                                        <div className="col-md-5" >
                                                                        <h5 className="ptext"><b>Telegram  </b><label class="pc"><b>www.Telegram.com</b></label></h5> 
                                                                        </div>
                                                                        <div className="col-md-7" >
                                                                                <input type="text" class="form-control" placeholder="Instagram Account" aria-label="Recipient's username" aria-describedby="basic-addon2" onChange={this.handleChange}/>
                                                                                <div className="input-group-append">
                                                                                <button type="submit" className="pbutton mt-4  btn-custom text-uppercase">Update</button>
                                                                                <div ><label className=" form-label  er input-group-append">{this.state.emailError}</label></div>
                                                                                </div>
                                                                        </div>
                                                                </form>
                                                                </div>
                                                                <div className="col-md-12 mtop"  >
                                                                <form onSubmit={this.surnameSubmit}>
                                                                        <div className="col-md-5" >
                                                                        <h5 className="ptext"><b>WeChat  </b><label class="pc"><b>www.WeChat.com</b></label></h5> 
                                                                        </div>
                                                                        <div className="col-md-7" >
                                                                                <input type="text" class="form-control" placeholder="Instagram Account" aria-label="Recipient's username" aria-describedby="basic-addon2" onChange={this.handleChange}/>
                                                                                <div className="input-group-append">
                                                                                <button type="submit" className="pbutton mt-4  btn-custom text-uppercase">Update</button>
                                                                                <div ><label className=" form-label  er input-group-append">{this.state.emailError}</label></div>
                                                                                </div>
                                                                        </div>
                                                                </form>
                                                                </div>
                                                                <div className="col-md-12 mtop"  >
                                                                <form onSubmit={this.surnameSubmit}>
                                                                        <div className="col-md-5" >
                                                                        <h5 className="ptext"><b>VKontakte  </b><label class="pc"><b>www.VKontakte.com</b></label></h5> 
                                                                        </div>
                                                                        <div className="col-md-7" >
                                                                                <input type="text" class="form-control" placeholder="Instagram Account" aria-label="Recipient's username" aria-describedby="basic-addon2" onChange={this.handleChange}/>
                                                                                <div className="input-group-append">
                                                                                <button type="submit" className="pbutton mt-4  btn-custom text-uppercase">Update</button>
                                                                                <div ><label className=" form-label  er input-group-append">{this.state.emailError}</label></div>
                                                                                </div>
                                                                        </div>
                                                                </form>
                                                                </div>
                                                                <div className="col-md-12 mtop"  >
                                                                <form onSubmit={this.surnameSubmit}>
                                                                        <div className="col-md-5" >
                                                                        <h5 className="ptext"><b>Twitter</b><label class="pc"><b>nusinan</b></label></h5> 
                                                                        </div>
                                                                        <div className="col-md-7" >
                                                                                <input type="text" class="form-control" placeholder="Instagram Account" aria-label="Recipient's username" aria-describedby="basic-addon2" onChange={this.handleChange}/>
                                                                                <div className="input-group-append">
                                                                                <button type="submit" className="pbutton mt-4  btn-custom text-uppercase">Update</button>
                                                                                <div ><label className=" form-label  er input-group-append">{this.state.emailError}</label></div>
                                                                                </div>
                                                                        </div>
                                                                </form>
                                                                </div>
                                                        </div>
                                                        <div classNames="col-md-2" >
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
