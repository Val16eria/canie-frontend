import React, { FC } from 'react';

import './BaseCheckbox.scss';

interface IBaseCheckbox {
    value: string;
    label: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const BaseCheckbox: FC<IBaseCheckbox> = ({ value, label, onChange }) => (
    <div className='flexable-row options_checkbox'>
        <input type='checkbox' value={value} onChange={onChange} />
        <label className='text-regular text-extra-small-size'>{label}</label>
    </div>
);
