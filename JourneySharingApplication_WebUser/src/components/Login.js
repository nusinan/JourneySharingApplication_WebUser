import React, { Component } from 'react'
import img1 from '../assets/images/f-mwo-dznni-averie-woodard-2000x2000.jpg';
import {BrowserRouter as Router,Link,Redirect} from "react-router-dom";
import {YpuProvider} from '../context';


const initialState ={
}
 class Login extends Component {
   
     constructor(props){
        const token = localStorage.getItem('jwt');
        let loggedIn =true;
        if(token==null){
      
            loggedIn =false;
        }
        super(props);
        const initialState ={
            loginError:"",
            email:"",
            password:"",
            emailError:"",
            passwordError:"",
            token:"",
            loggedIn
        }
     this.handleChange=this.handleChange.bind(this);
     this.handleSubmit=this.handleSubmit.bind(this);
     
     }
     
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
        let passwordError = "";
        let loginError= "";
    
         //let password error
         const {password,email,loggedIn}=this.state;
       
         if(!password.match(/^[#\w@_-]{6,20}$/) ){
             passwordError ="unfortunately you entered invalid password";
         }
        
        if(!email.match(/^([a-z\d\.-]+)@([a-z\d-]+)\.([a-z]{2,8})(\.[a-z]{2,8})?$/)){
             emailError = 'please enter a valid email address example@ypu.com';
        }
        if(loggedIn && !emailError && !passwordError){
            loginError="No such user was found in our system, please check your password and e-mail again.";
            this.setState({loginError})
            }
        if(emailError  || passwordError ){
         this.setState({emailError,passwordError});
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
            const {loggedIn,loginError}=this.state;
             fetch('https://cors-anywhere.herokuapp.com/https://journey-sharing-application.herokuapp.com/token',{
                method: 'POST',
                body: JSON.stringify({
                emailAddress: this.state.email,
                password:this.state.password,
                }),
                headers: {
                "Content-type": "application/json; charset=UTF-8"
                }
            })
            .then(response => response.json())
            .then(json => {
                localStorage.setItem('jwt',json.token);
                let jwt="";
                let loginError="";
                jwt =json.token;
                if(jwt){
                    this.setState({loggedIn:true})
                    }
                    if(!loggedIn ){
                        loginError="No such user was found in our system, please check your password and e-mail again.";
                        this.setState({loginError})
                        }
            
                }
            )}
    }
    render() {
        if(this.state.loggedIn){
             return   <Redirect to="/LoggedPage"/>
        }
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
                                            <li className="nav-item"><a><Link className="nav-link link mbr-editable-menu-item" to = "/"><h6><b>Homepage</b></h6></Link> </a></li>
                                            <li className="nav-item"><a ><Link className="nav-link link mbr-editable-menu-item" to = "/searchTrip"><h6><b>Search Journey</b></h6></Link></a></li>
                                                <li className="nav-item nav-btn"><a><Link className="nav-link btn btn-white btn-white-outline mbr-editable-menu-item" to = "/register">Register</Link></a></li>
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
                                <h1 className="mb-5 font-weight-light text-uppercase">Login</h1>
                                <div className="form-group">
                                    <input type="text" className="form-control  form-control-lg" name='email' placeholder="E-Mail Adres" onChange={this.handleChange}/>
                                    <div><label className=" form-label er input-group-append">{this.state.emailError}</label></div>
                                </div>
                                <div className="form-group">
                                    <input type="password" className="form-control  form-control-lg"  name='password' placeholder="Password" onChange={this.handleChange}/>
                                    <div><label className=" form-label er input-group-append">{this.state.passwordError}</label></div>
                                    <div><label className=" form-label er input-group-append">{this.state.loginError}</label></div>
                                    
                                </div>
                                <div className="forgot-link form-group d-flex justify-content-between align-items-center">
                                    <div className="form-check">
                                    <input type="checkbox" className="form-check-input " id="remember" />
                                    <label className="form-check-label" for="remember" style={{color: 'rgb(255, 255, 255)'}}>Remember Password</label>
                                </div>
                                <a href="#" style={{color:' rgb(229, 255, 0)'}}><Link style={{color:' rgb(229, 255, 0)'}} to = "/forgotPassword"><strong>Forgot Password</strong></Link></a>
                                </div>
                                <button type="submit" className="btn mt-5 rounded-pill btn-lg btn-custom btn-block text-uppercase">Login</button>
                                <p className="mt-3 font-weight-normal"  style={{color: 'rgb(255, 255, 255)'}}>Don't have an account? <a href="#" ><strong><Link style={{color:' rgb(229, 255, 0)'}} to = "/register">Kayıt Ol</Link></strong></a></p>
                            </form>
                        </div>
                    </section>
            </YpuProvider> 
        )
    }
}
export default Login;