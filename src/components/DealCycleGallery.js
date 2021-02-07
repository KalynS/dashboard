import React, { Component } from 'react';
import DealCycle from "./DealCycle"
import "./Deal.css"


const DealCycleGallery = (props) => {

    return (
        <div className='dealGallery'>
            {
                props.DealCycleData.map((salesPerson, index) => {
                    console.log(index)
                    console.log(salesPerson[1])
                    return <DealCycle DealCycleData={salesPerson} key={index} />
                })
            }

            {/* {listOfComponents} */}
        </div>
    );
};

export default DealCycleGallery;
