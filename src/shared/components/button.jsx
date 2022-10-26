import React from 'react';
import Button from '@material-ui/core/Button';

const ButtonComp = (btnDesc) => {
    return <Button className='btn' variant="outlined" color="primary">{btnDesc.btnDesc}</Button>
}

export default ButtonComp