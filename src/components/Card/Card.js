import React from 'react';
import axios from "axios";
import Button from '../Button/Button';

const Card = ({properties}) => {
    
    const deleteById = (e) => {
        e.preventDefault();
        axios.delete('https://notes-chingu-api.herokuapp.com/v1/note/deleteById', {params:{
            noteid: properties.id
        }})
        .then((response) => {
            window.location.reload(true);
        }
        );
    }

    return (  
        <div className="note-card">
            <h3 className="note-title">
                {properties.title}   
            </h3>
            <p className="note-detail">{properties.description}</p>
            <div className="card-buttons-container">
                    <Button properties = {{
                            class: 'delete-btn',
                            type:'submit',
                            value:'Delete',
                            onClick: deleteById
                    }}/>
            </div>
        </div>
    );
}

export default Card;