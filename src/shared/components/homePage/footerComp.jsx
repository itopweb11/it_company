import React from 'react';
import logoBlack from "../../../img/logo-black.png"
import  {FacebookSvg} from "../../../img/facebook"
import {InstagramSvg} from "../../../img/instagram";
import {ZenSvg} from "../../../img/zen";
import {VkontakteSvg} from "../../../img/vkontakte";
import {YoutubeSvg} from "../../../img/youtube";
import {TwitterSVG} from "../../../img/twitter";

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
                    <div>
                        <a href="tel:+79187347481">+7(918)-734-74-81</a>
                        <p>МОСКВА (ОТДЕЛ ПРОДАЖ)</p>
                    </div>
                    <div>
                        <a href="tel:+79288383992">+7(928)-838-39-92</a>
                        <p>БЕСПЛАТНО ПО РОССИИ</p>
                    </div>
                    <div className="footerComp__contacts__desc__inn">
                        <p>ИНН</p>
                        <p>7731663951</p>
                    </div>
                    <div className="footerComp__contacts__desc__inn">
                        <p>ОГРН</p>
                        <p>1117746014924</p>
                    </div>
                    <div className='footerComp__contacts__desc__address'>
                        <p>Москва</p>
                        <address>
                            <a href="https://goo.gl/maps/5sLUXt1MgxiJHvQf8">пос.Мосрентген, 14 квартал, влд 28, ст 1</a>
                        </address>
                    </div>
                </div>

                {/*<iframe
                    className="footerComp__contacts_map"
                    src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d101892.19598532123!2d37.53290318805199!3d55.64515173578889!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1z0L_QvtGBLtCc0L7RgdGA0LXQvdGC0LPQtdC9LCAxNCDQutCy0LDRgNGC0LDQuywg0LLQu9C0IDI4LCDRgdGCIDE!5e0!3m2!1sru!2sru!4v1680073694550!5m2!1sru!2sru"
                    allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade">
                </iframe>*/}
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
                        <img className='footerComp__menu__info__desc__logo logo' src={logoBlack} alt="logoWhite"/>
                        <div className='footerComp__menu__info__desc__icons'>
                            <ZenSvg />
                            <FacebookSvg />
                            <InstagramSvg />
                            <VkontakteSvg />
                            <YoutubeSvg />
                            <TwitterSVG />
                        </div>
                        <p>Сайт защищен reCAPTCHA и Google. <br/> Конфиденциальность и Условия.</p>
                        <p>Публичная оферта <br/> Политика конфиденциальности</p>
                        <p>Подпишитесь на <br/> исследования и кейсы</p>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default FooterComp;