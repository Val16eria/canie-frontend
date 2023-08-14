import React, { FC } from 'react';

import RegistartionMan from '../../registration-man.png';
import './RegistrationPng.scss';

export const RegistrationPng: FC = () => (
    <img
        className='registration-png__container'
        src={RegistartionMan}
        alt='registartion photo'
    />
);
