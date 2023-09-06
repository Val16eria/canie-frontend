import React, { FC, useState } from 'react';

import modalDescriptionUsersModel from '@features/modal-description-users/model';
import { IModel, IPhotographer } from '@shared/api';

import { BaseButton } from '../base-button';
import { StarsRaiting } from '../stars-raiting';

import { ModalDescriptionUsers } from '@features/modal-description-users/ui';

import DefaultAvatar from '@assets/icons/defaultAvatar.svg';
import './UserRoleCard.scss';

interface IUserRoleCard {
    user: IPhotographer | IModel;
}

export const UserRoleCard: FC<IUserRoleCard> = ({ user }) => {
    const [isModalOpen, setModalOpen] = useState<boolean>(false);

    const handleModalOpen = () => {
        modalDescriptionUsersModel.UserById(user.id);
        setModalOpen(true);
    };

    const handleModalClose = () => {
        setModalOpen(false);
    };

    return (
        <>
            {isModalOpen && (
                <ModalDescriptionUsers handleModalClose={handleModalClose} />
            )}
            <div
                className='flexable-column opacity-background user-role-card__container'
                onClick={handleModalOpen}
            >
                <div className='flexable-column user-role-card__container_username'>
                    <img
                        className='middle-avatar user-role-card__container_avatar'
                        src={DefaultAvatar}
                        alt='user avatar'
                    />
                    <p className='text-bold text-middle-size'>
                        {user.full_name}
                    </p>
                </div>
                <p className='text-regular text-extra-small-size user-role-card__container_description'>
                    {user.description}
                </p>
                <div className='flexable-row user-role-card__container_ranks'>
                    <div className='flexable-column user-role-card__ranks_rank'>
                        <div className='flexable-row user-role-card__rank_stars'>
                            <StarsRaiting count={user.average_raiting} />
                        </div>
                        <p className='text-bold text-extra-small-size raiting-reviews'>
                            {`${user.count_of_reviews} reviews`}
                        </p>
                    </div>
                    <BaseButton btnText='Подробнее' isPurple={true} />
                </div>
            </div>
        </>
    );
};
