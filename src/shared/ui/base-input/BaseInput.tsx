import React, { InputHTMLAttributes, forwardRef } from 'react';

import './BaseInput.scss';

interface IBaseInput extends InputHTMLAttributes<HTMLInputElement> {
    error?: string;
}

export const BaseInput = forwardRef<HTMLInputElement, IBaseInput>(
    ({ error, ...props }, ref) => {
        return (
            <div className='flexable-column base-input__container'>
                <input
                    className='input-style text-medium text-small-size base-input__container_input'
                    {...props}
                    ref={ref}
                />
                <p className='text-regular text-extra-small-size error-style'>
                    {error}
                </p>
            </div>
        );
    },
);
