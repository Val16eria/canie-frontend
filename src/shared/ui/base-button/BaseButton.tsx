import React, { FC } from 'react';

import './BaseButton.scss';

interface IBaseButton {
    btn_text: string;
    type?: 'button';
}

export const BaseButton: FC<IBaseButton> = ({ btn_text, type }) => (
    <button
        className='button-white-style text-medium text-small-size base-button__container'
        type={type}
    >
        {btn_text}
    </button>
);
