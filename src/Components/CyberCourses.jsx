import React from 'react'
import CybertNav from './CybertNav'
import CyberFoot from './CyberFoot'
import './Cybersecurity.css'
import ser1 from '../imgs/s1.png'
import ser2 from '../imgs/s2.png'
import ser3 from '../imgs/s3.png'
import ser4 from '../imgs/s4.png'
import ser5 from '../imgs/s5.png'
import ser6 from '../imgs/s6.png'
import ser7 from '../imgs/s7.png'
import ser8 from '../imgs/s8.png'
import ser9 from '../imgs/s9.png'
import ser10 from '../imgs/s10.png'
import ser11 from '../imgs/s12.png'
const CyberCourses = () => {
  const cards = [
    {
      imgs: ser1,
      title: "MAPT",
      p: "Certified Penetration Testing Specialist"

    },
    {
      imgs: ser2,
      title: "CBBS",
      p: "Certified Penetration Testing Specialist"

    },
    {
      imgs: ser3,
      title: "CPTS",
      p: "Certified Penetration Testing Specialist"

    },
    {
      imgs: ser4,
      title: "CPTS",
      p: "Certified Penetration Testing Specialist"

    },
    {
      imgs: ser5,
      title: "CPTS",
      p: "Certified Penetration Testing Specialist"

    },
    {
      imgs: ser6,
      title: "CES",
      p: "Certified Penetration Testing Specialist"

    },
    {
      imgs: ser7,
      title: "CFS",
      p: "Certified Penetration Testing Specialist"

    },
    {
      imgs: ser7,
      title: "APT",
      p: "Certified Penetration Testing Specialist"

    },
    {
      imgs: ser8,
      title: "AWS",
      p: "Certified Penetration Testing Specialist"

    },
    {
      imgs: ser9,
      title: "IOT",
      p: "Certified Penetration Testing Specialist"

    },
    {
      imgs: ser10,
      title: "CPTS",
      p: "Certified Penetration Testing Specialist"

    },
    {
      imgs: ser11,
      title: "CPTS",
      p: "Certified Penetration Testing Specialist"

    },

  ]
  return (
    <>
      <CybertNav />
      <div className='container-fluid mt-4 p-3' style={{ backgroundColor: "#1A2332", color: "white" }}>
        <center className='row ps-4 pe-4'>
          <h1 className='S_head'>TIPS-G Certifications</h1>
          <p className='S_p'>HTB Academy's hands-on certifications are designed to provide job proficiency on various cybersecurity roles. As ensured by up-to-date training material, rigorous certification processes and real-world exam lab environments, HTB certified individuals will possess deep technical competency in different cybersecurity domains.</p>
        </center>
      </div>
      <div className='text-center mt-4'><button className='p-2 btn2'>Get Your Demo Class</button></div>
      <div className="container mt-5">
        <div className="row">
          {
            cards.map((i) => {
              return (
                <div className="col-lg-3">
                  <div className="card bg ones" >
                    <img src={i.imgs} className="card-img-top h-full" style={{ height: "45%", width: "90%", objectFit:"contain" }} alt="..." />
                    <div className="card-body">
                      <h5 className="card-title cardlanding">{i.title}</h5>
                      <p style={{ borderBottom: "2px solid grey" }}>{i.p}</p>
                      <div className='d-flex justify-between'>
                        <h6><img src="https://s3-alpha-sig.figma.com/img/0804/57cd/522a2997c17193d2b47143d41e50a2e2?Expires=1710720000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=eLKh~~~AwD~DC4M5tn-a20zQHpK2ZMoEFREffxu91od~XTtzavWa~Uh4f3XrlPET0vSycF6ORR92kxNeHeo-XsC-BZ~bTZCmbcwhWwOSxniB-4qfltE9xioX-o7RrvgS3nDWH7YF9D3xMcZv-PjcUiUrq1VaxysTUJMX26hJ7DW0x6ysQgGZO8oS93Kkb7W33fLiyA2SQ-lRXGpqfNaA8DcNCBJIjEktby6n-z8v4LDRYXEX36gTYizAbn2nTk1JPCHu~q44EhIAPvl2U0F0nNPIplNiF-hm7F0AXtYmb4WQG89WoHNpEmJ8lNDB17e7hox6s8NLK2~e4N70UXv-6g__" alt="" />28 Modules</h6>
                        <h6 className='ps-4'>🎖️Exam included</h6>
                      </div>

                    </div>
                  </div>
                </div>
              )
            })
          }

        </div>
      </div>
      <CyberFoot />
    </>
  )
}

export default CyberCourses