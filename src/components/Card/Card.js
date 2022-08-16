import React from 'react';

const Card = ({item}) => {
    const {name ,img, price} = item;
    return (
        <div className='col-sm-12 col-md-6 col-lg-4'>
            <div className="card border-0 shadow p-3 mb-5 bg-white rounded" style={{ width: "24rem" }}>
                <img src={img} className="card-img-top" alt="..." />
                <div className="card-body text-center">
                    <h6 className="card-title">{name}</h6>
                    <p className="card-text text-muted">How we dream about our future</p>
                    <h3>${price}</h3>
                    <a href="#" className="btn btn-danger w-100">Place Order</a>
                </div>
            </div>
        </div>
    );
};

export default Card;