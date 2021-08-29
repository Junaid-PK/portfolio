import React, { Component } from 'react';
import Social from '../components/Social';
import Map from '../img/map.png';

class Contact extends Component {
    render() {
        return (
            <div className="condiv contact">
            <h1 className="subtopic">Contact Me</h1>
            <div className="hr_line line2 glass"><div className="inner2 inner3"></div></div>
            <div class="con_out glass"><iframe className="con1" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d26941.079984289456!2d73.5646572516392!3d32.428933912396495!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391f66a4a00f5537%3A0xa76e08e9cb994af0!2sPhalia%2C%20Mandi%20Bahauddin%2C%20Punjab%2C%20Pakistan!5e0!3m2!1sen!2s!4v1630121611413!5m2!1sen!2s" width="740" height="200"  allowfullscreen="" loading="lazy"></iframe></div>
            
            <a href="#"><div className="back3 glass">Download Resume</div></a>
            <a href="mailto:junaidhussnain369@gmail.com"><div className="back3 back4 glass">Contact Me</div></a>
            <div className="hr_line line3 glass"><div className="inner3"></div></div>
            <Social />
            </div>
            )
        }
    }
    
    export default Contact
    