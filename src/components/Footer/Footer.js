import "./Footer.css";
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer id="footer" className="footer">
            <div className="footer-contact-info">
                <h1 className="footer-heading">Connect With Me</h1>
                <p className="footer-contact-access">Email: dengyue@usc.edu</p>
                <p className="footer-contact-access">Mobile: 213-793-0025</p>
            </div>
            <div>
            </div>
        </footer>
    )
}

export default Footer;