import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

const contact = () =>{
    return(
        <section id="contact" className="py-5">
            <div className="container">
                <h2>Contact Us</h2>
                <div className="row">
                    <div className="col-md-6">
                        <p>Contact us for any inquiries or to schedule a test drive.</p>
                        <ul>
                            <li>Address: Your Address</li>
                            <li>Phone: +1 (555) 123-4567</li>
                            <li>Email: info@example.com</li>
                        </ul>
                    </div>
                    <div className="col-md-6">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12345.67890!2d-74.005972!3d40.712776!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjnCsDE0JzE4LjYiTiA3NMKwMjAnNTIuNCJX!5e0!3m2!1sen!2sus!4v1637777777777!5m2!1sen!2sus" width="100%" height="300" style={{border:"0"}} allowfullscreen="" loading="lazy"></iframe>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default contact