import React, { Component } from 'react'
import {BrowserRouter as Router,Link,Redirect} from "react-router-dom";

export default class Logout extends Component {
    constructor(props){
        super(props)
        localStorage.removeItem('jwt');
    }
    render() {
        return (
            <div>
                <Redirect to="/login"/>
            </div>
        )
    }
}
