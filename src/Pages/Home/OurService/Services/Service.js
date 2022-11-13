import React from 'react';

const Service = ({ service }) => {
    const { image, name, details } = service;
    return (
        <div className="card  bg-base-100 shadow-xl mx-auto">
            <figure className="px-10 pt-10">
                <img src={image} alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">{name}</h2>
                <p>{details}</p>
            </div>
        </div>
    );
};

export default Service;