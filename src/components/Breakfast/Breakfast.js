import React from 'react';

import breakfast1 from '../../images/breakfast/breakfast1.png';
import breakfast2 from '../../images/breakfast/breakfast2.png';
import breakfast3 from '../../images/breakfast/breakfast3.png';
import breakfast4 from '../../images/breakfast/breakfast4.png';
import breakfast5 from '../../images/breakfast/breakfast5.png';
import breakfast6 from '../../images/breakfast/breakfast1.png';
import Card from '../Card/Card';
import Choose from '../Choose/Choose';
import Home from '../Home/Home';

const Breakfast = () => {

    const breakfast = [
        { id: 1, name: 'Bagel and cream cheese', img: breakfast1, price: 6.99 },
        { id: 2, name: 'Breakfast sandwitch', img: breakfast2, price: 7.99 },
        { id: 3, name: 'Baked chicken', img: breakfast3, price: 8.99 },
        { id: 4, name: 'Eggs Benedict', img: breakfast4, price: 9.99 },
        { id: 5, name: 'Toast coisant fried egg', img: breakfast5, price: 10.99 },
        { id: 6, name: 'Full breakfast fried egg ', img: breakfast6, price: 11.99 },
    ]
    return (
        <div>
            <Home></Home>
            <div className='container'>
                <div className="row mt-4">
                    {
                        breakfast.map(item => <Card
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

export default Breakfast;