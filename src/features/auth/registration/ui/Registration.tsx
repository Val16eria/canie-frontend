import React, { FC } from 'react';

import { Auth } from '../../auth';
import { BaseButton, BaseInput } from '../../../../shared/ui';
import { RegistrationPng } from '../../../../assets/png';

import './Registration.scss';

export const Registration: FC = () => {
    return (
        <Auth
            title='Регистрация'
            btn_text='ЗАРЕГИСТРИРОВАТЬСЯ'
            link_text='Есть аккаунт? Авторизоваться'
            link_path='/auth/signin'
            Image={RegistrationPng}
        >
            <div className='flexable-column registration__inputs'>
                <div className='flexable-row registration__inputs_fullname'>
                    <BaseInput type='text' placeholder='Имя' />
                    <BaseInput type='text' placeholder='Фамилия' />
                </div>
                <BaseInput type='email' placeholder='Электронная почта' />
                <BaseInput type='password' placeholder='Придумайте пароль' />
            </div>
            <div className='flexable-row registration__choice'>
                <BaseButton btn_text='Я - фотограф' type='button' />
                <BaseButton btn_text='Я - модель' type='button' />
            </div>
            <div className='flexable-row registration__checkbox'>
                <input type='checkbox' />
                <label className='text-regular text-extra-small-size'>
                    Регистрируясь, вы принимаете условия Пользовательского
                    соглашения
                </label>
            </div>
        </Auth>
    );
};
