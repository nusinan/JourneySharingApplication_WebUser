import React, { Component } from 'react'
import img1 from '../assets/images/f-mwo-dznni-averie-woodard-2000x2000.jpg';
import {BrowserRouter as Router,Link,Redirect} from "react-router-dom";
import {YpuProvider} from '../context';


const initialState ={
}
 class ForgotPassword extends Component {
   
    /* constructor(props){
        const token = localStorage.getItem('jwt');
        let loggedIn =true;
        if(token==null){
      
            loggedIn =false;
        }
        super(props);
        const initialState ={
            email:"",
            password:"",
            emailError:"",
            passwordError:"",
            token:"",
            loggedIn
        }
     this.handleChange=this.handleChange.bind(this);
     this.handleSubmit=this.handleSubmit.bind(this);
     }*/
     
    state = initialState;
        
    handleChange = event =>{
        const isCheckbox = event.target.type === "checkbox";
        this.setState({
            [event.target.name]:isCheckbox
            ?event.target.checked
            :event.target.value,
        })
    };

    validate = () =>{
     
        let emailError = "";
    
         //let password error
         const {email}=this.state
       
         
        
        if(!email.match(/^([a-z\d\.-]+)@([a-z\d-]+)\.([a-z]{2,8})(\.[a-z]{2,8})?$/)){
             emailError = 'lütfen geçerli bir mail adresi giriniz   example@ypu.com';
        }
        if(emailError   ){
         this.setState({emailError});
         return false;
        }
        return true;
     };
     handleSubmit = event =>{
        event.preventDefault();
        
        const isValid =this.validate();
        console.log(this.state);
        if(isValid){    
            console.log(this.state);
            //clear form
            this.setState(initialState);
            const {loggedIn}=this.state;
             fetch('http://25.109.92.209:8081/email//email/forgotPassword?receiverEmailAddress=mail',{
                method: 'POST',
                body: JSON.stringify({
                
                emailAddress: this.state.email,
                }),
                headers: {
                "Content-type": "application/json; charset=UTF-8"
                }
            })
            .then(response => response.json())
            .then(json => console.log("json = "+json)
            )}
    }
    render(){
        /*if(this.state.loggedIn){
             return   <Redirect to="/LoggedPage"/>
        }*/
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
                                            <li className="nav-item"><a><Link className="nav-link link mbr-editable-menu-item" to = "/"><h6><b>Ana Sayfa</b></h6></Link> </a></li>
                                            <li className="nav-item"><a ><Link className="nav-link link mbr-editable-menu-item" to = "/searchTrip"><h6><b>Yolculuk Ara</b></h6></Link></a></li>
                                                <li className="nav-item nav-btn"><a><Link className="nav-link btn btn-white btn-white-outline mbr-editable-menu-item" to = "/register">Kayıt Ol</Link></a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </nav>
                    </section>
                    </div>
                    <section className="mbr-section mbr-section-hero mbr-section-full header2 mbr-parallax-background mbr-after-navbar" id="header2-1" style={{ backgroundImage:`url(${img1})` }}>
                        <div className="d-flex justify-content-center align-items-center login-container">
                            <form onSubmit={this.handleSubmit} className="login-form text-center">
                                <img src="assets/images/log.png"/>
                                <h4 className=" display-3 "  style={{ color:'rgb(255, 255, 255)'}}> UPDATE PASSWORD</h4>
                                <div className="form-group">
                                    <input type="text" className="form-control  form-control-lg" name='email' placeholder="E-Mail Adres" onChange={this.handleChange}/>
                                    <div><label className=" form-label er input-group-append">{this.state.emailError}</label></div>
                                </div>
                                <p className="mt-3 font-weight-normal"  style={{color: 'rgb(255, 255, 255)'}}>After you send email adress you'll take a validetion code</p>
                              
                                <button type="submit" className="btn mt-5 rounded-pill btn-lg btn-custom btn-block text-uppercase">Update Password</button>
                                <p className="mt-3 font-weight-normal"  style={{color: 'rgb(255, 255, 255)'}}>Don't have an account? <a href="#" ><strong><Link style={{color:' rgb(229, 255, 0)'}} to = "/register">Register</Link></strong></a></p>
                            </form>
                        </div>
                    </section>
            </YpuProvider> 
        )
    }
}
export default ForgotPassword;