import React, { FC, PropsWithChildren } from 'react';

import { BaseButton } from '../../../../shared/ui';

import Logo from '../../../../assets/logo.svg';
import './Auth.scss';

interface IAuth {
    title: string;
    btn_text: string;
    link_text: string;
    Image: React.ElementType;
    children: React.ReactNode;
}

export const Auth: FC<PropsWithChildren<IAuth>> = ({
    title,
    btn_text,
    link_text,
    Image,
    children,
}) => {
    return (
        <div className='flexable-row auth__container'>
            <div className='flexable-column auth__content'>
                <img className='auth__content_logo' src={Logo} alt='logo' />
                <form className='flexable-column auth__content_form'>
                    <p className='text-medium text-middle-size'>{title}</p>
                    <div>{children}</div>
                    <div className='flexable-column auth__form_submit'>
                        <BaseButton btn_text={btn_text} />
                        <a className='text-regular text-extra-small-size'>
                            {link_text}
                        </a>
                    </div>
                </form>
            </div>
            <Image />
        </div>
    );
};
