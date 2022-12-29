import React from 'react';
import './Header.css';
import headerLogo from '../../images/world.png';

const Header = () => {
    return (
        <div className='header-container'>
            <div>
                <img className='header-img' src={headerLogo} alt='img-failed'></img>
            </div>
            <div>
                <a href='#home'>Home</a>
                <a href='#countries'>Countries</a>
                <a href='#login'>Login</a>
            </div>
        </div>
    );
};

export default Header;