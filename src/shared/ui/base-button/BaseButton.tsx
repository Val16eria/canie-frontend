import React, { FC } from 'react';

interface IBaseButton {
    btnText: string;
    type?: 'button';
    isPurple?: boolean;
    onClick?: () => void;
}

export const BaseButton: FC<IBaseButton> = ({
    btnText,
    type,
    isPurple,
    onClick,
}) => {
    const setStyle = isPurple ? 'button-purple-style' : 'button-white-style';

    return (
        <button
            className={`${setStyle} text-medium text-small-size button-style`}
            type={type}
            onClick={onClick}
        >
            {btnText}
        </button>
    );
};
