import React from 'react';

const Button = ({properties}) => {
    return (
        <button className={properties.class} type={properties.type} value={properties.value} onClick={properties.onClick}>
            {properties.value}
        </button>
    );
}

export default Button;