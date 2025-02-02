import './Header.scss';
import { useState,useEffect } from 'react';
import Button from '../Button/Button';

import logo from '../../assets/logo/logo.svg'

function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    function toggleMenu() {
        setIsMenuOpen(!isMenuOpen);
    }

    useEffect(() => {
        if (isMenuOpen) {
            document.body.classList.add('no-scroll');
        } else {
            document.body.classList.remove('no-scroll');
        }

        return () => {
            document.body.classList.remove('no-scroll');
        };
    }, [isMenuOpen]);

    return (
        <header className="header">
            <div className="container">
                <div className={`header-navbar ${isMenuOpen ? 'open' : ''}`}>
                    <img className='logo' src={logo} alt="logo" />

                    <div className="navbar-content">
                        <ul className="nav-left">
                            <li><a href="#!" className="nav-item">Features</a></li>
                            <li><a href="#!" className="nav-item">Premium</a></li>
                            <li><a href="#!" className="nav-item">Pricing</a></li>
                            <li><a href="#!" className="nav-item">About</a></li>
                        </ul>
    
                        <div className="dot nav-item"></div>
                        <a href="#!" className="nav-item">Sign in</a>
                        <div className="header-button">
                            <Button extraClass={!isMenuOpen ? 'white-btn' : 'text-btn'} />
                        </div>
                    </div>

                    <div className={`burger-menu ${isMenuOpen ? 'open' : ''}`} onClick={toggleMenu}>
                        <div className="line"></div>
                        <div className="line"></div>
                        <div className="line"></div>
                    </div>
                </div>

                <div className="header-content">
                    <h1 className="header-title">Propel your business.</h1>
                    <p className="header-description">Propel comes with everything you need to get your business rolling.</p>
                    <Button />
                </div>
            </div>
        </header>
    )
}

export default Header;