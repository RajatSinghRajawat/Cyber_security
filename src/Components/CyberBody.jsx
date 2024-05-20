import React from 'react'
import CybertNav from './CybertNav'
import CyberFoot from './CyberFoot'
import './Cybersecurity.css'
import vector from '../imgs/s14.png'
import group from '../imgs/Group 45.png'
import group1 from '../imgs/group.png'
import g from '../imgs/g1.png'
import r from '../imgs/Vector.png'
import vec1 from '../imgs/v1.png'
import vec2 from '../imgs/v2.png'
import track from '../imgs/watch.png'
import point from '../imgs/pointer.png'
import bdge from '../imgs/carbonbdge.png'
import bok from '../imgs/book.png'
import mn from '../imgs/man.png'
import lives from '../imgs/live.png'
import Rajawat from '../imgs/rajawat.jpg'
import Rajawat1 from '../imgs/rajawat2.jpg'
import Rajawat2 from '../imgs/rajawat3.jpg'
import one11 from '../imgs/one.png'
import one12 from '../imgs/one1.png'
const CyberBody = () => {

  const cards = [
    {
      img: vec1,
      title: "CPTS",
      p: "Certified Penetration Testing Specialist"

    },
    {
      img: g,
      title: "CPTS",
      p: "Certified Penetration Testing Specialist"

    },
    {
      img: r,
      title: "CPTS",
      p: "Certified Penetration Testing Specialist"

    },
    {
      img: vec2,
      title: "CPTS",
      p: "Certified Penetration Testing Specialist"

    },
  ]

  const carding = [
    {
      imgs: track,
      title: "Guided Courses",
      p: "Certified Penetration Testing Specialist"

    },
    {
      imgs: point,
      title: "CPTS",
      p: "Certified Penetration Testing Specialist"

    },
    {
      imgs: bdge,
      title: "CPTS",
      p: "Certified Penetration Testing Specialist"

    },
    {
      imgs: bok,
      title: "CPTS",
      p: "Certified Penetration Testing Specialist"

    },
    {
      imgs: mn,
      title: "CPTS",
      p: "Certified Penetration Testing Specialist"

    },
    {
      imgs: lives,
      title: "CPTS",
      p: "Certified Penetration Testing Specialist"

    },
  ]

  const Cardsperson = [
    {
      imgs: Rajawat,
      title: "Rajat Singh Rajawat"
    },
    {
      imgs: Rajawat1,
      title: "Rajat Singh Rajawat"
    },
    {
      imgs: Rajawat2,
      title: "Rajat Singh Rajawat"
    },
  ]
  const Cardsperson1 = [
    {
      imgs: "https://s3-alpha-sig.figma.com/img/24ee/ecee/f7e1436c985309c548f2f3e2900bd634?Expires=1711929600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=hygr4KBLsi0EqXThUK~2hVQW6B425nVrxeBMz2oCzqoZiMFpyD8TTL8bPzfQ9dnByxRDYn0cPp~vSbPRBl8m5SpAeq9jUmJe2lVrRngZQ2lGAU8X16HxDu0rGPR1CuE9V442eTBDMTdS0ocR8dFmZWNIINXyDpxWjnSfcKJuoO0Mu76kZHZJgjAwRt4Bhu~tStHCE1mzjdNN17mv0hISeBjmyek1xj5VgXDDM1S~aA1TGb2bT5hymlaAHE1b26yu1xTXmw1T4dSy0I42rSltNwboBVvBCLPXiMda1i9lIwUFyCyVlIdDHifHNS0xuTmhPFqDqlj2VXOhoM2myqa9jg__",
      title: "Nand Kisor Yadav",
      P: "Founder @ Tips-g",
      p1: "Greetings! I'm Nand Kishore Yadav, founder of TIPS-G, your guide to cybersecurity. With over a decade of hands-on experience, I've navigated the ever-evolving cyber landscape. TIPS-G is a culmination of my passion for simplifying cybersecurity.o cybersecurity. With over a decade of hands-on experience, I've navigated the ever-evolving cyber landscape. TIPS-G is a culmination of my passion for simplifying cybersecurity.o cybersecurity. With over a decade of hands-on experience, I've navigated the ever-evolving cyber landscape. TIPS-G is a culmination of my passion for simplifying cybersecurity."
    },
    {
      imgs: "https://s3-alpha-sig.figma.com/img/9cf7/4272/6a837fc86fd1aa66d194bbd78970d298?Expires=1711929600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=LZP68PXFCuBSIvubHVsE7pf3~fUHfR0LJvZfnOmSiirt~Rfymb4hxGNnkt~arNPvzEY2HKCJmHF4z3OO2BBIM9YvGs8DcufhPaDvU7wgFRkeS-lsvVkY4LW249Gjrw285rUUSI7IY3GW6~8nJBmaE6NLjxUaFmIFvOCNIAa95k74JHaC5S3o4xbBD50lBALGKWxRqwkhomX9T-rrZAbKhAGoeWqRHDXHZhunoLlr~b08L4vpKVt9WJXcWoAjJAi1loebX3aPd35FNnYxPBAEUC~vd~TaZoEJYEnN0GOgfJ-PU1uJhxuUv7nktqSAdgKihc0xO4UE~2F6fD1WFJMQ2w__",
      title: "Dinesh Kumar",
      P: "Security-Ananlyst",
      p1: "Hello, I'm Dinesh Kumar, a dedicated Security Analyst at TIPS-G Cyber Security. With a passion for ensuring digital landscapes remain secure, I bring a wealth of experience and expertise to the realm of cybersecurity."
    },
    {
      imgs: "https://s3-alpha-sig.figma.com/img/ddac/0ca8/663a5604c8e50d214768707850d8d991?Expires=1711929600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=q9NVUPeS~LkEwjQe~aamIyEC4g8dPn18Ngwu34fndqWAULa-l47-zOQhgdAAJ0W5Hqn6ySQvF3zCqp2RKmIJzrLa9ojIQU2K4Wxuo5cNs-Z7M0ORZZB2wPsvoysILoswo0XGYQ4k7N-4s~9qNfrAy46vb9JwsfVMj6pLOvuD7YpOM2R2qCfPlk-a7Bdgknj0plWgfTyfP2n3YAbVbQsHBqjAU83EpRTvSdVRFqgQes3svL5MLGSdD3i9xtzgw5ExcPwnl2V9DGcwifiDc9oWkX209B~iu~LdNL6yiKN03lvI2tV5w1NjY3Hp6~NwRgc4VqlsZd0PkDvojMwWKrXYWw__",
      title: "Deepak",
      P: "Security-Ananlyst"

    },
  ]
  return (
    <>
      <CybertNav />
      <div className='text-center'>
        <h1 className='landingpage0'>Your <span className='landingpage1'>cybersecurity</span> <br /> journey starts <span className='landingpage2'>here.</span></h1>
        <p className='landingpage3'>Develop your skills with guided training and prove your expertise with industry <br />
          certifications. Become a market-ready cybersecurity professional.</p>
        <button className='buttoning'>Get Enrolled</button>
      </div>
      <div className="container">
        <div className="row landingpage8">
          <div className='col-lg-3'></div>
          <div className='col-lg-3'>
            <div class="card landingpage4" >
              <img src={one11} style={{ position: "relative", top: "-42px" }} className="card-img-top" alt="..." />
              <div class="card-body">
                <h5 class="card-title"><span className='landingpage6'>Get certified with</span> <br /> <span className='landingpage5'>TIPS-G</span></h5>
                <p class="card-text text-center">Some quick example text to build on the the bulk of the card's content.</p>
                <h1 className='landingpage7'>Get Enrolled</h1>
              </div>
            </div>
          </div>
          <div className='col-lg-3'>
            <div class="card landingpage4" >
              <img src={one12} className="card-img-top " style={{ position: "relative", top: "-42px" }} alt="..." />
              <div class="card-body">
                <h5 class="card-title"><span className='landingpage6'>Master of Your</span> <br /> <span className='landingpage5'>TIPS-G</span></h5>
                <p class="card-text text-center">Some quick example text to build on the the bulk of the card's content.</p>
                <h1 className='landingpage7'>Get Enrolled</h1>
              </div>
            </div>
          </div>
          <div className='col-lg-3'></div>

        </div>
      </div>
      <div>
        <h1 className='landingpage9'>100+</h1>
        <div className="landingpage12">
          <p className="landingpage13">Learners advancing in cybersecurity.</p>
          <img className="vector-8-bhh" src={vector} />
        </div>
      </div>
      
      <div>
        <h1 className='landingpage14'>Get <span style={{ color: "#05FF00" }}>TIPS-G</span> certified</h1>
        <div className='but'>
          <button style={{ backgroundColor: "#05FF00", borderRadius: "8px", color: "white" }}>Online Course</button>
          <button style={{ color: "white", backgroundColor: "rgb(57, 57, 57)", borderRadius: "8px" }}>Ofline Course</button>
        </div>
      </div>
      <div className="container">
        <div className="row mt-5">
          <div className="col-lg-3"></div>
          <div className="col-lg-3">

            <div className='backgroundlanding'>
              <img src={group} alt="" />
            </div>


          </div>
          <div className="col-lg-3 ">
            <div className='backgroundlanding'>
              <img src={group1} alt="" />
            </div>
          </div>
          <div className="col-lg-3">
          </div>
        </div>
      </div>
      <div className="container mt-5">
        <div className="row">
          {
            cards.map((i) => {
              return (
                <div className="col-lg-3">
                  <div className="card bg" style={{ width: "100%", height: "100%" ,textAlign:"center" }}>
                    <img src={i.img} className="card-img-top h-full" style={{ height: "65%", width: "90%" , objectFit:"" }} alt="..." />
                    <div className="card-body">
                      <h5 className="card-title cardlanding">{i.title}</h5>
                      <p style={{ borderBottom: "2px solid grey" }}>{i.p}</p>
                      <div className='d-flex justify-between'>
                        <h6><img  src="https://s3-alpha-sig.figma.com/img/0804/57cd/522a2997c17193d2b47143d41e50a2e2?Expires=1710720000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=eLKh~~~AwD~DC4M5tn-a20zQHpK2ZMoEFREffxu91od~XTtzavWa~Uh4f3XrlPET0vSycF6ORR92kxNeHeo-XsC-BZ~bTZCmbcwhWwOSxniB-4qfltE9xioX-o7RrvgS3nDWH7YF9D3xMcZv-PjcUiUrq1VaxysTUJMX26hJ7DW0x6ysQgGZO8oS93Kkb7W33fLiyA2SQ-lRXGpqfNaA8DcNCBJIjEktby6n-z8v4LDRYXEX36gTYizAbn2nTk1JPCHu~q44EhIAPvl2U0F0nNPIplNiF-hm7F0AXtYmb4WQG89WoHNpEmJ8lNDB17e7hox6s8NLK2~e4N70UXv-6g__" alt="" />28 Modules</h6>
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
      <div className='landingpage17'>
        <div className='text-center'>
          <h1 className='landingpagw16'>Why TIPS-G <span style={{ color: "#05FF00" }}>Cyber-Security?</span></h1>
          <p style={{ color: "white" }}>Prepare for your future in cybersecurity with  interactive, guided training and industry
            certifications. <br />Learn the skills needed to stand out from the competition.</p>
        </div>

        <div className="container">
          <div className="row">
            {
              carding.map((indexs) => {
                return (
                  <div className="col-sm-12 col-md-6 col-lg-4 onm">
                    <div className='bg1'>
                      <img src={indexs.imgs} style={{ width: "10%", paddingTop: "20px" }} alt="" />
                      <h1 className='lgp1 pt-5'>{indexs.title}</h1>
                      <p className='lgp2'>For every skill level, from beginner to  advanced, Enhance your chances to make  a dream career in the field of cybersecurity </p>
                    </div>
                  </div>

                )
              })
            }
          </div>
        </div>
      </div>
      <div>
        <h1 className='lgp3'>Frequently Asked Questions</h1>
        <h1 className='lgp4'>FAQ</h1>
      </div>
      <div className='lgp6'>
        <div className='lgp7'>
          <h1 className='lgp5'>Frequently Asked Questions 1</h1>
          <p className='lgp8'>+</p>
        </div>
        <div className='lgp7'>
          <h1 className='lgp5'>Frequently Asked Questions 1</h1>
          <p className='lgp8'>+</p>
        </div>
        <div className='lgp7'>
          <h1 className='lgp5'>Frequently Asked Questions 1</h1>
          <p className='lgp8'>+</p>
        </div>
        <div className='lgp7'>
          <h1 className='lgp5'>Frequently Asked Questions 1</h1>
          <p className='lgp8'>+</p>
        </div>
        <div className='lgp7'>
          <h1 className='lgp5'>Frequently Asked Questions 1</h1>
          <p className='lgp8'>+</p>
        </div>
        <div className='lgp7'>
          <h1 className='lgp5'>Frequently Asked Questions 1</h1>
          <p className='lgp8'>+</p>
        </div>
      </div>
      <div>
        <div>
          <h1 className='landingpage9'>100+</h1>
          <div className="landingpage12">
            <p className="landingpage13">Listen it from your Fellow students</p>
            <img className="vector-8-bhh" src={vector} />
          </div>
        </div>
        <div className="container">
          <div className="row">
            {
              Cardsperson.map((Img) => {
                return (
                  <div className="col-lg-4 col-md-6 col-sm-12 main text-center">
                    <div className='d-flex align-center' style={{ borderBottom: "3px solid grey" }}>
                      <div>
                        <img style={{ borderRadius: "120px", width: "120px", height: "120px", border: "2px solid #05FF00" }} src={Img.imgs} alt="" />
                      </div>
                      <div style={{ paddingLeft: "5%", paddingTop: "5%" }}>
                        <h3 style={{ color: "white" }} className='IMGS1'>{Img.title}</h3>
                        <div className='d-flex'>
                          <i class="fa-solid fa-star" style={{ color: "#11f80d" }}></i>
                          <i class="fa-solid fa-star" style={{ color: "#11f80d" }}></i>
                          <i class="fa-solid fa-star" style={{ color: "#11f80d" }}></i>
                          <i class="fa-solid fa-star" style={{ color: "#11f80d" }}></i>
                          <i class="fa-solid fa-star" style={{ color: "#11f80d" }}></i>
                        </div>
                      </div>


                    </div>
                    <p className='IMGS2 pt-2 text-justify'>The TIPS-G Cybersecurity course exceeded my expectations. The hands-on approach, industry-relevant curriculum, and expert instructors provided a solid foundation. The practical skills gained have been invaluable. TIPS-G's commitment to excellence makes it the ideal choice for anyone serious about a career in cybersecurity.</p>
                  </div>
                )
              })
            }

          </div>
        </div>
      </div>
      <div>
        <h1 className='landingpage9'>100+</h1>
        <div className="landingpage12">
          <p className="landingpage13">Meet Our Team</p>
          <img className="vector-8-bhhh" src={vector} />
        </div>
      </div>
      <div className="container">
        <div className="row">
          {Cardsperson1.map((Imgg) => {
            return (
              <div className="col-lg-4 col-md-6 col-sm-12 main text-center">
                <img className='imging img-fluid' src={Imgg.imgs} alt="" /> {/* Added img-fluid for responsiveness */}
                <h1 className='nand'>{Imgg.title}</h1>
                <p style={{ color: "grey" }}>{Imgg.P}</p>
                <p style={{ color: "white", textAlign: "justify" }}>{Imgg.p1}.</p>
                <div className='ok12' style={{ display: 'flex', color: '#05FF00', justifyContent: 'center' }}> {/* Centered social icons */}
                  <i className="fa-brands fa-square-instagram" style={{ fontSize: '28px', margin: '0 5px' }}></i> {/* Adjusted padding to margin */}
                  <i className="fa-brands fa-square-facebook" style={{ fontSize: '28px', margin: '0 5px' }}></i>
                  <i className="fa-brands fa-linkedin" style={{ fontSize: '28px', margin: '0 5px' }}></i>
                  <i className="fa-brands fa-youtube" style={{ fontSize: '28px', margin: '0 5px' }}></i>
                </div>
              </div>
            )
          })}
        </div>
      </div>
      {/* <div className='last0'>
        <div>
          <h1 className='last'>Learn Cybersecurity,</h1>
          <h1 className='last1'>invest in your <span className='last2'>Career</span></h1>
        </div>
      </div> */}
      
<div class="container text-center  last0">
  <div class="row">
    <div class="col">
      <h1 class="display-4">Learn Cybersecurity,</h1>
      <h1 class="display-5">invest in your <span class="h2">Career</span></h1>
    </div>
  </div>
</div>
      <CyberFoot />

    </>
  )
}

export default CyberBody