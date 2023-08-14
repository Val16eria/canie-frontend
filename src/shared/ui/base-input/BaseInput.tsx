import React, { FC } from 'react';

import './BaseInput.scss';

interface IBaseInput {
    type: string;
    placeholder: string;
}

export const BaseInput: FC<IBaseInput> = ({ type, placeholder }) => (
    <input
        className='input-style text-medium text-small-size base-input__container'
        type={type}
        placeholder={placeholder}
    />
);
