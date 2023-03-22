import React from 'react';
import Nav from '../../components/nav/nav';
import './main-cafe.css';

const MainCafe = ({ philialArr, currentPhilial }) => {
    return (
        <div>
            <Nav current='main' />
            <div className='main-cafe'>
                <h1 className='name'>{currentPhilial.name}</h1>
                <h2 className='description'>{currentPhilial.description}</h2>
                <h3 className='address'>Находится по адрессу: {currentPhilial.address}</h3>
                <h3 className='time'>Открыт с {currentPhilial.open} до {currentPhilial.close}</h3>
            </div>
        </div>
    );
};

export default MainCafe;