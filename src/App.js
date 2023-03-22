import React from 'react';
import Form from './pages/form/form.jsx';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Main from './pages/main/main.jsx';
import GuestZal from './pages/guest_zal/guest_zal.jsx';
import Menu from './pages/menu/menu.jsx';
import MainCafe from './pages/main-cafe/main-cafe.jsx';
import { setPhilial } from './set-philial.js';

function App() {

  const dishArr = [
    {
      id: 0,
      name: 'steak',
      price: '1234567.00',
      menu: 1
    },
    {
      id: 1,
      name: 'kasha',
      price: '1234.00',
      menu: 2
    },
    {
      id: 2,
      name: 'sup',
      price: '567.00',
      menu: 3
    },
    {
      id: 3,
      name: 'salat',
      price: '12567.00',
      menu: 1
    },
  ]

  const reserveArr = [
    {
      id: 0,
      seat_number: 3,
      guest_zal: 0
    },
    {
      id: 1,
      seat_number: 6,
      guest_zal: 1
    },
    {
      id: 2,
      seat_number: 9,
      guest_zal: 2
    },
    {
      id: 3,
      seat_number: 12,
      guest_zal: 3
    },
  ]

  const guest_zalArr = [
    {
      id: 0,
      name: 'yrta 1',
      philial: 1,
      seating: 40,
    },
    {
      id: 1,
      name: 'yrta 2',
      philial: 2,
      seating: 60,
    },
    {
      id: 2,
      name: 'yrta 3',
      philial: 3,
      seating: 10,
    },
    {
      id: 3,
      name: 'yrta 4',
      philial: 1,
      seating: 20,
    }
  ]

  const menuArr = [
    {
      name: 'menu',
      description: 'menu description',
      philial: 1,
      dishes: dishArr.filter(el => el.menu === setPhilial)
    },
    {
      name: 'menu',
      description: 'menu description',
      philial: 2,
      dishes: dishArr.filter(el => el.menu === setPhilial)
    },
    {
      name: 'menu',
      description: 'menu description',
      philial: 3,
      dishes: dishArr.filter(el => el.menu === setPhilial)
    }
  ]

  const philialArr = [
    {
      id: 1,
      name: 'Supara Chunkurchak',
      description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aspernatur voluptates sint voluptate harum quisquam nostrum quo et, debitis illo, sequi cupiditate blanditiis mollitia ea totam hic, molestiae fugiat quia. Possimus.',
      address: 'Чункурчак',
      open: '8:00',
      close: '18:00',
      guest_zals: guest_zalArr.filter(el => el.philial === setPhilial)
    },
    {
      id: 2,
      name: 'Supara Ethno',
      description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aspernatur voluptates sint voluptate harum quisquam nostrum quo et, debitis illo, sequi cupiditate blanditiis mollitia ea totam hic, molestiae fugiat quia. Possimus.',
      address: 'Этно комплекс',
      open: '8:00',
      close: '18:00',
      guest_zals: guest_zalArr.filter(el => el.philial === setPhilial)
    },
    {
      id: 3,
      name: 'Supara Talkan',
      description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aspernatur voluptates sint voluptate harum quisquam nostrum quo et, debitis illo, sequi cupiditate blanditiis mollitia ea totam hic, molestiae fugiat quia. Possimus.',
      address: 'ул. Карагул',
      open: '8:00',
      close: '18:00',
      guest_zals: guest_zalArr.filter(el => el.philial === setPhilial)
    }
  ]

  const currentPhilial = philialArr.find(el => el.id === setPhilial)

  return (
    <div className='app'>
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/supara/main' element={<MainCafe philialArr={philialArr} currentPhilial={currentPhilial} />} />
        <Route path='/supara/guest_zal' element={<GuestZal guest_zalArr={guest_zalArr} reserveArr={reserveArr} />} />
        <Route path='/supara/menu' element={<Menu menuArr={menuArr} />} />
        <Route path='/supara/form' element={<Form />} />
      </Routes>
    </div>
  );
}

export default App;