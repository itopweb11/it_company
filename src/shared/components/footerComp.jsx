import React from 'react';
import logoBlack from "../img/logoBlack.png"
import logoWhite from "../img/logoWhite.png"
import facebook from "../img/facebook.png"
import google from "../img/google-plus.png"
import instagram from "../img/instagram.png"
import whatsapp from "../img/whatsapp.png"
import twitter from "../img/twitter.png"

const FooterComp = () => {
    return (
        <div className='footerComp'>
            <div className='footerComp__background'>
                <div className='container footerComp__background__desc'>
                    <h1>ПОДДЕРЖКА САЙТОВ</h1>
                    <h4>от мониторинга до полноценного развития и антивирусной защиты</h4>
                    <p>
                        Полный комплекс услуг по техническому сопровождению и обслуживанию
                        сайтов от профессионалов с многолетним опытом и экспертизой.
                    </p>
                </div>
            </div>
            <div className='footerComp__contacts'>
                <div className='container footerComp__contacts__desc'>
                    <div className='footerComp__contacts__desc__tel'>
                        <img src={logoBlack} alt="logoBlack"/>
                        <div>
                            <a href="tel:+78142332211">+7(814)-233-22-11</a>
                            <p>МОСКВА (ОТДЕЛ ПРОДАЖ)</p>
                        </div>
                        <div>
                            <a href="tel:+78142332211">+7(814)-233-22-11</a>
                            <p>БЕСПЛАТНО ПО РОССИИ</p>
                        </div>
                    </div>
                    <div className='footerComp__contacts__desc__address'>
                        <p>Москва</p>
                        <address>
                            <a href="mailto:info@w3docs.com">Люсиновская ул., 36, стр. 1</a>
                        </address>
                    </div>
                </div>
            </div>
            <div className='footerComp__menu'>
                <div className='container footerComp__menu__list'>
                   <div className='footerComp__menu__list__desc'>
                       <p>SEO</p>
                       <ul>
                           <li>Тарифы и цены</li>
                           <li>Тариф «Трафик»</li>
                           <li>Тариф «Объем работ»</li>
                           <li>Тариф «Лиды / CPA»</li>
                           <li>Тариф «SEO + Контекст»</li>
                           <li>Комплексное SEO</li>
                           <li>Новые сайты</li>
                           <li>Сайты на Битрикс</li>
                       </ul>
                   </div>
                    <div className='footerComp__menu__list__desc'>
                        <p>Поддержка</p>
                        <ul>
                            <li>Тарифы</li>
                            <li>Для интернет-магазина</li>
                            <li>На 1С-Битрикс</li>
                            <li>Технический аудит</li>
                            <li>Юзабилити-аудит</li>
                            <li>Тест мобильной версии</li>
                        </ul>
                    </div>
                    <div className='footerComp__menu__list__desc'>
                        <p>Контекст</p>
                        <ul>
                            <li>Тарифы и цены</li>
                            <li>Настройка</li>
                            <li>Создание и ведение</li>
                            <li>Яндекс Директ</li>
                            <li>Консультации</li>
                        </ul>
                    </div>
                    <div className='footerComp__menu__list__desc'>
                        <p>Ещё услуги</p>
                        <ul>
                            <li>Продвижение в маркетплейсах</li>
                            <li>Продвижение в Wildberries</li>
                            <li>Корпоративный брендинг</li>
                            <li>Фирменный стиль</li>
                            <li>Разработка логотипа</li>
                            <li>Видеопродакшн</li>
                            <li>Внедрение CRM-систем</li>
                        </ul>
                    </div>
                    <div className='footerComp__menu__list__desc'>
                        <p>О компании</p>
                        <ul>
                            <li>О «Consul-IT»</li>
                            <li>Корпоративные ценности</li>
                            <li>Отзывы клиентов</li>
                            <li>Достижения</li>
                            <li>Миссия</li>
                            <li>Наша команда</li>
                            <li>Наши клиенты</li>
                        </ul>
                    </div>
                </div>
                <div className='footerComp__menu__info'>
                    <div className='container footerComp__menu__info__desc'>
                        <img className='footerComp__menu__info__desc__logo' src={logoWhite} alt="logoWhite"/>
                        <div className='footerComp__menu__info__desc__icons'>
                            <img src={facebook} alt="facebook"/>
                            <img src={google} alt="google"/>
                            <img src={instagram} alt="instagram"/>
                            <img src={whatsapp} alt="whatsapp"/>
                            <img src={twitter} alt="twitter"/>
                        </div>
                        <p>Сайт защищен reCAPTCHA и Google. <br/> Конфиденциальность и Условия.</p>
                        <p>Публичная оферта <br/> Политика конфиденциальности</p>
                        <p>Подпишитесь на исследования и кейсы</p>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default FooterComp;