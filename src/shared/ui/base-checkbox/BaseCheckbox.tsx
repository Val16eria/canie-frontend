import React, { FC } from 'react';

import './BaseCheckbox.scss';

interface IBaseCheckbox {
    value: string;
    label: string;
}

export const BaseCheckbox: FC<IBaseCheckbox> = ({ value, label }) => (
    <div className='flexable-row options_checkbox'>
        <input type='checkbox' value={value} />
        <label className='text-regular text-extra-small-size'>{label}</label>
    </div>
);
