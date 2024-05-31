import React, { useState } from 'react';
import './Cybersecurity.css';
import CybertNav from './CybertNav';
import CyberFoot from './CyberFoot';
import signimg from '../imgs/signs.jpg'

const CyberSignup = () => {
    const [showLogin, setShowLogin] = useState(true);
    const [count, setSign] = useState("first");

    const showLoginPage = () => setShowLogin(true);
    const showSignupPage = () => setShowLogin(false);

    return (
        <>
            <CybertNav />
            <div className="container container-sign">
                <div className="button-group-sign">
                    <button className="nav-button-sign" onClick={showLoginPage}>Login</button>
                    <button className="nav-button-sign" onClick={showSignupPage}>Sign Up</button>
                </div>
                <h1 className="page-title-sign">{showLogin ? 'Click to Login' : 'Click to Sign Up'}</h1>
                <div className={`container form-section-sign ${count === "first" ? "show" : "hide"}`}>
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="form-wrapper-sign">
                                <img 
                                    className="form-logo-sign" 
                                    src={signimg}
                                    alt="Company Logo" 
                                />
                                <div className="form-header-sign text-center">
                                    <h2 className="form-title-sign">{showLogin ? 'Login' : 'Register'}</h2>
                                    <h3 className="form-subtitle-sign">{showLogin ? 'Sign in to continue to TIPS-G' : 'Sign up to join TIPS-G'}</h3>
                                </div>
                                <form>
                                    {showLogin ? (
                                        <>
                                            <div className="form-group-sign">
                                                <label htmlFor="loginEmail" className="form-label-sign">Email address</label>
                                                <input type="email" className="form-control-sign" id="loginEmail" aria-describedby="emailHelp" />
                                            </div>
                                            <div className="form-group-sign">
                                                <label htmlFor="loginPassword" className="form-label-sign">Password</label>
                                                <input type="password" className="form-control-sign" id="loginPassword" />
                                            </div>
                                            <div className="form-check-sign">
                                                <input type="checkbox" className="form-check-input-sign" id="loginRememberMe" />
                                                <label className="form-check-label-sign" htmlFor="loginRememberMe">Remember me</label>
                                            </div>
                                            <button type="submit" onClick={() => setSign("second")} className="btn btn-primary btn-sign">Submit</button>
                                        </>
                                    ) : (
                                        <>
                                            <div className="form-group-sign">
                                                <label htmlFor="signupFullName" className="form-label-sign">Full Name</label>
                                                <input type="text" className="form-control-sign" id="signupFullName" />
                                            </div>
                                            <div className="form-group-sign">
                                                <label htmlFor="signupUsername" className="form-label-sign">Username</label>
                                                <input type="text" className="form-control-sign" id="signupUsername" />
                                            </div>
                                            <div className="form-group-sign">
                                                <label htmlFor="signupEmail" className="form-label-sign">Email address</label>
                                                <input type="email" className="form-control-sign" id="signupEmail" />
                                            </div>
                                            <div className="form-group-sign">
                                                <label htmlFor="signupConfirmEmail" className="form-label-sign">Confirm Email</label>
                                                <input type="email" className="form-control-sign" id="signupConfirmEmail" />
                                            </div>
                                            <div className="form-group-sign">
                                                <label htmlFor="signupPassword" className="form-label-sign">Password</label>
                                                <input type="password" className="form-control-sign" id="signupPassword" />
                                            </div>
                                            <div className="form-group-sign">
                                                <label htmlFor="signupConfirmPassword" className="form-label-sign">Confirm Password</label>
                                                <input type="password" className="form-control-sign" id="signupConfirmPassword" />
                                            </div>
                                            <div className="form-group-sign">
                                                <label htmlFor="signupCountry" className="form-label-sign">Country</label>
                                                <input type="text" className="form-control-sign" id="signupCountry" />
                                            </div>
                                            <div className="form-group-sign">
                                                <label htmlFor="signupDOB" className="form-label-sign">Date of Birth</label>
                                                <input type="date" className="form-control-sign" id="signupDOB" />
                                            </div>
                                            <button type="submit" onClick={() => setSign("second")} className="btn btn-primary btn-sign">Register</button>
                                            <div className="form-check-sign">
                                                <input type="checkbox" className="form-check-input-sign" id="signupNewsletter" />
                                                <label className="form-check-label-sign" htmlFor="signupNewsletter">E-mail me product updates and newsletters.</label>
                                            </div>
                                        </>
                                    )}
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <CyberFoot />
        </>
    );
};

export default CyberSignup;
