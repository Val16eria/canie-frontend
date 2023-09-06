import React, { FC, HTMLAttributes, PropsWithChildren } from 'react';
import { NavLink } from 'react-router-dom';

import { BaseButton, ErrorMessage, Loader } from '@shared/ui';

import Logo from '@assets/icons/logo.svg';
import './Auth.scss';

interface IAuth extends HTMLAttributes<HTMLFormElement> {
    title: string;
    btnText: string;
    linkText: string;
    linkPath: string;
    error?: string;
    isLoading?: boolean;
    imageSource: any;
}

export const Auth: FC<PropsWithChildren<IAuth>> = ({
    title,
    btnText,
    linkText,
    linkPath,
    error,
    isLoading,
    imageSource,
    ...rest
}) => {
    return (
        <div className='flexable-row auth__container'>
            <div className='flexable-column auth__content'>
                <img className='logo' src={Logo} alt='logo' />
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
                        <div className='flexable-row auth__submit'>
                            <BaseButton btnText={btnText} />
                            {isLoading && <Loader />}
                        </div>
                        <NavLink
                            className='text-regular text-extra-small-size'
                            to={linkPath}
                        >
                            {linkText}
                        </NavLink>
                    </div>
                    <div className='auth__form_error'>
                        <ErrorMessage text={error} />
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
