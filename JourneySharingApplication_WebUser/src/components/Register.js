import React, { Component } from 'react'
import {YpuProvider} from '../context';
import img1 from '../assets/images/f-mwo-dznni-averie-woodard-2000x2000.jpg';
import { checkPropTypes } from 'prop-types';
import {BrowserRouter as Router,Link,Redirect} from "react-router-dom";

const initialState ={
    name:"",
    surname:"",
    email:"",
    password:"",
    passwordConfirm:"",
    date:"",
    gender:"",
    nameError:"",
    surnameError:"",
    usernameError:"",
    emailError:"",
    passwordError:"",
    passwordConfirmError:"",
    dateError:"",
    genderError:"",
    ageError:"",
    policy:"",
    policyError:"",
    genderString:"",
    loggedIn:false,
}
export default class Register extends Component {
    constructor(props){
        super(props)
        const id = this.state.id;
        let loggedIn =false
        if(id){
      
            loggedIn =true;
        }
      
    }

   state = initialState;
    checkBoxChange= event =>{
        this.setState({
            gender:parseInt(event.target.value),
            genderString:event.target.value,
        })
    }
    
    
    handleChange = event =>{
        const isCheckbox = event.target.type === "checkbox";
        this.setState({
            [event.target.name]:isCheckbox
            ?event.target.checked
            :event.target.value,
        })
    };
    
    
    validate = () =>{
        let nameError = "";
        let surnameError = "";
        let emailError = "";
        let passwordError = "";
        let passwordConfirmError = "";
        let dateError = "";
        let genderError = "";
        let ageError ="";
        let policyError="";
         //let password error
         const {name,surname,password,passwordConfirm,email,date,gender,policy,genderString} = this.state
         if(!this.state.name ){
             nameError ="Lütfen İsminizi giriniz"; 
         }
         if(!this.state.surname.match(/^[a-z\d]{5,12}$/) ){
             surnameError ="Lütfen Soyadınızı giriniz";
         }
         if(!this.state.password.match(/^[#\w@_-]{6,20}$/) ){
             passwordError ="Şifreniz küçük harf, büyük harf, sayı ve özel karakter içermelidir. Ayrıca, şifreniz en az 6 karakter olmalıdır.";
         }
         if(!this.state.policy){
             policyError="üye olmak için kullanıcı şartlarını kabul ediniz";
         }
         
     // perform all neccassary validations
         if (this.state.password !== passwordConfirm) {
             passwordConfirmError =" Girdiğiniz parolalar birbiri ile eşleşmiyor";
         } 
        if(!this.state.email.match(/^([a-z\d\.-]+)@([a-z\d-]+)\.([a-z]{2,8})(\.[a-z]{2,8})?$/)){
             emailError = 'Lütfen geçerli bir Mail adresi giriniz   example@ypu.com';
        }
        if(!this.state.date){
         dateError ="Lütfen doğum tarihinizi giriniz";
         }
         if(this.state.date){
             
             const birthday = new Date(this.state.date);
             const today = new Date();
             const yearDiffrence = today.getFullYear() - birthday.getFullYear();
             const mounthDiffrence = today.getMonth() - birthday.getMonth() ;
             const dayDifference = today.getDate()-birthday.getDate();
             //if(yearDiffrence<18 && mounthDiffrence<0 && dayDifference<0){
                  //;
      
         if( this.state.yearDiffrence<=16)
         {
             //if( mounthDiffrence<0){
                 
                 ageError = " malesef yaşınız 16 den küçük oduğ için uygulamaya kayıt olamassınız";
                 //          }
         }
             //}
         }
         if(!this.state.genderString){
             genderError ="Cinsiyet belirtiniz";
             }
            
        if(emailError || nameError || surnameError || passwordError || dateError || passwordConfirmError || genderError || ageError|| policyError){
         this.setState({nameError,surnameError,emailError,passwordError,dateError,passwordConfirmError,genderError,ageError,policyError});
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
           
           let id="";
            fetch('http://25.109.92.209:8081/user/save',{
                method: 'POST',
                body: JSON.stringify({
                name: this.state.name,
                surname: this.state.surname,
                emailAddress: this.state.email,
                password:this.state.password,
                gender:this.state.gender,
                birthday:this.state.date,
                }),
                headers: {
                "Content-type": "application/json; charset=UTF-8",
                
                }
            })
            .then(response => response.json())
            .then(json => {
                console.log(json);
                let id =json.id;
                if(id){
                    this.setState({loggedIn:true})
                    }
            })
        }
    }
    render() {
        if(this.state.loggedIn){
            return   <Redirect to="/LoggedPage" />
       }
        return (
            <YpuProvider>
            <div id="menu-0" custom-code="true">
                <section>
                    <nav className="navbar navbar-dropdown bg-color transparent navbar-fixed-top">
                        <div className="container">
                            <div className="mbr-table">
                                <div className="mbr-table-cell">
                                    <ul className="nav-dropdown collapse pull-xs-right nav navbar-nav navbar-toggleable-sm" id="exCollapsingNavbar">
                                    <li className="nav-item"><a  ><Link className="nav-link link mbr-editable-menu-item" to = "/"><h6><b>HomePage</b></h6></Link></a></li>
                                        <li className="nav-item"><a><Link className="nav-link link mbr-editable-menu-item" to = "/searchTrip"><h6><b>Search Trip</b></h6></Link></a></li>
                                        <li className="nav-item nav-btn"><a><Link className="nav-link btn btn-white btn-white-outline mbr-editable-menu-item" to = "/login">Login</Link></a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </nav>
                </section>
                <section className="mbr-section mbr-section-hero mbr-section-full header2 mbr-parallax-background mbr-after-navbar" id="header2-1" style={{ backgroundImage:`url(${img1})` }}>
                <div className="d-flex justify-content-center align-items-center login-container">
                    <form onSubmit={this.handleSubmit} className="login-form text-center">
                    
                    <img src="assets/images/log.png"/>
                    <h1 className="mb-3 font-weight-light text-uppercase">REGISTER</h1>
                        <div className="form-group">
                            <input type="text" className="form-control   form-control-lg"  name='name'  placeholder="Name" value={this.state.name} onChange={this.handleChange}/>
                            <div ><label className=" form-label  er input-group-append">{this.state.nameError}</label></div>
                        </div>
                        <div className="form-group">
                            <input type="text" className="form-control   form-control-lg"  name='surname'  placeholder="Surname" value={this.state.surname} onChange={this.handleChange}/>
                            <div ><label className=" form-label  er input-group-append">{this.state.surnameError}</label></div>
                        </div>
                        <div className="form-group">
                                <input type="text" className="form-control form-control-lg" name='email'  placeholder="E-Posta" value={this.state.email} onChange={this.handleChange}/>
                                <div><label className=" form-label er input-group-append">{this.state.emailError}</label></div>
                        </div>
                        <div className="form-group">
                            <input type="password" className="form-control  form-control-lg "  name='password'  placeholder="Password" value={this.state.password} onChange={this.handleChange}/>
                            <div><label className=" form-label er  input-group-append">{this.state.passwordError}</label></div>
                        </div>
                        <div className="form-group">
                            <input type="password" className="form-control  form-control-lg "  name='passwordConfirm'  placeholder="Password Again"  onChange={this.handleChange}/>
                            <div><label className=" form-label er  input-group-append">{this.state.passwordConfirmError}</label></div>
                        </div>
                        
                        <div className="form-group">
                                <div className='input-group input-append-date' id='daterangepicker'>
                                    <input type='date' className="form-control form-control-lg"  name='date'  placeholder="" onChange={this.handleChange} />
                                    <div><label className=" form-label er  input-group-append">{this.state.dateError}</label></div>
                                    <div><label className=" form-label er  input-group-append">{this.state.ageError}</label></div>
                                </div>
                            </div>
        
                        <div className="form-group d-flex  align-items-center">
                                <div className="form-check">
                                    <input type="radio" className="form-check-input " name="gender"  value ="1"  onChange={this.checkBoxChange} id="remember"/>
                                    <label className="form-label mbr-section-text "   htmlFor="remember"  >Man</label>
                                    ,
                                </div>
                                <div className="form-check">
                                    
                                    <input type="radio" className="form-check-input "  name="gender" value="0"   onChange={this.checkBoxChange} id="remember"/>
                                    <label className="form-label mbr-section-text "  htmlFor="remember">Woman</label>
                                </div>
                                <div><label className=" form-label er  input-group-append">{this.state.genderError}</label></div>   
                        </div>
                        <div className="forgot-link form-group d-flex justify-content-between align-items-center">
                                    <div className="form-check">
                                    <input type="checkbox" className="form-check-input" name="policy" value="checked"  onChange={this.handleChange} id="remember" />
                                    <label className="form-check-label" for="remember" style={{color: 'rgb(255, 255, 255)'}}>I Accept All <a href="" style={{color: 'rgb(229, 255, 0)'}}> User Condition </a> Policies</label>
                                    <div><label className=" form-label er  input-group-append">{this.state.policyError}</label></div> 
                                </div>
                                
                                </div>
                             
                        <button type="submit" className=" mt-1  btn-lg btn-custom  btn-block text-uppercase">Register</button>
                        <p className="mt-3 font-weight-normal" style={{color: 'rgb(255, 255, 255)'}}>Do You Have Account? <a href="#" ><strong><Link style={{color: 'rgb(229, 255, 0)'}} to = "/login">Login</Link></strong></a></p>
                    </form>
                </div>
                </section>
            </div>    
        </YpuProvider>
        )
    }
}
