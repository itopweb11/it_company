import React from 'react';
import Button from '@material-ui/core/Button';

const Button = (btnDesc) => {
    return(
        <Button variant="outlined" color="primary">{btnDesc}</Button>
    )
}

export default Button