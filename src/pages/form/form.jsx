import axios from 'axios';
import React, { useState } from 'react';
import { HOST, login, registration } from '../../end-points';
import Nav from '../../components/nav/nav';
import './form.css';

const Form = () => {
    const [isLogin, setIsLogin] = useState('login')

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const getIn = (endPoint) => {
        axios.post(`${HOST}/${endPoint}`, {
            email: email,
            password: password
        })
            .then(res => console.log(res))
            .catch(err => console.log(err))
    }

    return (
        <div className='form-container'>
            <Nav current='form' />
            {
                isLogin === 'login' ?
                    <div className='form'>
                        <h1>Войти</h1>
                        <input
                            type='email'
                            placeholder='Введите вашу почту'
                            maxLength='254'
                            minLength='1'
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <input
                            type='password'
                            placeholder='Введите пароль'
                            minLength='1'
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        <button onClick={() => getIn(login)}>Войти</button>
                        <p onClick={() => setIsLogin('register')}>Зарегистрироваться</p>
                    </div>
                    :
                    <div className='form'>
                        <h1>Зарегистрироваться</h1>
                        <input
                            type='email'
                            placeholder='Введите вашу почту'
                            maxLength='254'
                            minLength='1'
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <input
                            type='password'
                            placeholder='Введите пароль'
                            minLength='1'
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        <button onClick={() => getIn(registration)}>Зарегистрироваться</button>
                        <p onClick={() => setIsLogin('login')}>Войти</p>
                    </div>
            }

        </div>
    );
};

export default Form;