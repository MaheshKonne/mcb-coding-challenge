import React from 'react';
import Button from '../ui-components/Button';
import './Header.scss';

const Header = () => {
    return (
        <div className="header">
            <div className="contentContainer">
                <div className="logo">
                    <span className="primary">DSGN</span>
                    <span className="secondary">.mu</span>
                </div>
                <nav>
                    <ul>
                        <li>
                            <a className="inverted" href="#About">About</a>
                        </li>
                        <li>
                            <a className="inverted" href="#Products">Products</a>
                        </li>
                        <li>
                            <a className="inverted" href="#Contact">Contact</a>
                        </li>
                        <li>
                            <a className="inverted" href="#About">Help</a>
                        </li>
                    </ul>
                </nav>
                <div>
                    <Button>Sign In</Button>
                    <Button variant="contained">Sign Up</Button>
                </div>
            </div>
        </div>
    );
};

export default Header;
