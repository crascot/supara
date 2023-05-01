import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Nav from '../../components/nav/nav';
import Footer from '../../components/footer/footer';
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
                    <h1>{currentMenu ? currentMenu.name : ''}</h1>
                    <h2>{currentMenu ? currentMenu.description : ''}</h2>
                </div>
                <div className='container'>
                    {
                        dishes ?
                            dishes.map((el, i) => (
                                <div key={i} className='block'>
                                    <img src='https://imgpng.ru/d/steak_PNG15.png' alt='' />
                                    <h1 className='name'>{el.name}</h1>
                                    <h2 className='price'>{el.price} сом</h2>
                                </div>
                            ))
                            :
                            ''
                    }
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Menu;