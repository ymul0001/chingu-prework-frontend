import React from 'react';

const TextArea = ({properties}) => {
    return (  
        <div className="textarea-wrapper">
            <textarea id={properties.id} name={properties.name} onChange={properties.onChange}>{properties.placeholder}</textarea>
        </div>
    );
}

export default TextArea;