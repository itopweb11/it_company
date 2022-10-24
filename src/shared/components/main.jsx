import React from 'react';
import Button from '@material-ui/core/Button';

const Main = () => {
    return (
        <div className="main">
            <div className="container mainBlocks">
                <div className="mainContent">
                    <h1 className='mainContent__title'>создание и <br/> продвижение <br/> сайтов</h1>
                    <h2 className="mainContent__subtitle">
                        Комплексный подход к разработке и созданию сайтов для бизнеса,<br/>
                        ориентированного на высокую конверсию
                    </h2>
                    <div className="mainContent__buttons">
                        <Button btnDesc={'Подробнее о компании'}/>
                        <Button variant="outlined" color="primary">
                            Подробнее о компании
                        </Button>
                        <Button variant="outlined" color="primary">
                            Еще услуги
                        </Button>
                    </div>
                </div>
                <div className='main__form'>
                    <p>dkfkldsfjdksl</p>
                </div>
            </div>
        </div>
    )
}

export default Main;