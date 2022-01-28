import React from 'react';
import './CardPequeno.css'

function CardPequeno(props) {
    return (
        <div className="small-container">
            <img src={ props.imagem } />
            <div>
                <h4>Email: { props.email }</h4>
                
            </div>
        </div>
    )
}

export default CardPequeno;