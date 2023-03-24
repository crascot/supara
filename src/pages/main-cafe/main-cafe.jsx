import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Nav from '../../components/nav/nav';
import { HOST, philialPoint } from '../../end-points';
import { setPhilial } from '../../set-philial';
import './main-cafe.css';

const MainCafe = () => {
    const [philials, setPhilials] = useState([])
    let currentPhilial

    useEffect(() => {
        axios.get(`${HOST}${philialPoint}`)
            .then(res => setPhilials(res.data))
    }, [])

    philials ? currentPhilial = philials.find(el => el.id === setPhilial) : currentPhilial = undefined

    return (
        <div>
            <Nav current='main' />
            <div className='main-cafe'>
                <h1 className='name'>{currentPhilial? currentPhilial.name : ''}</h1>
                <h2 className='description'>{currentPhilial? currentPhilial.description : ''}</h2>
                <h3 className='address'>Находится по адрессу: {currentPhilial? currentPhilial.address : ''}</h3>
                <h3 className='time'>Открыт с {currentPhilial? currentPhilial.open : ''} до {currentPhilial? currentPhilial.close : ''}</h3>
            </div>
        </div>
    );
};

export default MainCafe;