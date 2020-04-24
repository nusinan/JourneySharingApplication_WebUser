import React, { Component } from 'react'
import {YpuProvider} from '../context';
import img1 from '../assets/images/f-mwo-dznni-averie-woodard-2000x2000.jpg';
import img2 from '../assets/images/mbr-2000x1333.png';
import Profil from './ProfileComponents/Profil';
import {BrowserRouter as Router,Link,Redirect} from "react-router-dom";

export default class HomePage extends Component {
    constructor(props){
        super(props)
        const token = localStorage.getItem('jwt');
        
        let loggedIn =true;
        if(token==null){
      
            loggedIn =false;
        }
        this.state={loggedIn}
      }
   

    render() {
        if(this.state.loggedIn===false){
            return <Redirect to="/Login"/>
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
                                        <li className="nav-item"><a className="nav-link link mbr-editable-menu-item" href="index.html"><h6><b>Anasayfa</b></h6> </a></li>
                                        <li className="nav-item"><a className="nav-link link mbr-editable-menu-item" href="yolculukara.html"><h6><b>Yolculuk Ara</b></h6> </a></li>
                                        <li className="nav-item"><a className="nav-link link mbr-editable-menu-item" href="ilanver.html"><h6><b>Yolculuk ilanı ver</b></h6></a></li>
                                       
                                        <li className="nav-item nav-btn"><a ><Link className="nav-link btn btn-white btn-white-outline mbr-editable-menu-item" to = "/profile">Profile</Link></a></li>
                                        <li className="nav-item nav-btn"><a ><Link className="nav-link btn btn-white btn-white-outline mbr-editable-menu-item" to = "/logout">logout</Link></a></li>
                                        </ul>
                                        
                                    </div>
                                    <div className="mbr-table-cell">
                                        <ul className="nav-dropdown collapse nav  navbar-toggleable-sm pull-xs-right">
                                        <li className="nav-item dropdown show ">
                                            <a className="nav-link link dropdown-toggle navbar-nav" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Daha Fazlası</a>
                                            <div class="dropdown-menu" aria-labelledby="dropdownMenuLink">
                                                <a className="dropdown-item mbr-editable-menu-item nav-bgc" href="#">Hakkımızda</a>
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
                                    <h4 className=" display-3 "  style={{ color:'rgb(71, 85, 119)'}}> NEREYE GİTMEK İSTİYORSUNUZ </h4>
                                    
                                    <h4 className="mbr-section-title display-3"> YOLCULUK ARA </h4>
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
                                        <div className="card-block"><p>“its really very amazing app that makes me finish html page in 3 minutes ( that's usually takes more than 1 hours at least from me if i did it from scratch). i hope to have very big library and plugins for this APP thanks again for your nice application”</p></div>
                                        <div className="mbr-author card-footer">
                                            <div className="mbr-author-img"><img src="assets/images/ellejmi6dqy-abigail-sisson-160x160.jpg" className="img-circle"/></div>
                                            <div className="mbr-author-name">Abanoub S.</div>
                                            
                                        </div>
                                    </div>
                                    <div className="mbr-arrow mbr-arrow-floating hidden-sm-down" aria-hidden="true"><a href="#pricing-table2-f"><i className="mbr-arrow-icon"></i></a></div>
                                </div>
                                
                                <div className="col-xs-12 col-lg-4">

                                    <div className="mbr-testimonial card mbr-testimonial-lg">
                                        <div className="card-block"><p>“First of all hands off to you guys for your effort and nice, super tool. Good work mobirise team. We are expecting the new version soon with advance functionality with full bootstrap design. Great effort and super UI experience with easy drag &amp; drop with no time design bootstrap builder in present web design world.”</p></div>
                                        <div className="mbr-author card-footer">
                                            <div className="mbr-author-img"><img src="assets/images/fcuj-bvjrrs-alicja-koczaska-160x160.jpg" className="img-circle"/></div>
                                            <div className="mbr-author-name">Suffian A.</div>
                                            
                                        </div>
                                    </div>
                                </div><div className="col-xs-12 col-lg-4">

                                    <div className="mbr-testimonial card mbr-testimonial-lg">
                                        <div className="card-block"><p>“At first view, looks like a nice innovative tool, i like the great focus and time that was given to the responsive design, i also like the simple and clear drag and drop features. Give me more control over the object's properties and ill be using this tool for more serious projects. Regards.”</p></div>
                                        <div className="mbr-author card-footer">
                                            <div className="mbr-author-img"><img src="assets/images/fqkbxo2nkq0-sticker-mule-160x160.jpg" className="img-circle"/></div>
                                            <div className="mbr-author-name">Jhollman C.</div>
                                            
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
                                    
                                    <div className="card-img"><img src="assets/images/p1.png" className="card-img-top"/></div>
                                    
                                    <div className="mbr-plan-list"><ul className="list-group list-group-flush"><li className="list-group-item">Daria Volkova</li><li className="list-group-item"><label>Başlangış: </label>Kiev</li><li className="list-group-item"><label>Hedef: </label>Odessa</li><li className="list-group-item"><label>Hareket Saati: </label>15:30 da</li></ul></div>
                                    <div className="mbr-plan-btn"><a href="#" className="btn btn-black btn-black-outline">Göz at</a></div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xs-12 col-md-6 col-xl-4">
                                <div className="mbr-plan card text-xs-center">
                                        <div className="mbr-plan-header card-block">
                                    
                                                <div className="card-img"><img src="assets/images/p1.png" className="card-img-top"/></div>
                                            
                                                <div className="mbr-plan-list"><ul className="list-group list-group-flush"><li className="list-group-item">Daria Volkova</li><li className="list-group-item">Kiev</li><li className="list-group-item">Odessa</li><li className="list-group-item">15:30 da</li></ul></div>
                                                <div className="mbr-plan-btn"><a href="#" className="btn btn-black btn-black-outline">Göz at</a></div>
                                            </div>
                                    
                                </div>
                                
                            </div>
                            <div className="col-xs-12 col-md-6 col-xl-4">
                                <div className="mbr-plan card text-xs-center">
                                        <div className="mbr-plan-header card-block">
                                    
                                                <div className="card-img"><img src="assets/images/p1.png" className="card-img-top"/></div>
                                            
                                                <div className="mbr-plan-list"><ul className="list-group list-group-flush"><li className="list-group-item">Daria Volkova</li><li className="list-group-item">Kiev</li><li className="list-group-item">Odessa</li><li className="list-group-item">15:30 da</li></ul></div>
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
                                    <div className="card-img iconbox"><a href="https://mobirise.com" className="mbri-hearth mbr-iconfont mbr-iconfont-features4" style={{color: 'rgb(233, 165, 211)'}}></a></div>
                                    <div className="card-block">
                                        <h4 className="card-title">Made with love</h4>
                                        <h5 className="card-subtitle">Bootstrap 4 has been noted</h5>
                                        <p className="card-text">Bootstrap 4 has been noted as one of the most reliable and proven frameworks and Mobirise has been equipped to develop websites using this framework.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="mbr-cards-col col-xs-12 col-lg-4" style={{paddingtop: 80, paddingbottom: 80}}>
                            <div className="container">
                                <div className="card cart-block">
                                    <div className="card-img iconbox"><a href="https://mobirise.com" className="mbri-globe-2 mbr-iconfont mbr-iconfont-features4" style={{color: 'rgb(39, 170, 224)'}}></a></div>
                                    <div className="card-block">
                                        <h4 className="card-title">Meet people everywhere</h4>
                                        <h5 className="card-subtitle">One of Bootstrap 4's big points</h5>
                                        <p className="card-text">One of Bootstrap 4's big points is responsiveness and Mobirise makes effective use of this by generating highly responsive website for you.</p>
                                    </div>
                                </div>
                        </div>
                        </div>
                        <div className="mbr-cards-col col-xs-12 col-lg-4" style={{paddingtop: 80, paddingbottom: 80}}>
                            <div className="container">
                                <div className="card cart-block">
                                    <div className="card-img iconbox"><a href="https://mobirise.com" className="mbri-smile-face mbr-iconfont mbr-iconfont-features4" style={{color: 'rgb(193, 193, 193)'}}></a></div>
                                    <div className="card-block">
                                        <h4 className="card-title">Web Fonts</h4>
                                        <h5 className="card-subtitle">Google has a highly exhaustive list of fonts</h5>
                                        <p className="card-text">Google has a highly exhaustive list of fonts compiled into its web font platform and Mobirise makes it easy for you to use them on your website easily and freely.</p>
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

                    <section className="mbr-section article mbr-section__container" id="content1-j" style={{backgroundcolor: 'rgb(244, 244, 244)', paddingtop: 20, paddingbottom: 20}}>

                    <div className="container">
                        <div className="row">
                            <div className="col-xs-12 lead">This app is so cool and great and helps to solve so many problems. Ut elementum hendrerit semper. In consectetur mauris ut mi vulputate, eget finibus dui dapibus. Donec porttitor interdum gravida. Vestibulum sagittis, ex vitae sollicitudin mattis, elit neque mattis augue, eget fringilla libero sem eget ante. Nulla non maximus quam.&nbsp;</div>
                        </div>
                        
                        
                    </div>

                    </section>

                    <section className="mbr-cards mbr-section mbr-section-nopadding" id="features1-e" style={{backgroundcolor:'rgb(244, 244, 244)'}}>
                    <div className="mbr-cards-row row striped" id="uygulama2">
                        <div className="mbr-cards-col col-xs-12 col-lg-3" style={{paddingtop: 60, paddingbottom: 60}}>
                            <div className="container">
                                <div className="card cart-block">
                                    <div className="card-img"><img src="assets/images/interface-screenshot0-1.jpg" className="card-img-top"/></div>
                                    <div className="card-block">
                                        <h4 className="card-title">Cool notifications</h4>
                                        <h5 className="card-subtitle">Boostrap</h5>
                                        <p className="card-text">Bootstrap 4 has been noted as one of the most reliable and proven frameworks and Mobirise has been equipped to develop websites using this framework.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="mbr-cards-col col-xs-12 col-lg-3" style={{paddingtop: 60, paddingbottom: 60}}>
                            <div className="container">
                                <div className="card cart-block">
                                    <div className="card-img"><img src="assets/images/interface-screenshot2.jpg" className="card-img-top"/></div>
                                    <div className="card-block">
                                        <h4 className="card-title">Responsive</h4>
                                        <h5 className="card-subtitle">One of Bootstrap 4's big points</h5>
                                        <p className="card-text">One of Bootstrap 4's big points is responsiveness and Mobirise makes effective use of this by generating highly responsive website for you.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="mbr-cards-col col-xs-12 col-lg-3" style={{paddingtop: 60, paddingbottom: 60}}>
                            <div className="container">
                                <div className="card cart-block">
                                    <div className="card-img"><img src="assets/images/interface-screenshot1.jpg" className="card-img-top"/></div>
                                    <div className="card-block">
                                        <h4 className="card-title">Web Fonts</h4>
                                        <h5 className="card-subtitle">Google has a highly exhaustive list of fonts</h5>
                                        <p className="card-text">Google has a highly exhaustive list of fonts compiled into its web font platform and Mobirise makes it easy for you to use them on your website easily and freely.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="mbr-cards-col col-xs-12 col-lg-3" style={{paddingtop: 60, paddingbottom: 60}}>
                            <div className="container">
                                <div className="card cart-block">
                                    <div className="card-img"><img src="assets/images/interface-screenshot3.jpg" className="card-img-top"/></div>
                                    <div className="card-block">
                                        <h4 className="card-title">Unlimited Sites</h4>
                                        <h5 className="card-subtitle">Mobirise gives you the freedom to develop</h5>
                                        <p className="card-text">Mobirise gives you the freedom to develop as many websites as you like given the fact that it is a desktop app.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="mbr-arrow mbr-arrow-floating hidden-sm-down" aria-hidden="true"><a href="#pricing-table2-f-1"><i className="mbr-arrow-icon"></i></a></div>
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