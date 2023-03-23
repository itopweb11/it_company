import React from 'react';
import logo from "../../../img/logoza.ru1.png"
import {CompanySvg} from '../../../img/company';
import {ContextSvg} from "../../../img/context";
import {DevelopmentSvg} from "../../../img/development";
import {ServicesSvg} from "../../../img/services";
import {SettingsSvg} from "../../../img/settings";
import {SmmSvg} from "../../../img/smm";
import {SeoSvg} from "../../../img/seo";
import TransitionsModal from "./modal";

const Header = () => {

    return(
        <div>
            <div className="header container">
                <div className="header__info">
                    <div className='header__logo'>
                        <img className="logo" src={logo} alt="logo"/>
                    </div>
                    <div className='header__desc'>
                        <p>Делаем сайты, которые работают</p>
                    </div>
                </div>
                <div className="header__info">
                    <div className="header__button">
                        <a href="mailto:itconsulmsk@gmail.com">itconsulmsk@gmail.com</a>
                        <TransitionsModal />
                    </div>
                </div>
            </div>
            <div className="header__menu_wrapper">
                <ul className='header__menu container'>
                    <li>
                        <a href="#">
                            <ContextSvg />
                            <span>Контекст</span>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <SettingsSvg />
                            <span>Поддержка</span>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <SeoSvg />
                            <span>SEO</span>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <CompanySvg />
                            <span>О компании</span>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <SmmSvg />
                            <span>SMM</span>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <ServicesSvg />
                            <span>Ещё услуги</span>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <DevelopmentSvg />
                            <span>Разработка</span>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Header