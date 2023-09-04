import React, { ButtonHTMLAttributes, FC } from 'react';

interface IBaseButton extends ButtonHTMLAttributes<HTMLButtonElement> {
    btnText: string;
    type?: 'button';
    isPurple?: boolean;
}

export const BaseButton: FC<IBaseButton> = ({
    btnText,
    type,
    isPurple,
    ...restProps
}) => {
    const setStyle = isPurple ? 'button-purple-style' : 'button-white-style';

    return (
        <button
            className={`${setStyle} text-medium text-small-size button-style`}
            type={type}
            onClick={restProps.onClick}
        >
            {btnText}
        </button>
    );
};
