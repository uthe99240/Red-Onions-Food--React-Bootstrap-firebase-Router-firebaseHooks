import React from 'react';

import dinner1 from '../../images/dinner/dinner1.png';
import dinner2 from '../../images/dinner/dinner2.png';
import dinner3 from '../../images/dinner/dinner3.png';
import dinner4 from '../../images/dinner/dinner4.png';
import dinner5 from '../../images/dinner/dinner5.png';
import dinner6 from '../../images/dinner/dinner6.png';
import Card from '../Card/Card';
import Choose from '../Choose/Choose';
import Home from '../Home/Home';

const Dinner = () => {
    const dinner = [
        {id: 1, name: 'Salmon with Lentil Salad', img: dinner1, price: 6.99},
        {id: 2, name: 'Baked Chicken', img: dinner2, price: 7.99},
        {id: 3, name: 'Salmon with Salad', img: dinner3, price: 8.99},
        {id: 4, name: 'Tuna with Grapefruit and Lentil Salad', img: dinner4, price: 9.99},
        {id: 5, name: 'Pabda fish with salad', img: dinner5, price: 10.99},
        {id: 6, name: 'Hilsha with Lentil Salad', img: dinner6, price: 11.99},
    ]
    return (
        <div>
            <Home></Home>
            <div className='container'>
            <div className="row mt-4">
                {
                    dinner.map(item => <Card
                        key={item.id}
                        item= {item}
                    ></Card>)
                }
            </div>
        </div>
        <Choose></Choose>
        </div>
    );
};

export default Dinner;