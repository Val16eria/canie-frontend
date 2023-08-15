import React, { FC, useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import { schema, FormData } from '../lib';

import { Auth } from '../../auth';
import { BaseButton, BaseInput } from '../../../../shared/ui';
import { RegistrationPng } from '../../../../assets/png';

import './Registration.scss';

interface IRole {
    isPhotograph: boolean;
    isModel: boolean;
}

export const Registration: FC = () => {
    const initialState = {
        isPhotograph: false,
        isModel: false,
    };

    const {
        control,
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<FormData>({
        resolver: yupResolver(schema),
    });

    const [isActive, setActive] = useState<IRole>(initialState);

    const handleChange = (ownName: keyof IRole, withoutName: keyof IRole) => {
        setActive((prevState) => ({
            ...prevState,
            [ownName]: true,
            [withoutName]: false,
        }));
    };

    const onSubmit = async (data: FormData) => {
        console.log('login data ->', data);
    };

    return (
        <Auth
            title='Регистрация'
            btnText='ЗАРЕГИСТРИРОВАТЬСЯ'
            linkText='Есть аккаунт? Авторизоваться'
            linkPath='/auth/signin'
            Image={RegistrationPng}
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
                    render={({ field: { onChange } }) => (
                        <div className='flexable-row registration__choice_inputs'>
                            <div className='registration__inputs_input'>
                                <BaseButton
                                    type='button'
                                    btnText='Я - фотограф'
                                    isPurple={isActive.isPhotograph}
                                />
                                <input
                                    className='registration__input'
                                    name='role'
                                    type='radio'
                                    value='photograph'
                                    onClick={() =>
                                        handleChange('isPhotograph', 'isModel')
                                    }
                                    onChange={onChange}
                                />
                            </div>
                            <div className='registration__inputs_input'>
                                <BaseButton
                                    type='button'
                                    btnText='Я - модель'
                                    isPurple={isActive.isModel}
                                />
                                <input
                                    className='registration__input'
                                    name='role'
                                    type='radio'
                                    value='model'
                                    onClick={() =>
                                        handleChange('isModel', 'isPhotograph')
                                    }
                                    onChange={onChange}
                                />
                            </div>
                        </div>
                    )}
                />
                <p className='text-regular text-extra-small-size error-style'>
                    {errors.role?.message ?? ''}
                </p>
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
