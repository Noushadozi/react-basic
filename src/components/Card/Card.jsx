import React from 'react';
import './Card.css';



const Card = ({ img, price, name }) => { 
    // const { img, price, name } = props;
    return (
        <div >
            <img className="w-64" src={img} alt="" />
            <h2>{name}</h2>
            <h3>{price}</h3>
        </div>
    );
};

export default Card;