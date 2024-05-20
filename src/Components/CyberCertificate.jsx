
import React from 'react'
import './Cybersecurity.css'
import img1 from '../imgs/book.png'
import img2 from '../imgs/coin.png'
import { ImFileText } from "react-icons/im";
import { FaGolfBallTee } from "react-icons/fa6";
import { FaClock } from "react-icons/fa";
import gr from '../imgs/gog.png'
import CybertNav from './CybertNav';
import CyberFoot from './CyberFoot';
import Card1 from '../imgs/image1.png';
import Card2 from '../imgs/image2.png';
import Card3 from '../imgs/image3.png';
import Card4 from '../imgs/image4.png';
import v11 from '../imgs/v1.png'
const CyberCertificate = () => {
    const Cer = [
        {
            imgM:Card1,
            Cerp: "EC Council is an international cybersecurity certification body, offering career-oriented training and certifications for IT professionals.",
            ButCer: "Learn More"
        },
        {
            imgM:Card2,
            Cerp: "EC Council is an international cybersecurity certification body, offering career-oriented training and certifications for IT professionals.",
            ButCer: "Learn More"
        },
        {
            imgM:Card3,
            Cerp: "EC Council is an international cybersecurity certification body, offering career-oriented training and certifications for IT professionals.",
            ButCer: "Learn More"
        },
        {
            imgM:Card4,
            Cerp: "EC Council is an international cybersecurity certification body, offering career-oriented training and certifications for IT professionals.",
            ButCer: "Learn More"
        },
    ]
    return (
        <>
            <CybertNav />
            <>
                <div className='container-fluid mt-4 p-3' style={{ backgroundColor: "#1A2332", color: "white" }}>
                    <center className='row ps-4 pe-4'>
                        <h1 className='S_head'>TIPS-G Certifications</h1>
                        <p className='S_p'>HTB Academy's hands-on certifications are designed to provide job proficiency on various cybersecurity roles. As ensured by up-to-date training material, rigorous certification processes and real-world exam lab environments, HTB certified individuals will possess deep technical competency in different cybersecurity domains.</p>
                    </center>
                </div>
                <div className='text-center mt-4'><button className='p-2 btn2'>Get Your Demo Class</button></div>
                <div className='container mt-5 Cer_1'>
                    <div className='row'>
                        <div className='col-lg-6 col-md-6 col-sm-12'>
                            <div className='d-flex justify-content-between '>
                            <img width={"35%"} height={"35%"} src={gr}></img>

                                <img width={"40%"} height={"40%"} src='https://s3-alpha-sig.figma.com/img/7874/3d36/1d24830b79b3273ea9f7fb83fca7c5b0?Expires=1710720000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=mgxp4S~acXmY~BemVGC5LBqMeCwuJ-QW-JE~9aYWgxRU7vFc-xSFrPAxvxT6GQ93~5AvJXsTB1FkOFTTX1d5uZe9Ov8HVk4UNqGdQpXlYhHkL-duF5pU7FDzmiIhDroRYml4pZ2mtibN-RTChwELoc6zeRpQKg63ryTYvGD8wc~WnZDCXpc1mYWMfjYObChH3BI0nZCxsTeNYa1ne4sPerIi4f6mIpdXywywJaaF8CMRGdVy0p7ORaGZqw5mgWGt-GVLhSuBRCuMldnMmqtiHZZB1exOpfCumEk8PG00RPwPNQExajwf6jYyOJqIOEVBPZpNYKdVVCp4QLxUUMWMYQ__'></img>
                            </div>
                            <h1 className='map_headAll text-white serr'>MDCS</h1>
                            <p className='Cer_p  text-white'>Master Diploma in Cyber Security</p>

                        </div>
                        <div className='col-lg-6 col-md-6 col-sm-12'>
                            <p>TIPS-G Certified</p>
                            <h4 className='mt-4 text-white'>Master Diploma in Cyber Security</h4>
                            <p className='S_p mt-4 text-white'>TIPS-G Master Diploma in Cyber Security is a highly hands-on certification that assesses the candidates’ hacking skills. TIPS-G Master Diploma in Cyber Security certification holders will possess technical competency in the ethical hacking and penetration testing domains at an intermediate level. They will also be able to assess the risk at which an infrastructure is exposed and compose a commercial-grade as well as actionable report.</p>


                        </div>

                    </div><hr />
                    <div className='row' style={{ borderTop: "2px solid grey", paddingTop: "20px" }}>
                        <div className='col-lg-8 col-md-8 col-sm-12'>
                            <div className='d-flex gap-5 text-white'>
                                <h4 className='Cer_icon'><ImFileText /> 12  Modules</h4>
                                <h4 className='Cer_icon'><FaGolfBallTee /> Internship Included</h4>
                                <h4 className='Cer_icon'><FaClock /> Duration : 1 Year</h4>
                            </div>


                        </div>
                        <div className='col-lg-4 col-md-4 col-sm-12 text-center'>
                            <button class="btnCer" type="submit">Download Brochure</button>


                        </div>

                    </div>

                </div>
                <div className='container mt-5 Cer_2'>
                    <div className='row'>
                        <div className='col-lg-6 col-md-6 col-sm-12'>
                            <div className='d-flex justify-content-between'>
                                <img width={"35%"} height={"35%"} src={gr}></img>
                                <img width={"40%"} height={"40%"} src="https://s3-alpha-sig.figma.com/img/7874/3d36/1d24830b79b3273ea9f7fb83fca7c5b0?Expires=1711324800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ZeB1kw~aO3Ydk5LP6RQ4ZDq9K6SVnjE8Yfl-VREIvzsO587HSp85HXk7uH7GxgelGNORZWR-R5lE1QTmELmXgy9cXzQ9lf9cjgr7SHJs9vRLSwDDWnpGJEyI-ubLNOLv1XSJgSbFyZTE6QfY2PMcE6W7V9qk30yYBCJT8tQ2eC9MhRlYH2bzUb9REX0XsJgY1NF5hiNwZUbyV9PQ6K4ekLduHru6jKf2QDDpdsSrCAhQQbNA27LpMegTPDuZb3g~fzScSiW5uGmUWdzJ~rk5mr~eysb0Y8q7kZMGdi1s9fF1GgMRCy7EScrgqP~YrHxTAuFEGRkgCp7FUQnC9hLyeQ__"></img>
                            </div>
                            <h1 className='map_headAll text-white serr'>MDCS</h1>
                            <p className='Cer_p text-white'>Master Diploma in Cyber Security</p>

                        </div>
                        <div className='col-lg-6 col-md-6 col-sm-12 text-white'>
                            <p>TIPS-G Certified</p>
                            <h4 className='mt-4'>Master Diploma in Cyber Security</h4>
                            <p className='S_p mt-4'>TIPS-G Master Diploma in Cyber Security is a highly hands-on certification that assesses the candidates’ hacking skills. TIPS-G Master Diploma in Cyber Security certification holders will possess technical competency in the ethical hacking and penetration testing domains at an intermediate level. They will also be able to assess the risk at which an infrastructure is exposed and compose a commercial-grade as well as actionable report.</p>


                        </div>

                    </div><hr />
                    <div className='row' style={{ borderTop: "2px solid grey", paddingTop: "20px" }}>
                        <div className='col-lg-8 col-md-8 col-sm-12'>
                            <div className='d-flex gap-5 text-white'>
                                <h4 className='Cer_icon'><ImFileText /> 12  Modules</h4>
                                <h4 className='Cer_icon'><FaGolfBallTee /> Internship Included</h4>
                                <h4 className='Cer_icon'><FaClock /> Duration : 1 Year</h4>
                            </div>


                        </div>
                        <div className='col-lg-4 col-md-4 col-sm-12 text-center'>
                            <button class="btnCer" type="submit">Download Brochure</button>


                        </div>

                    </div>

                </div>
                <div className='container-fluid mt-5 p-3' style={{ backgroundColor: "#1A2332" }}>
                    <center className='row ps-4 pe-4'>
                        <h1 className='S_head'>Professional Certifications</h1>
                        <p className='S_p'>HTB Academy's hands-on certifications are designed to provide job proficiency on various cybersecurity roles. As ensured by up-to-date training material, rigorous certification processes and real-world exam lab environments, HTB certified individuals will possess deep technical competency in different cybersecurity domains.</p>
                    </center>
                </div>
                <div className='container mt-5 mb-4'>
                    <div className='row'>

                        {
                            Cer.map((Cerr) => {
                                return (
                                    <div className='col-lg-6 col-md-6 col-sm-12'>
                                        <div className="card px-5 py-2 text-center mt-4" style={{ height: "290px", backgroundColor: "#1A2332" }}>
                                            <img style={{ width: "90%", height: "30%" }} src={Cerr.imgM} className="card-img-top" alt="..." />
                                            <div className="card-body">

                                                <p class="card-text Cer_map_p">{Cerr.Cerp}</p>
                                                <a href="#" className="btn btn-primary">{Cerr.ButCer}</a>
                                            </div>
                                        </div>
                                    </div>

                                )
                            })
                        }
                    </div>
                </div>
            </>
            <CyberFoot />
        </>
    )
}

export default CyberCertificate