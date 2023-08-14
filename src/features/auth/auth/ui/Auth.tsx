import React, { FC, PropsWithChildren } from 'react';
import { NavLink } from 'react-router-dom';

import { BaseButton } from '../../../../shared/ui';

import Logo from '../../../../assets/icons/logo.svg';
import './Auth.scss';

interface IAuth {
    title: string;
    btn_text: string;
    link_text: string;
    link_path: string;
    Image: React.ElementType;
    children: React.ReactNode;
}

export const Auth: FC<PropsWithChildren<IAuth>> = ({
    title,
    btn_text,
    link_text,
    link_path,
    Image,
    children,
}) => {
    return (
        <div className='flexable-row auth__container'>
            <div className='flexable-column auth__content'>
                <img className='auth__content_logo' src={Logo} alt='logo' />
                <form className='flexable-column auth__content_form'>
                    <p className='text-medium text-middle-size'>{title}</p>
                    <div className='flexable-column auth__form_children'>
                        {children}
                    </div>
                    <div className='flexable-column auth__form_submit'>
                        <BaseButton btn_text={btn_text} />
                        <NavLink
                            className='text-regular text-extra-small-size'
                            to={link_path}
                        >
                            {link_text}
                        </NavLink>
                    </div>
                </form>
            </div>
            <Image />
        </div>
    );
};
