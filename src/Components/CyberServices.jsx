import React from 'react'
import CybertNav from './CybertNav'
import CyberFoot from './CyberFoot'
import './Cybersecurity.css'
import vector from '../imgs/s14.png'
import { IoMdLock } from "react-icons/io";
import { MdOutlineSecurity } from "react-icons/md";
import { PiPencilCircleThin } from "react-icons/pi";
import { TfiFiles } from "react-icons/tfi";
import { GiTurtle } from "react-icons/gi";
import { SiMercedes } from "react-icons/si";
import { FaEarthOceania } from "react-icons/fa6";
import { IoMedalSharp } from "react-icons/io5";
import { FaWifi } from "react-icons/fa";
import { FaUserClock } from "react-icons/fa";
import Search from '../imgs/search.png'
const CyberServices = () => {
  const card = [
    {
      icon: <IoMdLock />,
      title: "Penetration Testing"
    },
    {
      icon: <MdOutlineSecurity />,
      title: "Penetration Testing"
    },
    {
      icon: <PiPencilCircleThin />
      ,
      title: "Penetration Testing"
    },
    {
      icon: <TfiFiles />
      ,
      title: "Penetration Testing"
    },
  ]
  const card1 = [
    {
      icon: <GiTurtle />,
      title: "Penetration Testing"
    },
    {
      icon: <SiMercedes />,
      title: "Penetration Testing"
    },
    {
      icon: <FaEarthOceania />

      ,
      title: "Penetration Testing"
    },
    {
      icon: <IoMedalSharp />

      ,
      title: "Penetration Testing"
    },
    {
      icon: <FaWifi />
      ,
      title: "Penetration Testing"
    },
    {
      icon: <FaUserClock />
      ,
      title: "Penetration Testing"
    },
    {
      icon: <PiPencilCircleThin />
      ,
      title: "Penetration Testing"
    },
    {
      icon: <TfiFiles />
      ,
      title: "Penetration Testing"
    },
  ]
  return (
    <>
      <CybertNav />
      <div className='container-fluid mt-4 p-3' style={{ backgroundColor: "#1A2332", color: "white" }}>
        <center className='row ps-4 pe-4'>
          <div className="landingpage12">
            <p className="landingpage13">Listen it from your Fellow students</p>
            <img className="vector-8-bh" style={{marginLeft:"22%"}} src={vector} />
          </div>
          <p className='S_p'>HTB Academy's hands-on certifications are designed to provide job proficiency on various cybersecurity roles. As ensured by up-to-date training material, rigorous certifications are designed to provide job proficiency on various cybersecurity roles. As ensured by up-to-date training material, rigorous  certification processes and real-world exam lab environments, HTB certified individuals will possess deep technical competency in different cybersecurity domains.</p>
        </center>
      </div>
      <div className='container'>
        <div className="row">
          {
            card.map((i) => {
              return (
                <div className="col-lg-3 mt-5 rounded-md" style={{ backgroundColor: "#1A2332", color: "white" }}>
                  <div className="card text-center first" style={{ backgroundColor: "#1A2332", color: "white", border: "none" }}>
                    <h1 style={{ color: "#05FF00", textAlign: "center" }}>{i.icon}</h1>
                    <div className="card-body">
                      <h5 className="card-title">{i.title}</h5>

                    </div>
                  </div>
                </div>
              )
            })
          }
        </div>
      </div>
      <div className='text-center'>
        <h1 style={{ color: "#05FF00" }}>Penetration Testing</h1>
        <p style={{ color: "white", textAlign: "center" }}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perferendis <br /> quibusdam pariatur accusamus, rem autem, facere minima distinctio deserunt quisquam <br /> tempore accusantium dignissimos culpa corrupti sint fuga similique quia at quo <br />nemo doloremque sed velit? Harum rerum quasi itaque unde sunt. Voluptatibus <br />necessitatibus sapiente eligendi amet quisquam? Iusto at nisi aliquid?</p>
      </div>
      <div className="container">
        <div className="row">
          {
            card1.map((i1) => {
              return (
                <div className="col-lg-3 mt-5 rounded-md" style={{}}>
                  <div className="card text-center first" style={{ backgroundColor: "#1A2332", color: "white" }}>
                    <h1 style={{ color: "#05FF00", textAlign: "center" }}>{i1.icon}</h1>
                    <div className="card-body">
                      <h5 className="card-title">{i1.title}</h5>
                      <p className="card-title text-center" style={{ color: "grey" }}>Lorem ipsum dolor sit amet  quisquam velit ipsa aliquid eaque! Ad quod optio pariatur.</p>
                      <div className='text-center mt-4'><button className=' p-1 '>Read more</button></div>

                    </div>
                  </div>
                </div>
              )
            })
          }
        </div>
      </div>
      <div className='text-center mt-5'>
        <h1 style={{ color: "#05FF00" }}>Security Auditing & Consultation</h1>
        <p style={{ color: "white", textAlign: "center" }}>Lorem necessitatibus sapiente eligendi amet quisquam? Iusto at nisi aliquid? <br />necessitatibus sapiente eligendi  </p>
      </div>
      <div className="container">
        <div className="row">
          {
            card1.map((i1) => {
              return (
                <div className="col-lg-3 mt-5 rounded-md" style={{}}>
                  <div className="card text-center first" style={{ backgroundColor: "#1A2332", color: "white" }}>
                    <h1 style={{ color: "#05FF00", textAlign: "center" }}>{i1.icon}</h1>
                    <div className="card-body">
                      <h5 className="card-title">{i1.title}</h5>
                      <p className="card-title text-center" style={{ color: "grey" }}>Lorem ipsum dolor sit amet  quisquam velit ipsa aliquid eaque! Ad quod optio pariatur.</p>
                      <div className='text-center mt-4'><button className=' p-1 '>Read more</button></div>

                    </div>
                  </div>
                </div>
              )
            })
          }
        </div>
      </div>
      <div className='text-center mt-5'>
        <h1 style={{ color: "#05FF00" }}>Security Auditing & Consultation</h1>
        <p style={{ color: "white", textAlign: "center" }}>Lorem necessitatibus sapiente eligendi amet quisquam? Iusto at nisi aliquid? <br />necessitatibus sapiente eligendi  </p>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-lg-4">
            <div class="card text-center first" style={{ backgroundColor: "#1A2332", color: "white", textAlign: "center", width: "80%" }}>
              <img style={{ width: "50%", marginLeft: "20%" }} src={Search} class="card-img-top" alt="..." />
              <div class="card-body">
                <h5 class="card-title">Forensic Acquisition & Extraction</h5>
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <div className='text-center mt-4'><button className=' p-1 '>Read more</button></div>

              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <h5 style={{ color: "#05FF00" }}>TIPS-G Cyber Security USES GLOBALLY REPUTED TOOLS & STANDARD FORENSIC TECHNIQUES.</h5>
            <p style={{ color: "white", textAlign: "ju" }}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vitae porro aliquam aperiam consequatur perferendis, adipisci deserunt tempora quo exercitationem! Quaerat nostrum consequatur fuga totam ut exercitationem labore expedita magnam dolorem odio ea possimus in suscipit perspiciatis maiores officiis error officiis error obcaecati optio tempore, ipsa, officiis error obcaecati optio tempore, ipsa, obcaecati optio tempore, ipsa, modi dolorum eveniet eaque. Eligendi, deleniti officia!</p>
          </div>
          <div className="col-lg-4">
            <div class="card text-center first" style={{ backgroundColor: "#1A2332", color: "white", textAlign: "center", width: "80%" }}>
              <img style={{ width: "50%", marginLeft: "20%" }} src={Search} class="card-img-top" alt="..." />
              <div class="card-body">
                <h5 class="card-title"><strong>Forensic Acquisition & Extraction</strong></h5>
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <div className='text-center mt-4'><button className=' p-1 '>Read more</button></div>

              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container mt-5 text-white ">
        <div className="row">
          <div className="col-12 col-md-12 col-lg-12 text-center">
            <h1 style={{ color: "#57F71E", fontWeight: "700" }}>See How We Can Secure Your Assets</h1>
            <h4 style={{ fontWeight: "500" }}>Let’s talk about how TIPS-G Cyber Security can solve your cybersecurity needs. Give us a <br /> call, send us an e-mail, or fill out the contact form below to get started.</h4>
          </div>

          <div className="col12 col-md-2 col-lg-1 mt-5"></div>
          <div className="col-12 col-md-6 col-lg-5">
            <label for="exampleInputEmail1" class="form-label">First Name</label>
            <input type="email" class="form-control bg-dark" id="exampleInputEmail1" aria-describedby="emailHelp" />
          </div>
          <div className="col-12 col-md-6 col-lg-5">
            <label for="exampleInputEmail1" class="form-label">Last Name</label>
            <input type="email" class="form-control bg-dark" id="exampleInputEmail1" aria-describedby="emailHelp" />
          </div>
          <div className="col-12 col-md-1 col-lg-1"></div>

          <div className="col12 col-md-2 col-lg-1"></div>
          <div className="col-12 col-md-6 col-lg-5 mt-3">
            <label for="exampleInputEmail1" class="form-label">Email</label>
            <input type="email" class="form-control bg-dark" id="exampleInputEmail1" aria-describedby="emailHelp" />
          </div>
          <div className="col-12 col-md-6 col-lg-5 mt-3">
            <label for="exampleInputPassword1" class="form-label">Phone Number</label>
            <input type="password" class="form-control bg-dark" id="exampleInputPassword1" />
          </div>
          <div className="col-12 col-md-1 col-lg-1"></div>


          <div className="col-12 col-md-1 col-lg-1"></div>
          <div className="col-12 col-md-10 col-lg-10 mt-3">
            <label for="exampleInputEmail1" class="form-label">Massage</label>
            <input type="email" class="form-control bg-dark" id="exampleInputEmail1" aria-describedby="emailHelp" />
          </div>
          <div className="col-12 col-md-1 col-lg-1"></div>

          <div className="col-12 col-md-12 col-lg-12 text-center mt-4 mb-5">
            <button style={{ backgroundColor: "#57F71E", width: "auto", color: "black", border: "none" }} class="btn  btn-lg px-5">
              Send Message
            </button>
          </div>

        </div>
      </div>
      <CyberFoot />
    </>
  )
}

export default CyberServices