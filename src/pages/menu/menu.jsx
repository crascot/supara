import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Nav from '../../components/nav/nav';
import { HOST, menuPoint } from '../../end-points';
import { setPhilial } from '../../set-philial';
import './menu.css';

const Menu = () => {
    const [menu, setMenu] = useState([])
    let currentMenu = [];
    let dishes = [];

    useEffect(() => {
        axios.get(`${HOST}${menuPoint}`)
        .then(res => setMenu(res.data))
      }, [])

      menu? currentMenu = menu.find(el => el.philial === setPhilial) : currentMenu = null
      menu && currentMenu? dishes = currentMenu.dishes : dishes = null

    return (
        <div>
            <Nav current='menu' />
            <div className='menu'>
                <div>
                    <h1>Название: {currentMenu? currentMenu.name : ''}</h1>
                    <h2>Описание: {currentMenu? currentMenu.description : ''}</h2>
                </div>
                <div className='container'>
                    {
                        dishes? 
                        dishes.map((el, i) => (
                            <div key={i} className='block'>
                                <h1>Блюдо: {el.name}</h1>
                                <h2>Цена: {el.price}</h2>
                            </div>
                        ))
                        :
                        ''
                    }
                </div>
            </div>
        </div>
    );
};

export default Menu;