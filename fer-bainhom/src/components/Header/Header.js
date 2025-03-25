import React from 'react';
import {Link} from 'react-router-dom';
import user from '../../images/avt2.jpg';
import "./Header.scss";
const Header = () => {
    return (
        <div className='header'>
            <Link to='/'>
            <div className="logo">
                PHIMMOI
            </div>
            </Link>
           
            <div className="user-image">
                <img src={user} alt="user"/>
            </div>

        </div>
    );
};

export default Header;