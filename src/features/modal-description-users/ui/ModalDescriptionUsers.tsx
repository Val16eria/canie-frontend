import React, { FC } from 'react';
import { observer } from 'mobx-react-lite';

import modalDescriptionUsersModel from '../model/modalDescriptionUsersModel';

import { BaseButton, ModalWindow, StarsRaiting, Loader } from '@shared/ui';

import DefaultAvatar from '@assets/icons/defaultAvatar.svg';
import './ModalDescriptionUsers.scss';

interface IModalDescriptionUsers {
    handleModalClose: () => void;
}

export const ModalDescriptionUsers: FC<IModalDescriptionUsers> = observer(
    ({ handleModalClose }) => {
        return (
            <ModalWindow handleModalClose={handleModalClose}>
                <div className='flexable-column modal-description-users__container'>
                    {modalDescriptionUsersModel.loading ? (
                        <Loader />
                    ) : (
                        <>
                            <img
                                className='large-avatar'
                                src={DefaultAvatar}
                                alt='user avatar'
                            />
                            <div className='flexable-column modal-description-users__content'>
                                <div className='flexable-row modal-description-users__content_details'>
                                    <div className='flexable-column modal-description-users__details_user'>
                                        <p className='text-big-size text-bold'>
                                            {`${modalDescriptionUsersModel.data?.first_name} ${modalDescriptionUsersModel.data?.last_name}`}
                                        </p>
                                        <div className='flexable-row modal-description-users__user_stars'>
                                            <StarsRaiting
                                                count={
                                                    modalDescriptionUsersModel
                                                        .data
                                                        ?.average_raiting !==
                                                    undefined
                                                        ? modalDescriptionUsersModel
                                                              .data
                                                              .average_raiting
                                                        : 0
                                                }
                                            />
                                        </div>
                                        <p className='text-small-size text-bold raiting-reviews'>
                                            {`${modalDescriptionUsersModel.data?.count_of_reviews} reviews`}
                                        </p>
                                    </div>
                                    <div className='flexable-row modal-description-users__details_actions'>
                                        <BaseButton
                                            btnText='Связаться'
                                            isPurple={true}
                                        />
                                        <BaseButton
                                            btnText='Профиль'
                                            isPurple={true}
                                        />
                                    </div>
                                </div>
                                <p className='text-small-size text-regular modal-description-users__content_description'>
                                    {
                                        modalDescriptionUsersModel.data
                                            ?.description
                                    }
                                </p>
                            </div>
                        </>
                    )}
                </div>
            </ModalWindow>
        );
    },
);
