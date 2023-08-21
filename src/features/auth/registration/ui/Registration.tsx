import React, { FC, useEffect } from 'react';
import { observer } from 'mobx-react-lite';
import { useNavigate } from 'react-router-dom';
import { Controller, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import { schema, FormData } from '../lib';

import sessionModel from '@entities/session/model';
import registrationModel from '../model';
import { Auth } from '../../auth';
import { BaseButton, BaseInput, ErrorMessage } from '@shared/ui';

import RegistrationPng from '@assets/registration-man.png';
import './Registration.scss';

export const Registration: FC = observer(() => {
    const {
        control,
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<FormData>({
        resolver: yupResolver(schema),
    });

    const navigate = useNavigate();

    const onSubmit = (data: FormData) => {
        registrationModel.createUser({
            first_name: data.first_name,
            last_name: data.last_name,
            email: data.email,
            pws: data.pws,
            role: data.role,
        });
    };

    useEffect(() => {
        if (registrationModel.data) {
            sessionModel.setUser(registrationModel.data);
            navigate('/');
        }
    }, [registrationModel.data]);

    return (
        <Auth
            title='Регистрация'
            btnText='ЗАРЕГИСТРИРОВАТЬСЯ'
            linkText='Есть аккаунт? Авторизоваться'
            linkPath='/auth/signin'
            error={registrationModel.error?.reason ?? ''}
            isLoading={registrationModel.loading}
            imageSource={RegistrationPng}
            onSubmit={handleSubmit(onSubmit)}
        >
            <div className='flexable-column registration__inputs'>
                <div className='flexable-row registration__inputs_fullname'>
                    <BaseInput
                        type='text'
                        placeholder='Имя'
                        {...register('first_name')}
                        error={errors.first_name?.message ?? ''}
                    />
                    <BaseInput
                        type='text'
                        placeholder='Фамилия'
                        {...register('last_name')}
                        error={errors.last_name?.message ?? ''}
                    />
                </div>
                <BaseInput
                    type='email'
                    placeholder='Электронная почта'
                    {...register('email')}
                    error={errors.email?.message ?? ''}
                />
                <BaseInput
                    type='password'
                    placeholder='Придумайте пароль'
                    {...register('pws')}
                    error={errors.pws?.message ?? ''}
                />
            </div>
            <div className='flexable-column registration__choice'>
                <Controller
                    name='role'
                    control={control}
                    rules={{ required: true }}
                    render={({ field: { onChange, value } }) => (
                        <div className='flexable-row registration__choice_inputs'>
                            <div className='registration__inputs_input'>
                                <BaseButton
                                    type='button'
                                    btnText='Я - фотограф'
                                    isPurple={value === 'photograph'}
                                />
                                <input
                                    className='registration__input'
                                    name='role'
                                    type='radio'
                                    value='photograph'
                                    onChange={onChange}
                                />
                            </div>
                            <div className='registration__inputs_input'>
                                <BaseButton
                                    type='button'
                                    btnText='Я - модель'
                                    isPurple={value === 'model'}
                                />
                                <input
                                    className='registration__input'
                                    name='role'
                                    type='radio'
                                    value='model'
                                    onChange={onChange}
                                />
                            </div>
                        </div>
                    )}
                />
                <ErrorMessage text={errors.role?.message ?? ''} />
            </div>
            <div className='flexable-row registration__checkbox'>
                <input type='checkbox' {...register('contract')} />
                <label className='text-regular text-extra-small-size'>
                    Регистрируясь, вы принимаете условия Пользовательского
                    соглашения
                </label>
                <ErrorMessage text={errors.contract?.message ?? ''} />
            </div>
        </Auth>
    );
});
