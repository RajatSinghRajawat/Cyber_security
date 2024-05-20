import React, { useEffect } from 'react'
import { useState } from 'react';
import './Cybersecurity.css'
import CybertNav from './CybertNav'
import CyberFoot from './CyberFoot'
const CyberSignup = () => {
    const [showLogin, setShowLogin] = useState(true);

    const showLoginPage = () => {
        setShowLogin(true);
    };

    const showSignupPage = () => {
        setShowLogin(false);
    };
    const [count , setSign] = useState();

    useEffect(()=>{
        setSign("first")
    },[])
    return (
        <>
            <CybertNav />

            <div className="container Firstone">
                <div className='' style={{ marginLeft: "35%", marginTop: "5%" }}>
                    <button style={{ borderRadius: "0", transition: "2s all" }} onClick={showLoginPage}>Login</button>
                    <button className='' style={{ marginLeft: "2%", borderRadius: "0", transition: "2s all" }} onClick={showSignupPage}>Sign Up</button>
                </div>
                <h1 style={{ color: "#05FF00", borderBottom: "2px solid #05FF", width: "24%" }}>{showLogin ? 'Click to Login' : 'Click to Sign Up'}</h1>
                {showLogin ? (
                    <div>
                        <div className="container"  style={{display:count==="first"?"block":"none"}}>
                            <div className="row">
                                <div className="col-lg-6 lop" style={{ backgroundColor: "#1A2332" }}>
                                    <div className="signup-container">
                                        <img className="company-logo" style={{ borderBottom: "4px solid grey" }} src="https://s3-alpha-sig.figma.com/img/87d0/0420/ca01820e77d00238c521af3b63725cf3?Expires=1711929600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=QDO7mzpdjubAMCoqnpPcrPE72Utd77lvs8oP8eFQFxqaQDQprHpEpG9OblKtX5pBUveMrCz4J61Fhxr~senW-mRZK5LsYXjrr7jtrQQUlnw-maDISLqD9tQUpYA63WzGvP7WZUkDtxFTA8WTOwrnfNxAkdmuHmB7NP96Yh80G3S2srJYneOWfJNIjDhI5DUVERUSYLHw1iBEEDBi3o9T5asuAPt4YfFd3B34TpSsibCZHRhzy~6WgDFzrGO561Eum2Vl8fHd5i2YQnlUxTRxelgYkBxVwY-EJi1kiQcrG8yMzI4aJ1zndpjFobq-D4sFBi795a6hEFg5FFd4mBE4zw__" alt="Company Logo" />
                                        <div className="logo-background"></div>
                                        <div className="signup-content">
                                            <h2 className="signin-text1">Register</h2>
                                            <h3 className="signin-text">Sign in to continue to TIPS-G</h3>

                                        </div>
                                        <div className="signup-content1 " style={{ marginTop: "-20px" }}>
                                            <h2>Tips-G</h2>
                                            <button className='buttonsign'>Get Enrolled</button>

                                        </div>
                                        <form>
                                            <div className="mb-3 text-white">
                                                <label htmlFor="exampleInputEmail1" className="form-label">Full Name</label>
                                                <input type="email" className="form-control bgg text-white border-none" id="exampleInputEmail1" aria-describedby="emailHelp" />
                                            </div>
                                            <div className="mb-3 text-white">
                                                <label htmlFor="exampleInputEmail1" className="form-label">Username</label>
                                                <input type="email" className="form-control bgg text-white border-none" id="exampleInputEmail1" aria-describedby="emailHelp" />
                                            </div>
                                            <div className="mb-3 text-white">
                                                <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                                                <input type="email" className="form-control bgg text-white border-none" id="exampleInputEmail1" aria-describedby="emailHelp" />
                                            </div>
                                            <div className="mb-3 text-white">
                                                <label htmlFor="exampleInputEmail1" className="form-label"> Confirm Email </label>
                                                <input type="email" className="form-control bgg text-white border-none" id="exampleInputEmail1" aria-describedby="emailHelp" />
                                            </div>
                                            <div className="mb-3 text-white">
                                                <label htmlFor="exampleInputEmail1" className="form-label">Password</label>
                                                <input type="email" className="form-control bgg text-white border-none" id="exampleInputEmail1" aria-describedby="emailHelp" />
                                            </div>
                                            <div className="mb-3 text-white">
                                                <label htmlFor="exampleInputPassword1" className="form-label"> Confirm Password</label>
                                                <input type="password" className="form-control bgg text-white border-none" id="exampleInputPassword1" />
                                            </div>
                                            <div className="mb-3 form-check text-white">
                                                <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                                                <label className="form-check-label" htmlFor="exampleCheck1">Remember me</label>
                                            </div>
                                            <div className="mb-3 text-white">
                                                <label htmlFor="exampleInputPassword1" className="form-label"> country</label>
                                                <input type="password" className="form-control bgg text-white border-none" id="exampleInputPassword1" />
                                            </div>
                                            <div className="mb-3 text-white">
                                                <label htmlFor="exampleInputPassword1" className="form-label">Date of birth</label>
                                                <input type="password" className="form-control bgg text-white border-none" id="exampleInputPassword1" />
                                            </div>
                                            <button onClick={()=>{setSign("second")}} type="submit" style={{ width: "100%" }} className="">Register</button>
                                            <div className="mb-3 form-check text-white pt-4 ps-5">
                                                <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                                                <label className="form-check-label" htmlFor="exampleCheck1">E-mail me product updates and newsletters.</label>
                                            </div>
                                            <h1></h1>
                                        </form>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ) : (



                    <div className="container"  style={{display:count==="first"?"block":"none"}}>
                        <div className="row">
                            <div className="col-lg-6 lop" style={{ backgroundColor: "#1A2332" }}>
                                <div className="signup-container">
                                    <img className="company-logo" style={{ borderBottom: "4px solid grey" }} src="https://s3-alpha-sig.figma.com/img/87d0/0420/ca01820e77d00238c521af3b63725cf3?Expires=1711929600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=QDO7mzpdjubAMCoqnpPcrPE72Utd77lvs8oP8eFQFxqaQDQprHpEpG9OblKtX5pBUveMrCz4J61Fhxr~senW-mRZK5LsYXjrr7jtrQQUlnw-maDISLqD9tQUpYA63WzGvP7WZUkDtxFTA8WTOwrnfNxAkdmuHmB7NP96Yh80G3S2srJYneOWfJNIjDhI5DUVERUSYLHw1iBEEDBi3o9T5asuAPt4YfFd3B34TpSsibCZHRhzy~6WgDFzrGO561Eum2Vl8fHd5i2YQnlUxTRxelgYkBxVwY-EJi1kiQcrG8yMzI4aJ1zndpjFobq-D4sFBi795a6hEFg5FFd4mBE4zw__" alt="Company Logo" />
                                    <div className="logo-background"></div>
                                    <div className="signup-content">
                                        <h2 className="signin-text1">Register</h2>
                                        <h3 className="signin-text">Sign in to continue to TIPS-G</h3>

                                    </div>
                                    <div className="signup-content1 " style={{ marginTop: "-20px" }}>
                                        <h2>Tips-G</h2>
                                        <button className='buttonsign'>Get Enrolled</button>

                                    </div>
                                    <form >
                                        <div className="mb-3 text-white">
                                            <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                                            <input type="email" className="form-control bgg text-white" id="exampleInputEmail1" aria-describedby="emailHelp" />
                                        </div>
                                        <div className="mb-3 text-white">
                                            <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                                            <input type="password" className="form-control bgg text-white" id="exampleInputPassword1" />
                                        </div>
                                        <div className="mb-3 form-check text-white">
                                            <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                                            <label className="form-check-label" htmlFor="exampleCheck1">Remember me</label>
                                        </div>
                                        <button type="submit" onClick={()=>{setSign("second")}} style={{ width: "100%" }} className="btn btn-primary">Submit</button>
                                    </form>

                                </div>
                            </div>
                        </div>
                    </div>
                )}

            </div>
            <CyberFoot />
        </>
    )
}

export default CyberSignup

