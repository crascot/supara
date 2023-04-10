import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Nav from '../../components/nav/nav';
import { guest_zalPoint, HOST } from '../../end-points';
import { setPhilial } from '../../set-philial';
import './guest_zal.css';

const GuestZal = () => {
    const [guests, setGuests] = useState([])
    let currentGuests = [];

    useEffect(() => {
        axios.get(`${HOST}${guest_zalPoint}`)
        .then(res => setGuests(res.data))
      }, [])

      guests? currentGuests = guests.filter(el => el.philial === setPhilial) : currentGuests = null

    return (
        <div>
            <Nav current='guest_zal' />
            <div className='container'>
                {
                    currentGuests ?
                    currentGuests.map((el, i) => (
                        <div key={i} className='block'>
                            <img src='https://cdn.nur.kz/images/1120x630/f1e68f3197fcc46e.jpeg' alt='' />
                            <h1>{el.name}</h1>
                            <h2>Всего мест: {el.seating}</h2>
                            <h3>Забронированно: {el.resurves.map(num => num.seat_number).reduce((a, b) => a+b)}</h3>
                        </div>
                    ))
                    :
                    ''
                }
            </div>
        </div>
    );
};

export default GuestZal;