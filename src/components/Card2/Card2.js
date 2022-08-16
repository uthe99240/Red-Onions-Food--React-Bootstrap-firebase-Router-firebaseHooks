import React from 'react';
import { BsFillArrowRightCircleFill } from 'react-icons/bs';

const Card2 = ({ item }) => {
    const { img, name} = item;
    return (
        <div className='col-sm-12 col-md-6 col-lg-4'>
            <div className="card border-0 shadow p-3 mb-5 bg-white rounded" style={{ width: "25rem" }}>
                <img src={img} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h6 className="card-title">{name}</h6>
                    <p>Keep your systems in sync with automated web hook based
                        notifications each time link is paid and how we dream about our future.</p>

                    <div className='d-flex align-items-center'>
                        <button className='btn text-decoration-none p-0 text-primary'>See more</button>
                        <p className='text-primary m-0 ps-2'><BsFillArrowRightCircleFill /></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Card2;