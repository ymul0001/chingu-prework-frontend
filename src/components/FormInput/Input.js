import React from 'react';

const Input = ({properties}) => {
    return (
        <div className="input-wrapper">
            <input type={properties.type} className={properties.id} name={properties.name} required placeholder={properties.name} onChange={properties.onChange}/>
        </div>
    );
}

export default Input;