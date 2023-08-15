import React, { FC } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import { schema, FormData } from '../lib';

import { Auth } from '../../auth';
import { BaseInput } from '../../../../shared/ui';

import { LoginPng } from '../../../../assets/png';
import Twitter from '../../../../assets/icons/social-twitter.svg';
import Facebook from '../../../../assets/icons/social-facebook.svg';
import Apple from '../../../../assets/icons/social-apple.svg';
import './Login.scss';

export const Login: FC = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<FormData>({
        resolver: yupResolver(schema),
    });

    const onSubmit = async (data: FormData) => {
        console.log('login data ->', data);
    };

    return (
        <Auth
            title='Вход'
            btnText='ВОЙТИ'
            linkText='Нет аккаунта? Зарегистрироваться'
            linkPath='/auth/signup'
            Image={LoginPng}
            onSubmit={handleSubmit(onSubmit)}
        >
            <div className='flexable-column login__inputs'>
                <BaseInput
                    type='email'
                    placeholder='Электронная почта'
                    {...register('email')}
                    error={errors.email?.message ?? ''}
                />
                <BaseInput
                    type='password'
                    placeholder='Пароль'
                    {...register('pws')}
                    error={errors.pws?.message ?? ''}
                />
            </div>
            <div className='flexable-row login__options'>
                <div className='flexable-row login__options_checkbox'>
                    <input type='checkbox' {...register('remeber_me')} />
                    <p>{errors.remeber_me?.message ?? ''}</p>
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
