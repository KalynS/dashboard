
import React from 'react';
import './Card.css';

const Card = (props) => {
    
    return (
        <div className="card">

            <p className="dealPath">{props.salesPersonData.dealPath}</p>
            <img src={props.salesPersonData.image}></img>
            <p className="clientCompany">{props.salesPersonData.clientCompany}</p>
            <p className="salesRepName">{props.salesPersonData.salesRepName}</p>
            <p className="dealAmount">{props.salesPersonData.dealAmount}</p>
            <p className="dealStage">{props.salesPersonData.dealStage}</p>
        </div>
    );
};

export default Card;

