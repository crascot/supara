import React from 'react';
import Nav from '../../components/nav/nav';
import { setPhilial } from '../../set-philial';
import './guest_zal.css';

const GuestZal = ({ guest_zalArr, reserveArr }) => {
    const currentGuest_zal = guest_zalArr.filter(el => el.philial === setPhilial)

    const arr3 = currentGuest_zal.map((y) => Object.assign(y, reserveArr.find((x) => x.guest_zal === y.id)));

    const guests = arr3.map((el, i) => (
        <div key={i} className='block'>
            <h1>Название: {el.name}</h1>
            <p>Всего мест: {el.seating}</p>
            <p>Забронированно мест: {el.seat_number}</p>
        </div>
    ))

    return (
        <div>
            <Nav current='guest_zal' />
            <div className='container'>
            {guests}
            </div>
        </div>
    );
};

export default GuestZal;