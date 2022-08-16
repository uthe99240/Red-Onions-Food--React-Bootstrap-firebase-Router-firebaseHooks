import React from 'react';
import './Choose.css'

import choose1 from '../../images/adult-blur-blurred-background-687824.png';
import choose2 from '../../images/chef-cook-food-33614.png';
import choose3 from '../../images/architecture-building-city-2047397.png';
import Card2 from '../Card2/Card2';


const Choose = () => {

    const choose = [
        { id: 1, name:'Fast Delivery', img: choose1},
        { id: 2, name:'A Good Auto Responder', img: choose2},
        { id: 3, name:'Home Delivery', img: choose3},
    ]
    return (
        <div className='container'>
            <div className='choose-container'>
                <h2>Why you choose us</h2>
                <p>It’s our attention to the small stuff, scheduling of timelines and keen project
                    management that makes us stand out from the rest. We are creative,
                    while keeping a close eye on the calendar and your budget.</p>
            </div>

            <div className="row mt-4">
                {
                    choose.map(item => <Card2
                        key={item.id}
                        item={item}
                    ></Card2>)
                }
            </div>
        </div>
    );
};

export default Choose;