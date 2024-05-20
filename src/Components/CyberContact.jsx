import React from 'react'
import CybertNav from './CybertNav'
import CyberFoot from './CyberFoot'

const CyberContact = () => {
    return (
        <>
        <CybertNav/>
            <div style={{color:"white"}}>
                <h2>Contact Us</h2>
                <p>You can reach us at:</p>
                <ul>
                    <li>Email: contact@cybersecuritysite.com</li>
                    <li>Phone: 123-456-7890</li>
                </ul>
                <p>Our location:</p>
                <iframe
                    title="Company Location"
                    width="100%"
                    height="450"
                    loading="lazy"
                    allowFullScreen
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2887.126209964414!2d-79.39493538496094!3d43.72796517911827!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882b34d852d1a2f9%3A0x77a1e1394f6509cc!2sCybersecurity%20Company!5e0!3m2!1sen!2suk!4v1647344174323!5m2!1sen!2suk"
                ></iframe>
                <p>Our Office:</p>
                <img
                    src="https://www.officeinteriordesign.com.sg/wp-content/uploads/2021/02/xyrix-office-interior-design-and-renovation-project-workstations.jpg"
                    alt="Office"
                    style={{ maxWidth: '100%' }}
                />
            </div>
            <CyberFoot/>
        </>
    )
}

export default CyberContact