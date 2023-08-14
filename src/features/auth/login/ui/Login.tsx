import React, { FC } from 'react';

import { Auth } from '../../auth';
import { BaseInput } from '../../../../shared/ui';

import { LoginPng } from '../../../../assets/png';
import Twitter from '../../../../assets/icons/social-twitter.svg';
import Facebook from '../../../../assets/icons/social-facebook.svg';
import Apple from '../../../../assets/icons/social-apple.svg';
import './Login.scss';

export const Login: FC = () => {
    return (
        <Auth
            title='Вход'
            btn_text='Вход'
            link_text='Нет аккаунта? Зарегистрироваться'
            link_path='/auth/signup'
            Image={LoginPng}
        >
            <div className='flexable-column login__inputs'>
                <BaseInput type='email' placeholder='Электронная почта' />
                <BaseInput type='password' placeholder='Пароль' />
            </div>
            <div className='flexable-row login__options'>
                <div className='flexable-row login__options_checkbox'>
                    <input type='checkbox' />
                    <label className='text-regular text-extra-small-size'>
                        Запомнить меня
                    </label>
                </div>
                <a className='text-regular text-extra-small-size'>
                    Забыли пароль?
                </a>
            </div>
            <div className='flexable-column login__links'>
                <div className='flexable-row login__links_link'>
                    <img className='login__link' src={Twitter} alt='twitter' />
                    <img
                        className='login__link'
                        src={Facebook}
                        alt='facebook'
                    />
                    <img className='login__link' src={Apple} alt='apple' />
                </div>
                <p className='text-regular text-extra-small-size'>
                    Или выполните вход через соцсети
                </p>
            </div>
        </Auth>
    );
};
