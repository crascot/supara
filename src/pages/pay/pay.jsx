import axios from "axios";
import React, { useEffect, useState } from "react";
import Nav from "../../components/nav/nav";
import { HOST, payPoint } from "../../end-points";
// import s from './pay.module.css';

const Pay = () => {
    const [amount, setAmount] = useState('')
    const [table_num, setTable_num] = useState(0)

    const pay = () => {
        axios.post(`${HOST}${payPoint}`, {
            amount: amount,
            table_num: table_num
        })
            .then(res => console.log(res))
            .catch(err => console.log(err))
    }

    useEffect(() => {
        axios.get('http://127.0.0.1:8000/api/qrcode/a0b2e5c1-54bb-4361-a22c-37448dd7fe12/')
        .then(res => console.log(res))
    }, [])

    return (
        <div>
            <Nav current='pay' />
            <div className="form">
                <h1>Что вы хотите заказать?</h1>
                <input value={amount} onChange={(e) => setAmount(e.target.value)} type="text" />
                <input value={table_num} onChange={(e) => setTable_num(e.target.value)} type="number" />
                <button onClick={pay}>Заказать</button>
            </div>
        </div>
    )
}

export default Pay;