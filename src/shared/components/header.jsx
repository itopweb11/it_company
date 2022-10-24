import React from 'react';
import logo from "../img/logo1.jpg"
import logoIcon from "../img/logoIcon1.jpg"
import gear from "../img/gear.png"
import customer from "../img/customer.png"
import document from "../img/document.png"
import telephone from "../img/telephone.png"
import { Button } from '@material-ui/core';

const Header = () => {

    return(
        <div className="container">
            <div className="header">
                <div className="header__info">
                    <div className='header__logo'>
                        <img src={logoIcon} alt="logoIcon"/>
                        <img src={logo} alt="logo"/>
                    </div>
                    <div className='header__desc'>
                        <p>Делаем сайты, которые работают</p>
                    </div>
                </div>
                <div className="header__info">
                    <div className='header__menu'>
                        <img src={customer} alt="customer"/>
                        <a href="#">Разработка</a>
                        <img src={gear} alt="gear"/>
                        <a href="#">Поддержка</a>
                        <img src={document} alt="document"/>
                        <a href="#">О компании</a>
                        <img src={telephone} alt="telephone"/>
                        <a href="#">Контакты</a>
                    </div>
                    <div className="header__button">
                        <Button variant="contained" color="secondary">
                            Онлайн-заявка
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header