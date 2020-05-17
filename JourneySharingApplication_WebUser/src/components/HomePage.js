import React, { Component } from 'react'
import {YpuProvider} from '../context';
import img1 from '../assets/images/f-mwo-dznni-averie-woodard-2000x2000.jpg';
import img2 from '../assets/images/mbr-2000x1333.png';
import {BrowserRouter as Router,Link,Redirect} from "react-router-dom";
export default class HomePage extends Component {
    componentDidMount() {
        var _CONTENT = [ "Nereye Gitmek İstersiniz ?", "İstanbul Ankara İzmir Antalya .....", "Türkiyenin 4 bir tarafına", "Şoförünü Seç Yolculuğa Başla" ];
        var _PART = 0;
        var _PART_INDEX = 0;
        var _INTERVAL_VAL;
        var _ELEMENT = document.querySelector("#text");
        function Type() { 
            var text =  _CONTENT[_PART].substring(0, _PART_INDEX + 1);
            _ELEMENT.innerHTML = text;
            _PART_INDEX++;
            if(text === _CONTENT[_PART]) {
                clearInterval(_INTERVAL_VAL);
                setTimeout(function() {
                    _INTERVAL_VAL = setInterval(Delete, 50);
                }, 1000);
            }
        }
        function Delete() {
            var text =  _CONTENT[_PART].substring(0, _PART_INDEX - 1);
            _ELEMENT.innerHTML = text;
            _PART_INDEX--;
            if(text === '') {
                clearInterval(_INTERVAL_VAL);
                if(_PART == (_CONTENT.length - 1))
                    _PART = 0;
                else
                    _PART++;
                _PART_INDEX = 0;
                setTimeout(function() {
                    _INTERVAL_VAL = setInterval(Type, 100);
                }, 200);
            }
        }
        _INTERVAL_VAL = setInterval(Type, 100);
      }    
    render() {
        return (
            <YpuProvider>
                <div id="menu-0" custom-code="true">
                    <section>
                        <nav className="navbar navbar-dropdown bg-color transparent navbar-fixed-top">
                            <div className="container">
                                <div className="mbr-table">
                                    
                                    <div className="mbr-table-cell">
                                        <ul className="nav-dropdown collapse pull-xs-right nav navbar-nav navbar-toggleable-sm" id="exCollapsingNavbar">
                                        <li className="nav-item"><a ><Link className="nav-link link mbr-editable-menu-item" to = "/"><h6><b>HomePage</b></h6></Link></a></li>
                                        <li className="nav-item"><a ><Link className="nav-link link mbr-editable-menu-item" to = "/searchTrip"><h6><b>Search Trip</b></h6></Link></a></li>
                                        <li className="nav-item"><a ><Link className="nav-link link mbr-editable-menu-item" to = "/PostTrip"><h6><b>Post Trip</b></h6></Link></a></li>
                                        <li className="nav-item nav-btn"><a><Link className="nav-link btn btn-white btn-white-outline mbr-editable-menu-item" to = "/profile">Profile</Link></a></li>
                                        <li className="nav-item nav-btn"><a><Link className="nav-link btn btn-white btn-white-outline mbr-editable-menu-item" to = "/login">login</Link></a></li>
                                        <li className="nav-item nav-btn"><a><Link className="nav-link btn btn-white btn-white-outline mbr-editable-menu-item" to = "/register">Register</Link></a></li>
                                        </ul>
                                    </div>
                                    <div className="mbr-table-cell">
                                        <ul className="nav-dropdown collapse nav  navbar-toggleable-sm pull-xs-right">
                                        <li className="nav-item dropdown show ">
                                            <a className="nav-link link dropdown-toggle navbar-nav" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">For More</a>
                                            <div class="dropdown-menu" aria-labelledby="dropdownMenuLink">
                                                <a className="dropdown-item mbr-editable-menu-item nav-bgc" href="#">About Us</a>
                                                <a className="dropdown-item mbr-editable-menu-item nav-bgc" href="#">Kullanım Bilgilendirme</a>
                                                <a className="dropdown-item mbr-editable-menu-item nav-bgc" href="#">Ücret Politikası</a>
                                                <a className="dropdown-item mbr-editable-menu-item nav-bgc" href=".#">İletişim ve Şikayet</a>
                                                <a className="dropdown-item mbr-editable-menu-item nav-bgc" href=".#">Kullanım Şartları</a>
                                            </div>
                                        </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </nav>
                        
                    </section>

                    <section className="mbr-section mbr-section-hero mbr-section-full header2 mbr-parallax-background mbr-after-navbar"  id="header2-1" style={{ backgroundImage:`url(${img1})` }}>

                    <div className="mbr-overlay" style={{opacity: 0.2, backgroundcolor:'rgb(71, 85, 119)'}}>
                    </div>

                    <div className="mbr-table mbr-table-full">
                        <div className="mbr-table-cell">

                            <div className="container">
                            <div className="mbr-section row">
                                    <div className="col-md-12"><h4 className=" display-3 " id="text" style={{ color:'rgb(71, 85, 119)'}}> </h4></div>
                                    <div className="col-md-12"><h4 className="mbr-section-title display-3"> YOLCULUK ARA </h4></div>
                                    
                                    <div className="col-md-12 order-md-1">
                                        <h4 className="mb-3 mbr-section-text input-group-append" >Bulunduğunuz Konumunuzu Seçiniz</h4>
                                        <label for="address2"><span className="text-muted"></span></label>
                                        <form className="needs-validation" novalidate>
                                        
                                        <div className="mb-3">
                                            
                                            <input type="email" className="form-control" id="email" placeholder="Istanbul/Türkiye"/>
                                            <div className="invalid-feedback mbr-section-text" >
                                            
                                            </div>
                                        </div>
                            
                                        <div className="mb-3">
                                                <label for="address2"><span className="text-muted"></span></label>
                                                <h4 className="mb-3 mbr-section-text input-group-append">Gitmek istediğiniz Konum </h4>
                                            <input type="text" className="form-control" placeholder="Nereye Gitmek istiyorsunuz" aria-label="Recipient's username" aria-describedby="basic-addon2"/>
                                            <div className="invalid-feedback mbr-section-text">
                                            
                                            </div>
                                        </div>
                                            
                                        <div className="mb-3">
                                        </div>
                                        <div className="input-group-append ">
                                            <button type="submit" className="button mt-4  btn-custom text-uppercase">Yolculuk Ara</button>
                                            </div>
                                        </form>
                                    </div>
                                        </div>
                                        <div className="mbr-section-text">
                                                <p>Yolculuk paylaşım uygulaması ile  gitmek istediğiniz yere gitmekte olan araçlarla birlikte gidin&nbsp;</p>
                                        </div>
                                    </div>
                            </div>
                        </div>
                    
                    <div className="mbr-arrow mbr-arrow-floating hidden-sm-down" aria-hidden="true"><a href="#testimonials1-7"><i className="mbr-arrow-icon"></i></a></div>
                    </section>
                    <section className="mbr-section mbr-background" id="testimonials1-7"  style={{ backgroundImage:`url(${img2})`,paddingtop: 120, paddingbottom: 120 }} >

                    <div className="mbr-overlay" style={{opacity: 0, backgroundcolor: 'rgb(255, 255, 255)'}}>
                    </div>

                        <div className="mbr-section mbr-section__container mbr-section__container--middle">
                            <div className="container">
                                <div className="row">
                                    <div className="col-xs-12 text-xs-center">
                                        <h3 className="mbr-section-title display-2">WHAT OUR FANTASTIC USERS SAY</h3>
                                        <small className="mbr-section-subtitle">Shape your future web project with sharp design and refine coded functions.</small>
                                    </div>
                                </div>
                            </div>
                        </div>


                    <div className="mbr-testimonials mbr-section mbr-section-nopadding">
                        <div className="container">
                            <div className="row">
                                <div className="col-xs-12 col-lg-4">

                                    <div className="mbr-testimonial card mbr-testimonial-lg">
                                        <div className="card-block"><p>So far so good ! I had used YPU only 2 times, and both rides were super!  I hate taking the bus so i dont mind paying the same amount for a nice cozy car seat :) At this moment im waiting for my 3rd ride and i hope all goes well as previous times.. From what i read seems that it depends a lot on where your driver is from.. Also, when you write bad reviews keep in mind that you were maybe not the best customer ever sooo..</p></div>
                                        <div className="mbr-author card-footer">
                                            <div className="mbr-author-img"><img src="assets/images/ellejmi6dqy-abigail-sisson-160x160.jpg" className="img-circle"/></div>
                                            <div className="mbr-author-name">Numan Sinan</div>
                                            
                                        </div>
                                    </div>
                                    <div className="mbr-arrow mbr-arrow-floating hidden-sm-down" aria-hidden="true"><a href="#pricing-table2-f"><i className="mbr-arrow-icon"></i></a></div>
                                </div>
                                
                                <div className="col-xs-12 col-lg-4">

                                    <div className="mbr-testimonial card mbr-testimonial-lg">
                                        <div className="card-block"><p>First time I had used blablacar. Needed to get from Ankara to İstanbul   . Agreed to meet at bus station. Driver informed me that he was going to be 10 mins late and where I should wait.
                                        Daria drove sensibly but not slowly. I was front passenger and at no time did I feel nervous. He is a very smooth driver giving a comfortable ride. He couldn't take me all the way to Vilamoura but made sure he stopped near a taxi rank to finish my journey.
                                        Well done Daria.</p></div>
                                        <div className="mbr-author card-footer">
                                            <div className="mbr-author-img"><img src="assets/images/fcuj-bvjrrs-alicja-koczaska-160x160.jpg" className="img-circle"/></div>
                                            <div className="mbr-author-name">Ozan Duran</div>
                                            
                                        </div>
                                    </div>
                                </div><div className="col-xs-12 col-lg-4">

                                    <div className="mbr-testimonial card mbr-testimonial-lg">
                                        <div className="card-block"><p>It goes from point A to point B, but they're so obsessed with making sure that they get their money that the customer experience sucks. I used it 4 years ago and it was great., and it's impossible to reach out to the other person about alternative drop offs until you've locked in. Once you've locked in the drive doesn't have to do anything accommodating.
                                        YPU, you had something great, and you killed it. Congrats.</p></div>
                                        <div className="mbr-author card-footer">
                                            <div className="mbr-author-img"><img src="assets/images/fqkbxo2nkq0-sticker-mule-160x160.png" className="img-circle"/></div>
                                            <div className="mbr-author-name">Anna Watson</div>
                                            
                                        </div>
                                    </div>
                                </div>

                            </div>

                        </div>

                    </div>
                    <div className="mbr-arrow mbr-arrow-floating hidden-sm-down" aria-hidden="true"><a href="#uygulama"><i className="mbr-arrow-icon"></i></a></div>
                    </section>
                    <section className="mbr-section" id="pricing-table2-f" style={{backgroundcolor: 'rgb(255, 255, 255)', paddingtop: 120, paddingbottom: 120}}>

                    <div  id="uygulama" className="mbr-section mbr-section__container mbr-section__container--middle">
                    <div className="container">
                        <div className="row">
                            <div className="col-xs-12 text-xs-center">
                                <h3 className="mbr-section-title display-2">YOLCULUKLAR</h3>
                                <small className="mbr-section-subtitle">Pricing table with four columns and solid color background.</small>
                            </div>
                        </div>
                    </div>
                    </div>

                    <div className="mbr-section mbr-section-nopadding mbr-price-table">
                    <div className="row">
                            <div className="col-xs-12 col-md-6 col-xl-4">
                                <div className="mbr-plan card text-xs-center">
                                    
                                    <div className="mbr-plan-header card-block">
                                    
                                    <div className="card-img"><img src="assets/images/fqkbxo2nkq0-sticker-mule-160x160.png" className="card-img-top"/></div>
                                    
                                    <div className="mbr-plan-list"><ul className="list-group list-group-flush"><li className="list-group-item">Daria Watson</li><li className="list-group-item"><label> </label>İzmir</li><li className="list-group-item"><label></label>Antalya</li><li className="list-group-item"><label> </label>15:30 da</li></ul></div>
                                    <div className="mbr-plan-btn"><a href="#" className="btn btn-black btn-black-outline">Göz at</a></div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xs-12 col-md-6 col-xl-4">
                                <div className="mbr-plan card text-xs-center">
                                        <div className="mbr-plan-header card-block">
                                    
                                                <div className="card-img"><img src="assets/images/fcuj-bvjrrs-alicja-koczaska-160x160.jpg" className="card-img-top"/></div>
                                            
                                                <div className="mbr-plan-list"><ul className="list-group list-group-flush"><li className="list-group-item">Ozan Duran</li><li className="list-group-item">İstanbul</li><li className="list-group-item">Ankara</li><li className="list-group-item">21:10 da</li></ul></div>
                                                <div className="mbr-plan-btn"><a href="#" className="btn btn-black btn-black-outline">Göz at</a></div>
                                            </div>
                                    
                                </div>
                                
                            </div>
                            <div className="col-xs-12 col-md-6 col-xl-4">
                                <div className="mbr-plan card text-xs-center">
                                        <div className="mbr-plan-header card-block">
                                    
                                                <div className="card-img"><img src="assets/images/hasan.png" className="card-img-top"/></div>
                                            
                                                <div className="mbr-plan-list"><ul className="list-group list-group-flush"><li className="list-group-item">Hasan Hüseyin Güneş</li><li className="list-group-item">İstanbul</li><li className="list-group-item">Tunceli</li><li className="list-group-item">8:40 da</li></ul></div>
                                                <div className="mbr-plan-btn"><a href="#" className="btn btn-black btn-black-outline">Göz at</a></div>
                                            </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="mbr-arrow mbr-arrow-floating hidden-sm-down" aria-hidden="true"><a href="#features4-i"><i className="mbr-arrow-icon"></i></a></div>
                    </section>
                    <section className="mbr-cards mbr-section mbr-section-nopadding" id="features4-i" style={{backgroundcolor: 'rgb(244, 244, 244)'}}>
                    <div className="mbr-cards-row row">
                        <div className="mbr-cards-col col-xs-12 col-lg-4" style={{paddingtop: 80, paddingbottom: 80}}>
                            <div className="container">
                                <div className="card cart-block">
                                <div className="mbr-figure"><img  style={{width: '100px',height:'100px',marginLeft:'250px'}} src="assets/images/dolar.png"/></div>
                                    <div className="card-block">
                                        <h4 className="card-title">Earn Money and Cheap Trips</h4>
                                        <h5 className="card-subtitle">Save Money</h5>
                                        <p className="card-text">To travel by choosing the trips suitable for your budget through the application</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="mbr-cards-col col-xs-12 col-lg-4" style={{paddingtop: 80, paddingbottom: 80}}>
                            <div className="container">
                                <div className="card cart-block">
                                <div className="mbr-figure"><img  style={{width: '100px',height:'100px',marginLeft:'250px'}} src="assets/images/people.png"/></div>
                                    <div className="card-block">
                                        <h4 className="card-title">Meet people everywhere</h4>
                                        <h5 className="card-subtitle">Make new friendships</h5>
                                        <p className="card-text">You can make new friendships with the people you meet during the journey.</p>
                                    </div>
                                </div>
                        </div>
                        </div>
                        <div className="mbr-cards-col col-xs-12 col-lg-4" style={{paddingtop: 80, paddingbottom: 80}}>
                            <div className="container">
                                <div className="card cart-block">
                                <div className="mbr-figure"><img  style={{width: '100px',height:'100px',marginLeft:'250px'}} src="assets/images/happy.png"/></div>
                                    <div className="card-block">
                                        <h4 className="card-title">Happy Traveling</h4>
                                        <h5 className="card-subtitle">Pleasure Peaople</h5>
                                        <p className="card-text">you can happily complete your journeys at any time and plan</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    </section>
                    <section className="mbr-section mbr-section__container article" id="header3-k" style={{backgroundcolor: 'rgb(244, 244, 244)',paddingtop: 60, paddingbottom: 0}}>
                    <div className="container">
                        <div className="row">
                            <div className="col-xs-12">
                                    <div className="mbr-arrow mbr-arrow-floating hidden-sm-down" aria-hidden="true"><a href="#uygulama2"><i className="mbr-arrow-icon"></i></a></div>
                                <h3 className="mbr-section-title display-2">UYGULAMAYA GENEL BAKIŞ</h3>
                            </div>
                        </div>
                    </div>
                    </section>

                 


                    <section className="mbr-section" id="pricing-table2-f-1" style={{backgroundcolor: 'rgb(255, 255, 255)', paddingtop: 120, paddingbottom: 120}}>
                    <div className="mbr-section mbr-section__container mbr-section__container--middle">
                    <div className="container">
                            <div className="mbr-section row">
                                    <div className="mbr-table-md-up">
                                        <div className="mbr-table-cell col-md-5 content-size text-xs-center text-md-right">
                                            <h3 className="mbr-section-title display-3">YOLCULLUK PAYLAŞIM UYGULAMASI</h3>
                                            <div className="mbr-section-text">
                                                <p>Uygulamayı Android ve IOS ta  ücretsiz olarak indirebilirsiniz.&nbsp;</p>
                                            </div>
                                            <div className="mbr-table-cell mbr-valign-top mbr-left-padding-md-up col-md-7 image-size" style={{width: '60%'}}>
                                                    <div ><img src="assets/images/badge-android.png"/> <img src="assets/images/app_store_icon.png"/></div>
                                            </div>
                                        </div>
                                        <div className="mbr-table-cell mbr-valign-top mbr-left-padding-md-up col-md-7 image-size" style={{width: '45%'}}>
                                            <div className="mbr-figure"><img src="assets/images/app-showcase.png"/></div>
                                        </div>
                                    </div>
                                </div>
                                <div className="mbr-arrow mbr-arrow-floating hidden-sm-down" aria-hidden="true"><a href="#msg-box3-g"><i className="mbr-arrow-icon"></i></a></div>
                    </div>
                    </div>
                    </section>
                    <section className="mbr-section article mbr-parallax-background" id="msg-box3-g" style={{backgroundimage: 'url(assets/images/mbr-5.jpg)', paddingtop: 120, paddingbottom: 120}}>

                    <div className="mbr-overlay" style={{opacity: 0.1, backgroundcolor: 'rgb(255, 255, 255)'}}>
                    </div>
                    <div className="container">
                        <div className="row">
                            <div className="col-md-8 col-md-offset-2 text-xs-center">
                                <h3 className="mbr-section-title display-2">ŞİMDİ İNDİRİN</h3>
                                
                                <div><a className="btn btn-black" href="#">IPHONE</a> <a className="btn btn-black" href="#">ANDROID</a></div>
                            </div>
                        </div>
                    </div>

                    </section>

                    <section className="mbr-section article" id="msg-box22-g" style={{paddingtop: 40, paddingbottom: 20}}>

                    <div className="mbr-overlay" style={{backgroundcolor: '#f4f4f4'}}>
                    </div>
                    <div className="container">
                        <div className="row">
                            <div className="col-md-8 col-md-offset-2 text-xs-center">
                                <p>(c) Devoloped by <a href="" style={{color:'#333',textdecoration:'underline'}}> YPU TEAM</a></p>
                            </div>
                        </div>
                    </div>

                    </section>
                </div>   
            </YpuProvider>
        )
    }
}
