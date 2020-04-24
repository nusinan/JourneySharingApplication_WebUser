import React, { Component } from 'react'
import { YpuProvider } from '../../context';
import {BrowserRouter as Router,Link,Redirect} from "react-router-dom";
import profile from '../../assets/images/profill.jpg';
import LoggedPage from '../../components/LoggedPage';

export default class Profil extends Component {
   
    constructor(props) {
        super(props);
       
       this.state={
           name:"numan",
           Surname:"",
           emailAddress:"",
           birthday:"",
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
                })
        })
        
      }
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
                                <h5 className="pi"><b>Name : </b><label className="pc"><b>{this.state.name}</b></label></h5>
                                <hr className="hrc"/>
                                <h5 className="pi"><b>Surname : </b><label className="pc"><b>{this.state.surname}</b></label></h5>
                                <hr className="hrc"/>
                                <h5 className="pi"><b>Yaş : </b><label className="pc"><b>{this.state.birthday}</b></label></h5>
                                <hr className="hrc"/>
                                <h5 className="pi"><b>Konum : </b><label className="pc"><b>Istanbul</b></label></h5>
                                <hr className="hrc"/>
                                <h5 className="pi"><b>Addition : </b><label className="pc"><b>Software Engineering</b></label></h5>
                                <hr className="hrc"/>
                                <h5 className="pi"><b>E-Mail : </b><label className="pc"><b>{this.state.emailAddress}</b></label></h5>
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
