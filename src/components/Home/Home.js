import React from 'react';
import './Home.css';
import bannerBackground from '../../images/bannerbackground.jpg';
import { Form } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import Breakfast from '../Breakfast/Breakfast';
import { useState } from 'react';
import { useNavigate } from "react-router-dom";
import Header from '../Header/Header';

const Home = () => {

    let navigate = useNavigate();

    const handleBreakfast = () => {
        navigate('/breakfast');
    }
    const handleLunch = () => {
        navigate('/lunch');
    }
    const handleDinner = () => {
        navigate('/dinner');
    }
    return (
        <div >
            
            <div className='banner'>
                <img className='w-100' src={bannerBackground} alt="Snow" />
                <div className='centered'>
                    <p>Best food waiting for your belly</p>
                    <Form className="d-flex">
                        <Form.Control
                            type="search"
                            placeholder="Search food items"
                            className="rounded-5 h-25"
                            aria-label="Search"

                        />
                        <button className='rounded-5 px-4 btn btn-sm btn-danger pb-2  position-absolute start-70 end-0'>Search</button>
                    </Form>
                </div>
                <div className='mt-4'>
                    <button onClick={handleBreakfast} className='btn btn-margin'>Breakfast</button>
                    <button onClick={handleLunch} className='btn btn-margin'>Lunch</button>
                    <button onClick={handleDinner} className='btn btn-margin'>Dinner</button>
                </div>
                
            </div>


        </div>

    );
};

export default Home;