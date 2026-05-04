import React from 'react';
import "./Footer.css";

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-main">
                <div class="footer-section">
                    <h2 class="footer-heading">ABOUT US</h2>
                    <p class="footer-paragraph">
                        The University of Jammu strives for Promoting preservation <br />
                        and integration of the cultural diversity of the region, state,{" "}
                        <br />
                        and country achieving world-class excellence in teaching <br /> and
                        knowledge transfer and making valuable contributions...
                    </p>
                    <div class="social-footer-icons">
                        <div className="socialmediabox">
                            <ul>
                                <li className="facebook">
                                    <a href="#">
                                        <i className="fa-brands fa-facebook-f"></i>
                                    </a>
                                </li>
                                <li className="linkedin">
                                    <a href="#">
                                        <i className="fa-brands fa-linkedin-in"></i>
                                    </a>
                                </li>
                                <li className="twitter">
                                    <a href="https://twitter.com/UniversityJammu">
                                        <i className="fa-brands fa-twitter"></i>
                                    </a>
                                </li>
                                <li className="youtube">
                                    <a href="#">
                                        <i className="fa-brands fa-youtube"></i>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="footer-section">
                    <h2 class="footer-heading">GET IN TOUCH</h2>
                    <p class="footer-paragraph">

                        <p>Email: helpdesk@jammuuniversity.ac.in</p>
                        <p>Address: University of Jammu, <br/>
                        Baba Saheb Ambedkar Road,<br/>
                        Jammu Tawi (J&K)-180006 (INDIA)</p>
                        <p>
                            Phone: 0191- 2435248,
                            <br /> 2435259,
                            <br /> 2453544,
                            <br />
                            2453588
                        </p>
                    </p>
                </div>
                <div class="footer-section">
                    <h2 class="footer-heading">USEFUL LINKS</h2>
                    <ul class="footer-links">
                        <li>
                            <a href="#">Online Wi-Fi/ Internet Form</a>
                        </li>
                        <li>
                            <a href="#">Seminar Hall Booking</a>
                        </li>
                        <li>
                            <a href="#">Anti Ragging</a>
                        </li>
                        <li>
                            <a href="#">RTI</a>
                        </li>
                        <li>
                            <a href="#">JUICCASH</a>
                        </li>
                        <li>
                            <a href="#">Vice Chancellor's Grievance Cell</a>
                        </li>
                    </ul>
                </div>
                <div class="footer-section1">
                    <h2 class="footer-heading">MEDIA GALLERY</h2>
                    <div className="grid-container">
                        <div className="grid-item">
                            <img src="images/gallery.jpg" alt="logo" />
                        </div>
                        <div className="grid-item">
                            <img src="images/gallery1.jpg" alt="logo" />
                        </div>
                        <div className="grid-item">
                            <img src="images/gallery2.jpg" alt="logo" />
                        </div>
                        <div className="grid-item">
                            <img src="images/gallery3.jpg" alt="logo" />
                        </div>
                        <div className="grid-item">
                            <img src="images/gallery4.jpg" alt="logo" />
                        </div>
                        <div className="grid-item">
                            <img src="images/gallery5.jpg" alt="logo" />
                        </div>
                    </div>
                </div>
            </div>

            <div className="quote">
                <h2>NEWSLETTERS</h2>
            </div>


            <div className="textarea">
                <div className="input-container">
                    <input type="text" placeholder="Your Name" />
                </div>
                <div className="input-container">
                    <input type="text" placeholder="Your Email" />
                </div>
                <div className="input-container">
                    <button className='btn-footter'>SUBSCRIBE</button>
                </div>
            </div>


            <div className="footer-copyright">
                <p>
                    &copy; {new Date().getFullYear()} University of Jammu, J & K.
                    Copyright ©. Designed & Developed by Hritick, Abhay & Usman.
                </p>
            </div>
        </footer>
    );
};

export default Footer;
