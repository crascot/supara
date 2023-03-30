import React from 'react';
import chun from '../../assets/main-images/chun-bgM.png';
import ethno from '../../assets/main-images/ethno-bgM.png';
import catering from '../../assets/main-images/catering-bgM.png';
import line from '../../assets/main-images/line1.png';
import './main.css';

const Main = () => {
    const selectPhilial = (e) => localStorage.setItem('philial', e)

    return (
        <div className='main-page'>
            <div className='main'>
                <span className='bg' />
                <a onClick={() => selectPhilial(1)} href='/supara/main' className="main-block">
                    <img src={chun} alt='' />
                </a>
                <img className='line' src={line} alt='' />
                <a onClick={() => selectPhilial(2)} href='/supara/main' className="main-block">
                    <img src={ethno} alt='' />
                </a>
                <img className='line' src={line} alt='' />
                <a onClick={() => selectPhilial(3)} href='/supara/main' className="main-block">
                    <img src={catering} alt='' />
                </a>
            </div>
        </div>
    );
};

export default Main;