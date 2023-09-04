import React, { FC } from 'react';

import { Portal } from '../portal';

import Close from '@assets/icons/close.svg';
import './ModalWindow.scss';

interface IModalWindow {
    children: React.ReactNode;
}

export const ModalWindow: FC<IModalWindow> = ({ children }) => {
    return (
        <Portal>
            <div className='flexable-column modal-window__container'>
                <div>{children}</div>
                <img src={Close} alt='close' />
            </div>
        </Portal>
    );
};
