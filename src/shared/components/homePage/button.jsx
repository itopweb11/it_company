import React from 'react';
import Button from '@mui/material/Button';

const ButtonComp = (btnDesc) => {
    return <Button className='btn' variant="outlined" color="primary">{btnDesc.btnDesc}</Button>
}

export default ButtonComp