import React from 'react';
import { Element, scroller } from 'react-scroll';
import "./../css/homepage.css";
import Typed from 'typed.js';
import Navbar from '../components/navbar';
import Footer from '../components/Footer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faUser,
  faPhone,
  faClock,
  faCalendarAlt,
  faMapMarkerAlt,
  faLaptop,
} from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import 'aos/dist/aos.css';
import AOS from 'aos';
import gifimage from "../Assests/WhiteModeLogo.gif";
import aboutme from "../Assests/aboutme.gif";
import contactus from '../Assests/contact_us.jpg';
import img1 from "../Assests/img1.jpg";
import img2 from "../Assests/img2.jpg";
import img3 from "../Assests/img3.jpg";
import img4 from "../Assests/img4.jpg";
import img5 from "../Assests/img5.jpg";
import img6 from "../Assests/img6.jpg";
import img7 from "../Assests/img7.jpg";
import img8 from "../Assests/img8.jpg";



function HomePage() {
  const el = React.useRef(null);
  React.useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ['Developer...', 'Programmer', 'Designer...'],
      typeSpeed: 110,
      loop: true,
      backSpeed: 70,
    });
    return () => {
      typed.destroy();
    };
  }, []);
  const handleReadMoreClick = () => {
    scroller.scrollTo("aboutme", {
      duration: 800,
      delay: 0,
      smooth: "easeInOutQuart",
    });
  };

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    mobile: ''
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    setFormData({
      name: '',
      email: '',
      mobile: ''
    });
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  AOS.init();

  return (
    <>

      <Navbar />
      <div className="homepage_main">
        <Element name="home">
          <div className="homepage_landing_page">
            <div className='homepage_first'>
              <div className="homepage_image"  >
                <img className="homepage_img" src={gifimage} alt="profile_image" />
              </div>
              <div className='homepage_base'>
                <h3 className="homepage_text">hi there </h3>
                <div className="homepage_details">
                  <h1 className="homepage_about_text">I am a <span className="homepage_typed" ref={el} /></h1>
                </div>
                <a className='homepage_read_more' onClick={handleReadMoreClick} >read more</a>
              </div>
            </div>
          </div>
        </Element>
        <Element name="portfolio">
          <div className='homepage_portfolio'>
            <div className='homepage_portfolio_tagline' >
              <h2 className='homepage_tagline'
                data-aos="fade-up"
                data-aos-duration="800"
                data-aos-easing="ease-in-out"
                data-aos-mirror="true"
              >I have worked on </h2>
            </div>
            <div className='homepage_Portfolio_base' >
              <img

                data-aos="fade-down-right"
                data-aos-duration="1000"
                data-aos-offset="200"
                data-aos-easing="ease-in-out"
                data-aos-mirror="true"
                className="homepage_portfolio_images" src={img1} alt="portfolio_project" />
              <div className='homepage_portfolio_details'>
                <h1 data-aos="fade-right"
                  data-aos-duration="600"
                  data-aos-easing="ease-in-out"
                  data-aos-mirror="true">project title</h1>
                <p data-aos="fade-left"
                  data-aos-duration="700"
                  data-aos-easing="ease-in-out"
                  data-aos-mirror="true"
                >A portfolio page showcases a person's or company's best work and accomplishments. It typically includes a collection of projects, designs, or achievements, highlighting skills and expertise. Visitors can gain insight into the individual's capabilities and professional background, making it a valuable tool for career advancement and business growth.</p>
              </div>
            </div>
            <div className='right_homepage_Portfolio_base'>
              <div
                className='right_homepage_portfolio_details'>
                <h1 data-aos="fade-left"
                  data-aos-duration="600"
                  data-aos-easing="ease-in-out"
                  data-aos-mirror="true">project title</h1>
                <p data-aos="fade-right"
                  data-aos-duration="700"
                  data-aos-easing="ease-in-out"
                  data-aos-mirror="true"
                >A portfolio page showcases a person's or company's best work and accomplishments. It typically includes a collection of projects, designs, or achievements, highlighting skills and expertise. Visitors can gain insight into the individual's capabilities and professional background, making it a valuable tool for career advancement and business growth.</p>
              </div>
              <img
                data-aos="fade-down-left"
                data-aos-duration="1000"
                data-aos-offset="200"
                data-aos-easing="ease-in-out"
                data-aos-mirror="true"
                className="right_homepage_portfolio_images " src={img2} alt="portfolio_project" />
            </div>
            <div className='homepage_Portfolio_base'>
              <img
                data-aos="fade-down-right"
                data-aos-duration="1000"
                data-aos-offset="200"
                data-aos-easing="ease-in-out"
                data-aos-mirror="true"
                className="homepage_portfolio_images" src={img3} alt="portfolio_project" />
              <div className='homepage_portfolio_details'>
                <h1 data-aos="fade-right"
                  data-aos-duration="600"
                  data-aos-easing="ease-in-out"
                  data-aos-mirror="true">project title</h1>
                <p data-aos="fade-left"
                  data-aos-duration="700"
                  data-aos-easing="ease-in-out"
                  data-aos-mirror="true"
                >A portfolio page showcases a person's or company's best work and accomplishments. It typically includes a collection of projects, designs, or achievements, highlighting skills and expertise. Visitors can gain insight into the individual's capabilities and professional background, making it a valuable tool for career advancement and business growth.</p>
              </div>
            </div>
            <div className='right_homepage_Portfolio_base'>
              <div className='right_homepage_portfolio_details'>
                <h1 data-aos="fade-left"
                  data-aos-duration="600"
                  data-aos-easing="ease-in-out"
                  data-aos-mirror="true">project title</h1>
                <p data-aos="fade-right"
                  data-aos-duration="700"
                  data-aos-easing="ease-in-out"
                  data-aos-mirror="true"
                >A portfolio page showcases a person's or company's best work and accomplishments. It typically includes a collection of projects, designs, or achievements, highlighting skills and expertise. Visitors can gain insight into the individual's capabilities and professional background, making it a valuable tool for career advancement and business growth.</p>
              </div>
              <img
                data-aos="fade-down-left"
                data-aos-duration="1000"
                data-aos-offset="200"
                data-aos-easing="ease-in-out"
                data-aos-mirror="true"
                className="right_homepage_portfolio_images" src={img7} alt="portfolio_project" />
            </div>
            <div className='homepage_Portfolio_base'>
              <img
                data-aos="fade-down-right"
                data-aos-duration="1000"
                data-aos-offset="200"
                data-aos-easing="ease-in-out"
                data-aos-mirror="true"
                className="homepage_portfolio_images" src={img5} alt="portfolio_project" />
              <div className='homepage_portfolio_details'>
                <h1 data-aos="fade-right"
                  data-aos-duration="600"
                  data-aos-easing="ease-in-out"
                  data-aos-mirror="true">project title</h1>
                <p data-aos="fade-left"
                  data-aos-duration="700"
                  data-aos-easing="ease-in-out"
                  data-aos-mirror="true"
                >A portfolio page showcases a person's or company's best work and accomplishments. It typically includes a collection of projects, designs, or achievements, highlighting skills and expertise. Visitors can gain insight into the individual's capabilities and professional background, making it a valuable tool for career advancement and business growth.</p>
              </div>
            </div>
            <div className='right_homepage_Portfolio_base'>
              <div className='right_homepage_portfolio_details'>
                <h1 data-aos="fade-left"
                  data-aos-duration="600"
                  data-aos-easing="ease-in-out"
                  data-aos-mirror="true">project title</h1>
                <p data-aos="fade-right"
                  data-aos-duration="700"
                  data-aos-easing="ease-in-out"
                  data-aos-mirror="true"
                >A portfolio page showcases a person's or company's best work and accomplishments. It typically includes a collection of projects, designs, or achievements, highlighting skills and expertise. Visitors can gain insight into the individual's capabilities and professional background, making it a valuable tool for career advancement and business growth.</p>
              </div>
              <img
                data-aos="fade-down-left"
                data-aos-duration="1000"
                data-aos-offset="200"
                data-aos-easing="ease-in-out"
                data-aos-mirror="true"
                className="right_homepage_portfolio_images" src={img8} alt="portfolio_project" />
            </div>
          </div>
        </Element>
        <Element name="aboutme">
          <div className='homepage_about'>
            <div className='homepage_about_main'>
              <div className='homepage_about_profile'>
                <img src={aboutme} alt="aboutus_animation" />
              </div>
              <div className='homepage_about_content'>
                <h3 className='homepage_about_discover'>Discover</h3>
                <h1 className='homepage_about_heading' >About Me</h1>
                <p className='homepage_about_paragraph'>
                  Embracing what's right over easy/popular, I fearlessly leave my comfort zone to achieve goals. Amid challenges, I stay focused and maintain loyalty to company culture, fostering trust and belonging. Balancing ambition with empathy, I pursue growth and strive for positive impact on my journey.

                </p>

                <div className='homepage_about_details'>
                  <ul className='homepage_about_list'>
                    <li>
                      <FontAwesomeIcon icon={faUser} /> Name: Pravas Kumar
                    </li>
                    <li>
                      <FontAwesomeIcon icon={faPhone} /> Phone No: 9348404629
                    </li>
                    <li>
                      <FontAwesomeIcon icon={faClock} /> Experience: 3 years
                    </li>
                  </ul>
                  <ul className='homepage_about_list'>
                    <li>
                      <FontAwesomeIcon icon={faCalendarAlt} /> Age: 22
                    </li>
                    <li>
                      <FontAwesomeIcon icon={faMapMarkerAlt} /> Address: Bengaluru
                    </li>
                    <li>
                      <FontAwesomeIcon icon={faLaptop} /> Freelance: Available
                    </li>
                  </ul>
                </div>
                <a
                  className="homepage_about_downloadcv"
                  href="./CV/pravascv.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Download CV
                </a>
              </div>

            </div>

          </div>
        </Element>
        <Element name="contactme">
          <div className='homepage_contact'>
            <div className='homepage_contact_base'>
              <div className='homepage_contact_image'>
                <img className='homepage_contact_img' src={contactus} alt="contact_us_image" />
              </div>
              <div className='homepage_contact_content'>
                <form onSubmit={handleSubmit} className='homepage_contact_form'>
                  <h1>
                    Get in touch
                  </h1>
                  <div className='homepage_contact_submitform'>
                    <div className='homepage_contact_field'>
                      <input
                        placeholder='enter your name'
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className='homepage_contact_field'>
                      <input
                        placeholder='enter your email id'
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className='homepage_contact_field'>
                      <input
                        placeholder='Enter your mobile no'
                        type="number"
                        id="mobile"
                        name="mobile"
                        value={formData.mobile}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <button type="submit">Contact Us</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </Element>
      </div>
      <Footer />
    </>
  );
}
export default HomePage;
