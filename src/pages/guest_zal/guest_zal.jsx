import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Nav from '../../components/nav/nav';
import Footer from '../../components/footer/footer';
import { guest_zalPoint, HOST } from '../../end-points';
import { setPhilial } from '../../set-philial';
import s from './guest_zal.module.css';

const GuestZal = () => {
    const [guests, setGuests] = useState([])
    let currentGuests = [];

    useEffect(() => {
        axios.get(`${HOST}${guest_zalPoint}`)
            .then(res => setGuests(res.data))
    }, [])

    guests ? currentGuests = guests.filter(el => el.philial === setPhilial) : currentGuests = null

    return (
        <div>
            <Nav current='guest_zal' />
            <div className={`${s.guest_zal} container`}>
                {
                    currentGuests ?
                        currentGuests.map((el, i) => (
                            <div key={i} className='block'>
                                <img src={el.photo} alt='' />
                                <h1>{el.name}</h1>
                                <h2>Всего мест: {el.seating}</h2>
                                <h3>Забронированно:
                                    {
                                        el.resurves > 0 ?
                                            el.resurves.map(num => num.seat_number).reduce((a, b) => a + b)
                                            :
                                            0
                                    }
                                </h3>
                                {
                                    el.reserved_places ?
                                        <p>Зарезервировано: {el.reserved_places}</p>
                                        :
                                        ''
                                }
                            </div>
                        ))
                        :
                        ''
                }
            </div>
            <Footer />
        </div>
    );
};

export default GuestZal;