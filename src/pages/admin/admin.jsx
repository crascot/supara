import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { guest_zalPoint, HOST } from '../../end-points';
import './admin.css';

const Admin = () => {
    const [guests, setGuests] = useState([])

    useEffect(() => {
        axios.get(`${HOST}${guest_zalPoint}`)
            .then(res => setGuests(res.data))
    }, [])

    return (
        <div className='container'>
            {
                guests.map((el, i) => (
                    <div key={i} className='block'>
                        <h1>Место: {el.name}</h1>
                        <h3>Всего мест: {el.seating}</h3>
                        <h3>Зарезервировано: {el.reserved_places}</h3>
                        <p>Количество зарезервированных мест: {el.resurves.map(num => num.seat_number).reduce((a, b) => a + b)}</p>
                    </div>
                ))
            }
        </div>
    );
};

export default Admin;