import React from 'react';

const InfoCarts = ({ data }) => {
    const { image, details, bgcolor, name } = data
    return (
        <div className={`card card-side bg-base-100 shadow-xl text-white p-6 ${bgcolor}`}>
            <figure>
                <img src={image} alt="Movie" />
            </figure>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p>{details}</p>
            </div>
        </div>
    );
};

export default InfoCarts;