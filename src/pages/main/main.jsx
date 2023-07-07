import React, { useEffect, useState } from 'react';
import chun from '../../assets/main-images/chun-bgM.png';
import ethno from '../../assets/main-images/ethno-bgM.png';
import catering from '../../assets/main-images/catering-bgM.png';
import line from '../../assets/main-images/line1.png';
import './main.css';
import { HOST, philialPoint } from '../../end-points';
import axios from 'axios';

const Main = () => {
    const selectPhilial = (e) => localStorage.setItem('philial', e)

    const [philials, setPhilials] = useState([])

    useEffect(() => {
        axios.get(`${HOST}${philialPoint}`)
            .then(res => setPhilials(res.data))
    }, [])

    return (
        <div className='main-page'>
            <div className='main'>
                <span className='bg' />
                <a onClick={() => selectPhilial(philials[0].id)} href='/supara/main' className="main-block">
                    <img src={chun} alt='' />
                </a>
                <img className='line' src={line} alt='' />
                <a onClick={() => selectPhilial(philials[1].id)} href='/supara/main' className="main-block">
                    <img src={ethno} alt='' />
                </a>
                <img className='line' src={line} alt='' />
                <a onClick={() => selectPhilial(philials[2].id)} href='/supara/main' className="main-block">
                    <img src={catering} alt='' />
                </a>
            </div>
        </div>
    );
};

export default Main;