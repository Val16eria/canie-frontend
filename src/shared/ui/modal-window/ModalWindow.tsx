import React, { FC, PropsWithChildren, useRef } from 'react';

import { Portal } from '../portal';
import { useOutsideClick } from '@shared/hooks';

import Close from '@assets/icons/close.svg';
import './ModalWindow.scss';

interface IModalWindow {
    handleModalClose: () => void;
}

export const ModalWindow: FC<PropsWithChildren<IModalWindow>> = ({
    children,
    handleModalClose,
}) => {
    const modalRef = useRef<HTMLDivElement>(null);
    useOutsideClick(modalRef, handleModalClose);
    return (
        <Portal>
            <div className='modal-window__container'>
                <div
                    className='flexable-row modal-window__content'
                    ref={modalRef}
                >
                    {children}
                    <img onClick={handleModalClose} src={Close} alt='close' />
                </div>
            </div>
        </Portal>
    );
};
