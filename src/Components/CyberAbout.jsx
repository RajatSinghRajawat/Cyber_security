import React from 'react'
import './Cybersecurity.css'
import ayushis from '../imgs/ayushi1.jpeg'
import sohibs from '../imgs/sohib.jpeg'
import classe from '../imgs/class.jpeg'
import ayushi22 from '../imgs/ayshi2.jpeg'
import coin11 from '../imgs/coin1.png'
import coin12 from '../imgs/coin.png'
import coiin31 from '../imgs/coiin3.png'
import CybertNav from './CybertNav';
import CyberFoot from './CyberFoot';
import about1 from '../imgs/about.png'
const CyberAbout = () => {
    return (
        <>
            <CybertNav />
            <div>
                <div className="container">
                    <div className="row ms-5">
                        <div className="col-sm-12 col-md-6 col-lg-4 m-4">
                            <div>
                                <img className="imgs"
                                    src={about1}
                                    alt="" />
                            </div>
                        </div>
                        <div className="col-sm-12 col-md-6 col-lg-6">
                            <p className="contents">We are changing the old Education System</p>
                            <div>
                                <button type="button" style={{ backgroundColor: 'rgb(62, 226, 62)' }} className="btn">Course</button>
                                <button type="button" className="btn btn-light ms-4">Know More</button>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="container">
                    <div className="row">
                        <h1 className="h11"> <span className="spans2">Our</span> <span className="spans">Journey</span></h1>
                        <div className="col-sm-12 col-md-6 col-lg-6 mt-4">
                            <div>
                                <h1 className="meth2">01. Starting from the Dorm room:</h1>
                                <p className="meth3">RNS Group of Companies started as a small dorm room IT <br /> Company back in 2016, in Jaipur.
                                    The Company also faced <br /> a critical shortage of skilled and affordable manpower in <br /> order to drive
                                    business from Colleges/Universities.</p>
                                <h1 className="meth2">02. Solving Manpower Crisis:</h1>
                                <p className="meth3">In order to solve the manpower crisis, RNS Group ran in the <br /> house On Job Training
                                    program by hiring freshers and <br /> making them skilled by training them on live projects and <br /> procure
                                    to produce manpower post-completion of Training.</p>
                                <h1 className="meth2">03. Success of OJT:</h1>
                                <p className="meth3">Our “On Job Training” program made a super hit in market <br /> and helped us to generate over
                                    120+ skilled in-house <br /> manpower at affordable prices. RNS Group of Companies <br /> grew from a family of
                                    6 to 120 in no time, with a valuation of <br /> $ 1 Million, in just one year.</p>
                                <h1 className="meth2">04. Birth of TIPS-G:</h1>
                                <p className="meth3">With the success of the OJT program, we find a huge <br /> difference in the Indian Educational
                                    System of theoretical <br /> learning and the application of that knowledge in the <br /> practical world. We
                                    are here to full fill this gap with our TIPS-G <br /> program, which empowered high school graduate <br />
                                    students to enroll in the corporate world and learn <br /> practically, without worrying about a formal
                                    education <br /> degree. Along with 100% placement assurance.</p>
                                <h1 className="meth2">05. Success of TIPS-G:</h1>
                                <p className="meth3">In less than 3 years in the market, TIPS-G has made a <br /> benchmark in the history of the
                                    Indian Educational System <br /> by training and placing more than 300+ students and <br /> having over 16+
                                    learning centers all over Rajasthan.</p>
                            </div>
                        </div>
                        <div className="col-sm-12 col-md-6 col-lg-5 m-4">
                            <div className="last1">
                                <div className="box1"><img style={{ width: '330px', height: '250px' }} src={ayushis} alt="" /></div>
                                <div className="box2"><img style={{ width: '330px', height: '250px' }} src={sohibs} alt="" /></div>
                                <div className="box3"><img style={{ width: '330px', height: '250px' }} src={classe} alt="" /></div>
                                <div className="box4"><img style={{ width: '330px', height: '250px' }} src={ayushi22} alt="" /></div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="container">
                    <div className="row">
                        <h1 className="h"> <span className="pink1">Our Secret to </span> <span className="pink">Success:</span></h1>
                        <div className="col-sm-12 col-md-6 col-lg-6 mt-4">
                            <p className="meth3">Your success is what matters to us, so we <br /> have created the simplest process which will <br /> lead you to your success, which includes:  <br /> Graduation degree from India’s Top most <br /> Universities, along with Guaranteed <br /> placements. In just 3 simple steps..</p>
                            <h1 className="meth2">1. Talent Hunt:</h1>
                            <p className="meth3">We conduct a talent hunt exam at the national level for 12th <br /> -pass students and enroll the selected students in our TIPS-G <br />  program according to their interests. <br />
                                <button type="button" className="btn1" style={{  height: '30px', marginLeft: '50%', backgroundColor: '#de8c10', color: '#633C02' }}>Know More</button>
                            </p>
                            <h1 className="meth2">2.Training:</h1>
                            <p className="meth3">After enrolling in their desired course, the students are given<br /> practical training from day one in the real working environment,<br /> which provides complete skill development to students. <br />
                                <button type="button" className="btn1" style={{  height: '30px', marginLeft: '50%', backgroundColor: '#de8c10', color: '#633C02' }}>Know More</button>
                            </p>
                            <h1 className="meth2">3. Placement:</h1>
                            <p className="meth3">As students complete their first 2 years of practical training <br />  with us. We ensure them with 1 year of Paid Internship and  <br /> Guaranteed Placement offers, along with their graduation <br />  degree.
                                <br />
                                <button type="button" className="btn1" style={{  height: '30px', marginLeft: '50%', backgroundColor: '#de8c10', color: '#633C02' }}>Know More</button>
                            </p>
                        </div>
                        <div className="col-sm-12 col-md-6 col-lg-6 mt-4">
                            <div className="last1">
                                <div className="box1"><img style={{ width: '330px', height: '250px' }} src={coin11} alt="" /></div>
                                <div className="box2"><img style={{ width: '330px', height: '250px' }} src={coin12} alt="" /></div>
                                <div className="box3"><img style={{ width: '330px', height: '250px' }} src={coiin31} alt="" /></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <CyberFoot />
        </>
    )
}

export default CyberAbout