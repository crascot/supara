import React from "react";
import certificate from '../../assets/main-cafe/certificate.png';
import top from '../../assets/top-arrow-svgrepo-com.svg';
import s from './footer.module.css';

const Footer = () => {
    const tools = [
        ['О НАС', 'СХЕМА ПРОЕЗДА', 'ОБРАТНАЯ СВЯЗЬ'],
        ['МЕНЮ', 'РЕСТОРАН', 'НОМЕРНОЙ ФОНД'],
        ['ФОТОГАЛЕРЕЯ', 'ВИДЕО', 'НОВОСТИ']
    ]

    const toolsMap = tools.map((arr, i) =>
        <div key={i} className={s.block}>
            {arr.map((el, i) => <a key={i} href="/">{el}</a>)}
        </div>)

    const scrollTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    }

    return (
        <div className={s.footer}>
            <div className={s.content}>
                {toolsMap}
                <div className={`${s.block} ${s.location}`}>
                    <span>Адресс:</span>
                    Кыргызстан
                    <br />
                    Аламединский район,
                    <br />
                    урочище Чункурчак
                    <br />
                    +996 (554) 961414
                    <br />
                    +996 (553) 787272
                </div>
                <div className={`${s.block} ${s.certificate}`}><img src={certificate} alt='' /></div>
            </div>
            <div className={s.bottomContent}>
                <div className={`${s.content} ${s.bottomFooter}`}>
                    <p>© 2023 Supara Chunkurchak. All Rights Reserved. Сайт разработан Vision Studio</p>
                    <img src={top} className={s.top} onClick={scrollTop} alt="" />
                </div>
            </div>
        </div>
    )
}

export default Footer;