import React, { FC, InputHTMLAttributes } from 'react';

import { TRoleTypes } from '@features/search-users';
import { BaseButton } from '../base-button';

import './RoleToggle.scss';

interface IRoleToggle extends InputHTMLAttributes<HTMLInputElement> {
    role: TRoleTypes;
}

export const RoleToggle: FC<IRoleToggle> = ({ role, ...restProps }) => {
    return (
        <>
            <div className='role-toggle__inputs_input'>
                <BaseButton
                    type='button'
                    btnText='Я - фотограф'
                    isPurple={role === 'photograph'}
                />
                <input
                    className='role-toggle__input'
                    name='role'
                    type='radio'
                    value='photograph'
                    onChange={restProps.onChange}
                />
            </div>
            <div className='role-toggle__inputs_input'>
                <BaseButton
                    type='button'
                    btnText='Я - модель'
                    isPurple={role === 'model'}
                />
                <input
                    className='role-toggle__input'
                    name='role'
                    type='radio'
                    value='model'
                    onChange={restProps.onChange}
                />
            </div>
        </>
    );
};
