import React, { Component } from 'react';
import './Deal.css';


const DealCycle = (props) => {
    
    return (
        <div className="headerContainer">
            <p className="status">{props.DealCycleData.status}</p>
            <p className="status-count">{props.DealCycleData.statusCount}</p>
           
        </div>
    );
};

export default DealCycle;