import React, { FC, HTMLAttributes, PropsWithChildren } from 'react';
import { NavLink } from 'react-router-dom';

import { BaseButton } from '../../../../shared/ui';

import Logo from '../../../../assets/icons/logo.svg';
import './Auth.scss';

interface IAuth extends HTMLAttributes<HTMLFormElement> {
    title: string;
    btnText: string;
    linkText: string;
    linkPath: string;
    imageSource: any;
}

export const Auth: FC<PropsWithChildren<IAuth>> = ({
    title,
    btnText,
    linkText,
    linkPath,
    imageSource,
    ...rest
}) => {
    return (
        <div className='flexable-row auth__container'>
            <div className='flexable-column auth__content'>
                <img className='auth__content_logo' src={Logo} alt='logo' />
                <form
                    className='flexable-column auth__content_form'
                    noValidate
                    {...rest}
                >
                    <p className='text-medium text-middle-size'>{title}</p>
                    <div className='flexable-column auth__form_children'>
                        {rest.children}
                    </div>
                    <div className='flexable-column auth__form_submit'>
                        <BaseButton btnText={btnText} />
                        <NavLink
                            className='text-regular text-extra-small-size'
                            to={linkPath}
                        >
                            {linkText}
                        </NavLink>
                    </div>
                </form>
            </div>
            <img
                className='image-large'
                src={imageSource}
                alt='registartion photo'
            />
        </div>
    );
};
