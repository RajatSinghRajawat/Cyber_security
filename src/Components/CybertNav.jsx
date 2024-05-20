import React from 'react'
import './Cybersecurity.css'
import { NavLink } from 'react-router-dom'
const CybertNav = () => {
    return (
        <>
          <h2 style={{ backgroundColor: "#05FF00", height: "40px", textAlign: "center", fontWeight: "900" }}>New Batches are Starting Soon!</h2>
            <nav className="navbar navbar-expand-lg m-5">
                <div className="container-fluid">
                    <a className="navbar-brand tp" href="tipgcyber.html">TIPS-G</a>
                    <button className="navbar-toggler bg-light" type="button" data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                        aria-label="Toggle navigation" style={{ color: "#FFF" }}>
                        <span className="navbar-toggler-icon" style={{ color: "#FFF" }}></span>
                    </button>
                    <NavLink to='/' className="nav-link active cy" aria-current="page">Cyber-Security</NavLink>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
                            <NavLink to='/courses' className="nav-link ac" aria-current="page">All Course</NavLink>
                            <NavLink to='/certificate' className="nav-link ac" aria-current="page">Certifications</NavLink>
                            <NavLink to='/services' className="nav-link ac" aria-current="page">Services</NavLink>
                            <NavLink to='/contact' className="nav-link ac" aria-current="page">Contact Us</NavLink>
                            <NavLink to='/about' className="nav-link ac" aria-current="page">About</NavLink>
                        </ul>
                        <form className="d-flex" role="search">
                            <NavLink to='/signup' className="si" type="submit">Sign in</NavLink>
                            <button className="btn btn-outline-success gt" type="submit">Get Enrolled</button>
                        </form>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default CybertNav