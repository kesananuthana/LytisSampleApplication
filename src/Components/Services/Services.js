import React from 'react';
import './Services.css';
export default function Services(){
    return(
        < div className="our">
            <div className="services-page">
                <h1>Our Services</h1>
                <div className="services-container">
                    <div className="service-card">
                        <h2>Software Development:</h2>
                        <p> Bring your vision to life with our custom software solutions. Our skilled developers leverage the latest technologies to create robust, scalable applications designed for your specific requirements.</p>
                        <h2>IT Consulting:</h2>
                        <p> Navigate the complexities of technology with our expert guidance. We analyze your current systems, identify opportunities for improvement, and craft tailored strategies that drive growth and efficiency.</p>
                        <h2>Cloud Infrastructure Development:</h2>
                        <p>Enhance your business agility with our cloud solutions. We design and implement secure, flexible, and efficient cloud infrastructures that optimize performance and reduce costs.</p>
                        <h2>CI/CD Implementation:</h2>
                        <p>Streamline your software development process with our Continuous Integration and Continuous Deployment (CI/CD) services. We help automate your workflows, ensuring rapid delivery of high-quality software with reduced risk and improved collaboration.</p>
                        <h2>Comprehensive IT Services:</h2>
                        <p> From system integration to cybersecurity, our range of IT services ensures your technology landscape is not only functional but also future-proof.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}