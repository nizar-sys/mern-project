import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './button.css';

const Button = ({title, ...rest}) => {
    return (
        <div>
            <button {...rest}>{title}</button>
        </div>
    )
}

export default Button
