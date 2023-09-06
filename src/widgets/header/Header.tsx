import React, { FC } from 'react';

import sessionModel from '@entities/session/model';

import { BaseButton } from '@shared/ui';

import Logo from '@assets/icons/logo.svg';
import Email from '@assets/icons/email.svg';
import DefaultAvatar from '@assets/icons/defaultAvatar.svg';
import './Header.scss';

export const Header: FC = () => {
    return (
        <div className='flexable-row application__container header__container'>
            <img className='logo' src={Logo} alt='logo' />
            <nav className='flexable-row opacity-background header__navigation'>
                <a className='text-regular text-extra-small-size'>Мои заказы</a>
                <a className='text-regular text-extra-small-size'>Заказы</a>
                <a className='text-regular text-extra-small-size'>
                    Фотографы и модели
                </a>
                <a className='text-regular text-extra-small-size'>Избранное</a>
            </nav>
            <div className='flexable-row header__actions'>
                <BaseButton btnText='Разместить заказ' isPurple={true} />
                <img src={Email} alt='email' />
                <p>{sessionModel.data?.user.first_name}</p>
                <img
                    className='mini-avatar'
                    src={DefaultAvatar}
                    alt='user avatar'
                />
            </div>
        </div>
    );
};
