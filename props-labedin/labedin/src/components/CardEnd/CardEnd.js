import React from 'react';
import './CardEnd.css'

function CardEnd(props) {
    return (
        <div className="end-container">
            <img src={ props.imagem } />
            <div>
                <h4>End: { props.end }</h4>
                
            </div>
        </div>
    )
}

export default CardEnd;