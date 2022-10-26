import React from 'react';

const DataBlocks = ({dataBlocksArr}) => {
    return(
        <div className='dataBlocks'>
            <div className='container dataBlocks__content'>
                {dataBlocksArr.map(elem => {
                    return(
                        <div key={elem.id} className='dataBlocks__content__block'>
                            <img src={elem.icon} alt="icon"/>
                            <h3>{elem.title}</h3>
                            <p>{elem.desc}</p>
                            <span>{elem.price}</span>
                        </div>
                    )
                })
                }
            </div>
        </div>

    )
}

export default DataBlocks;