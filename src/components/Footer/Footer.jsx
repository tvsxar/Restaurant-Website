import './Footer.scss';
import logo from '../../assets/logo/logo.svg';
import fb from '../../assets/socials/facebook.svg';
import tw from '../../assets/socials/twitter.svg';
import ig from '../../assets/socials/instagram.svg';

function Footer() {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-content">
                    <div className="footer-titles">
                        <img src={logo} alt="logo" className="footer-logo" />

                        <p className="copyrights">© 2018 Spoon Inc, All rights reserved.</p>
                    </div>

                    <div className="footer-navigation">
                        <nav className="nav-block">
                            <ul>
                                <li><a href="#!" className="nav-block-item">Features</a></li>
                                <li><a href="#!" className="nav-block-item">Premium</a></li>
                                <li><a href="#!" className="nav-block-item">Pricing</a></li>
                            </ul>

                            <ul>
                                <li><a href="#!" className="nav-block-item">About</a></li>
                                <li><a href="#!" className="nav-block-item">Blog</a></li>
                                <li><a href="#!" className="nav-block-item">Contact</a></li>
                            </ul>

                            <ul>
                                <li><a href="#!" className="nav-block-item">Image License Info</a></li>
                                <li><a href="#!" className="nav-block-item">Powered by Webflow</a></li>
                            </ul>
                        </nav>

                        <div className="socials">
                            <a href="#!"><img src={fb} alt="facebook" className="social-item" /></a>
                            <a href="#!"><img src={tw} alt="twitter" className="social-item" /></a>
                            <a href="#!"><img src={ig} alt="instagram" className="social-item" /></a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;