import React from 'react';
import ButtonComp from "./button";

const Main = () => {
    return (
        <div className="main">
            <div className="container mainBlocks">
                <div className="mainContent">
                    <h1 className='mainContent__title'>создание и  продвижение  сайтов</h1>
                    <h2 className="mainContent__subtitle">
                        Комплексный подход к разработке и созданию сайтов для бизнеса,
                        ориентированного на высокую конверсию
                    </h2>
                    <div className="mainContent__buttons">
                        <ButtonComp btnDesc={'Подробнее о компании'}/>
                        <ButtonComp btnDesc={'Еще услуги'}/>
                    </div>
                </div>
                <div className='main__form'>
                    <p className='mainForm__desc'>
                        Мы берем на себя все вопросы по функционированию сайта, продлению
                        доменного имени, работе хостинга, обновлению информации.
                    </p>
                    <span className='main__form__input'>
                        <span>Телефон:</span>
                        <input placeholder={'+7(814)-000-00-00'} type="number"/>
                    </span>
                    <span className='main__form__input'>
                        <span>Пароль:</span>
                        <input placeholder={'...............'} type="text"/>
                    </span>
                    <ButtonComp btnDesc={'Войти'} />
                    <ButtonComp btnDesc={'Регистрация'} />
                </div>
            </div>
        </div>
    )
}

export default Main;