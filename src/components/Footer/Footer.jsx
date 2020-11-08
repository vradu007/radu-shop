import React from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as Phone } from '../../assets/icons/phone.svg';
import { ReactComponent as Mail } from '../../assets/icons/mail.svg';
import { ReactComponent as GitHub } from '../../assets/icons/github.svg';
import { ReactComponent as LinkedIn } from '../../assets/icons/linkedin.svg';
import './Footer.css';

const Footer = () => {
    return(
        <footer className="pt-3 mt-3 bg-light">
            <div className="container-fluid container-min-max-width d-flex justify-content-between">
                <div className="footer-group d-flex flex-column">
                    <h3 className="h5">Quick links:</h3>
                    <Link to='/about'>About</Link>
                    <Link to='/terms-and-conditions'>Terms and conditions</Link>
                </div>
                <div className="footer-group">
                    <h3 className="h5">Contact me</h3>
                    <p className="m-0">
                        <a href="mailto:radu.voin@outlook.com">
                            <Mail className="mr-1 mb-1 footer-icon"/>
                            radu.voin@outlook.com
                        </a>
                    </p>
                    <p className="m-0"><Phone className="mr-1 footer-icon"/>+40722608519</p>
                </div>
                <div className="footer-group">
                    <h3 className="h5">Contact me:</h3>
                    <p className="m-0">
                        <a href="https://github.com/vradu007/radu-shop">
                            <GitHub className="mr-1 mb-1 footer-icon"/>
                            Radu Voin
                        </a>
                    </p>
                    <p className="m-0">
                        <a href="https://www.linkedin.com/in/radu-cristian-voin/">
                            <LinkedIn className="mr-1 footer-icon"/>
                            Radu Voin
                        </a>
                    </p>
                </div>
            </div>
            <div className="text-center py-3">
                &copy; Radu Cristian Voin, 2020
            </div>
        </footer>
    );
}

export default Footer;