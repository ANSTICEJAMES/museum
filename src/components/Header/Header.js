import React from 'react';
import './Header.css';
import logo from '../../images/header/logo.JPG';
import sfedu from '../../images/header/sfedu.png';

import {Link} from "react-router-dom"


function Header() {
    return (
        <div className="head">
            <div className="main_container">
                <div className="header_align">
                    <Link to="/">
                        <div className="logo" alt="Логотип"><img className="logo" src={logo} alt="Логотип"></img></div>
                    </Link>
                    <div className="info">
                        <div className="name"><h3 className='title'>ПОЛИТЕХНИЧЕСКИЙ МУЗЕЙ ЮФУ</h3></div>
                        <div className="nav">
                            <Link to="/news"> Новости </Link>
                            <Link to="/catalog"> Экспонаты </Link>
                            <a href="http://sfedu.ru/" target="_blank" >Официальный сайт ЮФУ</a>
                        </div>
                    </div>
                    <a href="http://sfedu.ru/" target="_blank">
                        <div> <img src={sfedu} className="logo" alt="Логотип"/></div>
                    </a>
                </div>

            </div>

        </div>
    );
}

export default Header;
