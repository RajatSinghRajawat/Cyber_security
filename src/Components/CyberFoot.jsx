import React from 'react'
import './Cybersecurity.css'
const CyberFoot = () => {
    return (
        <>
            <section style={{ overflowX: 'hidden' }}>
                <footer>
                    <div className="container-fluid pt-5">
                        <div className="row">
                            <div className="col-lg-4 col-sm-12">
                                <div className="card" style={{ background: 'none', border: 'none' }}>
                                    <div style={{ display: 'flex', justifyContent: 'center', alignContent: 'center' }}>
                                        <a className="navbar-brand tps" href="#">TIPS-G</a>
                                        <a className="nav-link active cyss" aria-current="page" href="#">Cyber-Security</a>
                                    </div>
                                    <div className="ps-3 pt-3" style={{ display: 'flex', marginLeft: '90px' }}>
                                        <i className="fa-solid fa-phone" style={{ color: '#05FF00', fontSize: '20px' }}></i>
                                        <p style={{ paddingLeft: '15px', color: '#a8a6a6' }}>+91 7020609101 </p>
                                    </div>
                                    <div className="ps-3" style={{ display: 'flex', marginLeft: '90px' }}>
                                        <i className="fa-solid fa-location-dot" style={{ color: '#05FF00', fontSize: '20px' }}></i>
                                        <p style={{ paddingLeft: '15px', color: '#a8a6a6', textAlign: 'start' }}>
                                            +101-201-301, Chanda Tower, Girnar Colony, <br /> Gandhi Path Road, Vaishali Nagar, <br /> Jaipur - 302021
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-2 col-sm-12">
                                <div className="card" style={{ background: 'none', border: 'none' }}>
                                    <div className="allco">
                                        <a href="" className="allcc">All Courses</a><br />
                                        <a href="#" className="allcc" style={{ fontSize: '16px' }}>Specialized Course</a><br />
                                        <a href="#" className="allcc">Certifications</a><br />
                                        <a href="#" className="allcc">Services</a><br />
                                        <a href="#" className="allcc">Contact Us</a><br />
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-sm-12">
                                <div className="card" style={{ background: 'none', border: 'none' }}>
                                    <div className="allco">
                                        <a href="" className="allcc">About Us</a><br />
                                        <a href="#" className="allcc">News and Blog</a><br />
                                        <a href="#" className="allcc">Franchise</a><br />
                                        <a href="#" className="allcc">Testimonials</a><br />
                                        <a href="#" className="allcc">FAQ</a><br />
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 m-auto col-sm-12">
                                <div className="card" style={{ background: 'none', border: 'none', margin: '50px' }}>
                                    <div className="d-flex" role="search">
                                        <a href="" className="si" type="submit">Sign in</a>
                                        <button className="btn btn-outline-success gt" style={{ marginLeft: '2px' }} type="submit">Get Enrolled</button>
                                    </div>
                                    <div className="pt-1">
                                        <a href="#" style={{ color: '#FFF', fontFamily: 'Archivo', fontSize: '19px' }}>Download Application</a>
                                    </div>
                                    <div className="ps-3 pt-1" style={{ display: 'flex' }}>
                                        <i className="fa-brands fa-google-play" style={{ color: '#05FF00', fontSize: '28px', paddingLeft: '20px' }}></i>
                                        <i className="fa-brands fa-app-store-ios" style={{ color: '#05FF00', fontSize: '28px', paddingLeft: '33px' }}></i>
                                    </div>
                                    <div>
                                        <p style={{ color: '#FFF', fontSize: '19px', fontFamily: 'Archivo', paddingTop: '15px', paddingLeft: '40px' }}>Follow Us :</p>
                                    </div>
                                    <div style={{ display: 'flex', color: '#05FF00' }}>
                                        <i className="fa-brands fa-square-instagram" style={{ fontSize: '28px', paddingLeft: '10px' }}></i>
                                        <i className="fa-brands fa-square-facebook" style={{ fontSize: '28px', paddingLeft: '30px' }}></i>
                                        <i className="fa-brands fa-linkedin" style={{ fontSize: '28px', paddingLeft: '30px' }}></i>
                                        <i className="fa-brands fa-youtube" style={{ fontSize: '28px', paddingLeft: '30px' }}></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row pt-3">
                            <div className="col-lg-9 mx-auto">
                                <div className="terms" style={{ display: 'flex', flexWrap: 'wrap' }}>
                                    <p style={{ paddingLeft: '80px' }}>
                                        2023 © TIPS-G Cybersecurity
                                    </p>
                                    <p style={{ paddingLeft: '40px' }}>Terms of Service</p>
                                    <p style={{ paddingLeft: '40px' }}>Privacy Policy</p>
                                    <p style={{ paddingLeft: '40px' }}>Acceptable Use Policy</p>
                                    <p style={{ paddingLeft: '40px' }}>FAQ</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </footer>
            </section>
        </>
    )   
}

export default CyberFoot