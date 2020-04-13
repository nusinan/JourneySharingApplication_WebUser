import React, { Component } from 'react'
import {YpuProvider} from '../context';
import {BrowserRouter as Router,Link} from "react-router-dom";
import img1 from '../assets/images/f-mwo-dznni-averie-woodard-2000x2000.jpg';
export default class NotFoundPage extends Component {
    render() {
        return (
            <div>
                <YpuProvider>
              
                    <div id="notfound">
                        <div className="notfound-bg">
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                        </div>
                        <div className="notfound">
                            <div className="notfound-404">
                                <h1>404</h1>
                            </div>
                            <h2>Page Not Found</h2>
                            <p>The page you are looking for might have been removed had its name changed or is temporarily unavailable.</p>
                            <Link to = "/">Go to HomePage</Link>
                        
                        </div>
                    </div>
        
                </YpuProvider>
            </div>
        )
    }
}
