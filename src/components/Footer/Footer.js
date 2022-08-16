import React from 'react';
import logo from '../../images/logo.png';
import Choose from '../Choose/Choose';
import './Footer.css';

const Footer = () => {
    const today = new Date();
    const year = today.getFullYear();
    return (
        <div>
            <div className='bg-dark'>
                <div className='footer'>
                    <div className='p-2' style={{ width: "400px", height: '30px' }}>
                        <img style={{ width: "100px", height: '30px' }} src={logo} alt="" />
                    </div>
                    <div className='text-white p-2'>
                        <p>About Online Food</p>
                        <p>Read Our Blog</p>
                        <p>Sign Up To Deliver</p>
                        <p>Add Your restaurent</p>
                    </div>
                    <div className='text-white p-2'>
                        <p>Get Help</p>
                        <p>Read FAQs</p>
                        <p>View all cities</p>
                        <p>Restaurents near me</p>
                    </div>
                </div>
                <div className='text-white footer2'>
                    <div>
                        <p><small>Copyright @ {year} Online Food </small></p>
                    </div>
                    <div className='d-flex'>
                        <p className='pe-5'>Privacy Terms</p>
                        <p className='pe-5'>Terms Of Use</p>
                        <p>Pricing</p>
                    </div>
                </div>

            </div>

        </div>
    );
};

export default Footer;