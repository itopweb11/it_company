import React from 'react';

const Content = ({content}) => {
    return (
        <div className='content'>
            <div className="container">
                <p className='content__p'>.</p>
                <h1 className='content__title'>Преимущества создания и продвижения сайта в <br/>"Consul-IT"</h1>
                <div className='content__blocks'>
                    {content.map(elem => {
                        return(
                            <div key={elem.id} className='content__blocks__block'>
                                <img src={elem.icon} alt="icon"/>
                                <h4>{elem.title}</h4>
                                <p>{elem.desc}</p>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default Content;