import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { HOST, payment_histrotyPoint } from '../../end-points';
import './admin.css';

const Admin = () => {
    const [history, setHistory] = useState([])

    useEffect(() => {
        axios.get(`${HOST}${payment_histrotyPoint}`)
            .then(res => setHistory(res.data))
    }, [])

    return (
        <div className='container'>
            <h1 className='title'>История заказов</h1>
            {
                history.map((el, i) => (
                    <div key={i} className='block'>
                        <h1>Заказчик: {el.user_id}</h1>
                        <h1>Количество: {el.amount}</h1>
                        <h1>Статус: {el.status}</h1>
                    </div>
                ))
            }
        </div>
    );
};

export default Admin;