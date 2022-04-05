import React from 'react';
import './Box.css'

const Box = ({img, api}) => {
    return (
        <div className='Box'>
            {/* LINK */}
            <div className="card mx-4" style={{width: '20rem'}}>
                <img src={img} className="card-img-top rounded"  style={{height:'22rem'}}alt="..."/>
                <h1>{api}</h1>
            </div>
        </div>
    );
};

export default Box;