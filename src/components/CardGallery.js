import React from 'react';
import Card from "./Card"
import './Card.css';


const CardGallery = (props) => {

    return (
        <div className='container'>
            {
                props.salesPersonData.map((salesPerson, index) => {
                    console.log(index)
                    console.log(salesPerson[1])
                    return <Card salesPersonData={salesPerson} key={index} />
                })
            }

            {/* {listOfComponents} */}
        </div>
    );
};

export default CardGallery;
