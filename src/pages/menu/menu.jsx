import React from 'react';
import Nav from '../../components/nav/nav';
import { setPhilial } from '../../set-philial';
import './menu.css';

const Menu = ({ menuArr }) => {
    const currentMenu = menuArr.find(el => el.philial === setPhilial)

    const dishes = currentMenu.dishes.map((el, i) => (
        <div className='block' key={i}>
            <h1>Блюдо: {el.name}</h1>
            <h2>Цена: {el.price}</h2>
        </div>
    ))

    return (
        <div>
            <Nav current='menu' />
            <div className='menu'>
                <div>
                    <h1>Название: {currentMenu.name}</h1>
                    <h2>Описание: {currentMenu.description}</h2>
                </div>
                <div className='container'>{dishes}</div>
            </div>
        </div>
    );
};

export default Menu;