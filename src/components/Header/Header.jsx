import React from 'react';
import Button from '../ui-components/Button';
import './Header.scss';

const Header = () => {
    return (
        <div className="header">
            <div className="content-container">
                <div>
                    <span>DSGN</span>
                    <span>.mu</span>
                </div>
                <nav>
                    <ul>
                        <li>About</li>
                        <li>Products</li>
                        <li>Contact</li>
                        <li>Help</li>
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
