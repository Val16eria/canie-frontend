import React, { FC } from 'react';

import { BaseButton } from '../base-button';

import './RoleToggle.scss';

interface IRoleToggle {
    value: string;
    onChange: (() => void) | ((e: React.ChangeEvent<HTMLInputElement>) => void);
}

export const RoleToggle: FC<IRoleToggle> = ({ value, onChange }) => {
    return (
        <>
            <div className='role-toggle__inputs_input'>
                <BaseButton
                    type='button'
                    btnText='Я - фотограф'
                    isPurple={value === 'photograph'}
                />
                <input
                    className='role-toggle__input'
                    name='role'
                    type='radio'
                    value='photograph'
                    onChange={onChange}
                />
            </div>
            <div className='role-toggle__inputs_input'>
                <BaseButton
                    type='button'
                    btnText='Я - модель'
                    isPurple={value === 'model'}
                />
                <input
                    className='role-toggle__input'
                    name='role'
                    type='radio'
                    value='model'
                    onChange={onChange}
                />
            </div>
        </>
    );
};
