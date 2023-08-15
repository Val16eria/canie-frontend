import React, { FC } from 'react';

interface IErrorMessage {
    text?: string;
}

export const ErrorMessage: FC<IErrorMessage> = ({ text }) => (
    <p className='text-regular text-extra-small-size error-style'>{text}</p>
);
