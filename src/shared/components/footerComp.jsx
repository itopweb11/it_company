import React from 'react';
import logoBlack from "../img/logoBlack.png"

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
            <div className='footerComp__content__contacts'>
                <div className='container'>
                    <img src={logoBlack} alt="logoBlack"/>
                    <p>+7 495 989-53-11</p>
                </div>
            </div>
            <div className='footerComp__content__menu'>
                <div className='container'>
                    <p>+7 495 989-53-11</p>
                    <p>
                        Тарифы и цены
                        Тариф «Трафик»
                        Тариф «Объем работ»
                    </p>
                </div>
            </div>
        </div>
    )
}

export default FooterComp;