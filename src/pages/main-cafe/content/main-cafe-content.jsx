import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { HOST, philialPoint } from '../../../end-points';
import { setPhilial } from '../../../set-philial';
import borders from '../../../assets/main-cafe/borders-new.png';
import menu from '../../../assets/main-cafe/menu.jpg';
import gallery from '../../../assets/main-cafe/gallery.png';
import yurt from '../../../assets/main-cafe/zals/yurt-hp.jpg';
import beshik from '../../../assets/main-cafe/zals/beshik-hp.jpg';
import erhome from '../../../assets/main-cafe/zals/erhome-hp.jpg';
import rest from '../../../assets/main-cafe/zals/rest-hp.jpg';
import s from './main-cafe-content.module.css';

const MainCafeContent = () => {
    const [philials, setPhilials] = useState([])
    let currentPhilial

    useEffect(() => {
        axios.get(`${HOST}${philialPoint}`)
            .then(res => setPhilials(res.data))
    }, [])

    philials ? currentPhilial = philials.find(el => el.id === setPhilial) : currentPhilial = undefined

    const zalsContentArr = [
        {
            image: yurt,
            text: 'Yurt Hotel'
        },
        {
            image: beshik,
            text: 'Beshik Hotel'
        },
        {
            image: erhome,
            text: 'Земляной домик'
        },
        {
            image: rest,
            text: 'Ресторан'
        },
    ]

    return (
        <div className={s.mainCafe}>
            <div className={s.header}>
                <img src={borders} alt='' />
            </div>
            <div className={s.info}>
                <div className={s.block}>
                    <h1>НАША ИСТОРИЯ</h1>
                    <p>
                        «Супара Чункурчак» — это удачное воссоединение двух известных брендов.
                        Очередной грандиозный проект Табылды Эгембердиева находится всего в 40 километрах к югу от столицы в прекрасном месте под названием урочище Чункурчак.
                        Супара Чункурчак предоставляет Вам условия для комфортабельного проживания и незабываемого отдыха и времяпрепровождения.
                    </p>
                    <a href='/'>Читать дальше</a>
                </div>
                <div className={s.block}>
                    <h1>НАШЕ МЕНЮ</h1>
                    <img src={menu} alt='' />
                    <p>
                        Уважаемые гости!
                        Мы рады приветствовать вас в этно-комплексе «Супара» ресторан.
                    </p>
                    <p>
                        График работы — ежедневно: с {currentPhilial ? currentPhilial.open : ''} до {currentPhilial ? currentPhilial.close : ''}
                    </p>
                </div>
                <div className={s.block}>
                    <h1>ГАЛЕРЕЯ</h1>
                    <img src={gallery} alt='' />
                </div>
            </div>
            <div className={s.zals}>
                <div className={s.zalsHeader}>
                    <h1><a href='/'>НОМЕРА И ЗАЛЫ</a></h1>
                    <a href='/'>посмотреть все обзоры</a>
                </div>
                <div className={s.zalsContent}>
                    {
                        zalsContentArr.map((el, i) => (
                            <div className={s.zalsContentBlock} key={i}>
                                <a href='/'><img src={el.image} alt='' /></a>
                                <a href='/'>{el.text}</a>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default MainCafeContent;