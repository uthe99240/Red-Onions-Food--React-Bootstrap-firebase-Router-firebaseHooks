import React from 'react';

import lunch1 from '../../images/lunch/lunch1.png';
import lunch2 from '../../images/lunch/lunch2.png';
import lunch3 from '../../images/lunch/lunch3.png';
import lunch4 from '../../images/lunch/lunch2.png';
import lunch5 from '../../images/lunch/lunch5.png';
import lunch6 from '../../images/lunch/lunch6.png';
import Card from '../Card/Card';
import Choose from '../Choose/Choose';
import Home from '../Home/Home';

const Lunch = () => {

    const lunch = [
        { id: 1, name: 'Healthy Meal Plan', img: lunch1, price: 6.99 },
        { id: 2, name: 'Fried Chicken Bento', img: lunch2, price: 7.99 },
        { id: 3, name: 'Taragon-Rubbed-Salmon', img: lunch3, price: 8.99 },
        { id: 4, name: 'Indian Lunch', img: lunch4, price: 9.99 },
        { id: 5, name: 'Beef Steak', img: lunch5, price: 10.99 },
        { id: 6, name: 'Salmon with peppers', img: lunch6, price: 11.99 },
    ]
    return (
        <div>
            <Home></Home>
            <div className='container'>
                <div className="row mt-4">
                    {
                        lunch.map(item => <Card
                            key={item.id}
                            item={item}
                        ></Card>)
                    }
                </div>
            </div>
            <Choose></Choose>
        </div>
    );
};

export default Lunch;