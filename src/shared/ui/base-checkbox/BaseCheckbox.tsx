import React, { FC, InputHTMLAttributes } from 'react';

import './BaseCheckbox.scss';

interface IBaseCheckbox extends InputHTMLAttributes<HTMLInputElement> {
    label: string;
}

export const BaseCheckbox: FC<IBaseCheckbox> = ({ label, ...restProps }) => (
    <div className='flexable-row options_checkbox'>
        <input
            type='checkbox'
            value={restProps.value}
            onChange={restProps.onChange}
        />
        <label className='text-regular text-extra-small-size'>{label}</label>
    </div>
);
