import React from 'react';
import chun from '../../assets/main-images/chun-bgM.png';
import ethno from '../../assets/main-images/ethno-bgM.png';
import catering from '../../assets/main-images/catering-bgM.png';
import line from '../../assets/main-images/line1.png';
import './main.css';

const Main = () => {
    return (
        <div className='main'>
            <a href='/supara/main' className="main-block">
                <img src={chun} alt='' />
            </a>
            <img className='line' src={line} alt='' />
            <a href='/supara/main' className="main-block">
                <img src={ethno} alt='' />
            </a>
            <img className='line' src={line} alt='' />
            <a href='/supara/main' className="main-block">
                <img src={catering} alt='' />
            </a>
        </div>
    );
};

export default Main;