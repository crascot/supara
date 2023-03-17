import React from 'react';
import facebook from '../../assets/ico-fb.svg';
import instagram from '../../assets/ico-in.svg';
import youtube from '../../assets/ico-yo.svg';
import './nav.css';

const Nav = ({ current }) => {
    const switchArray = [
        {
            type: 'main',
            text: 'На главную',
        },
        {
            type: 'menu',
            text: 'Меню',
        },
        {
            type: 'guest_zal',
            text: 'Зал',
        },
        {
            type: 'philial',
            text: 'Филиалы',
        },
        {
            type: 'form',
            text: 'Войти',
        },
        {
            type: 'reserve',
            text: 'Забронировать',
        },
    ]

    const switchMap = switchArray.map((el, i) => <a href={`/supara/${el.type}`} className={current === el.type ? 'active' : ''} key={i}>{el.text}</a>)

    return (
        <div className='nav'>
            <div className='container-header'>
                <ul className='header'>
                    <li className='header-left'>
                        <div>
                            <a href="/"><img src={facebook} alt='' /></a>
                            <a href="/"><img src={instagram} alt='' /></a>
                            <a href="/"><img src={youtube} alt='' /></a>
                        </div>
                        <div>
                            <span><a href="/">Наша история</a></span>
                            <span><a href="/">Карта комплекса</a></span>
                            <span><a href="/">Контакты</a></span>
                        </div>
                    </li>
                    <li>
                        <a href="/">Русский</a>
                        <a href="/">Кыргызча</a>
                        <a href="/">English</a>
                    </li>
                </ul>
            </div>
            <div className="logo">
                <a href="/">
                    <img src="https://supara.kg/chunkurchak/wp-content/uploads/sites/3/2018/01/logo-chunkurchakbw-sm.png" alt="" />
                </a>
                <div className='switch'>
                    {switchMap}
                </div>
            </div>
        </div>
    )
};

export default Nav;