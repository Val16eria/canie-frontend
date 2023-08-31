import React, { FC } from 'react';

import { IModel, IPhotographer } from '@shared/api';

import { BaseButton } from '../base-button';

import DefaultAvatar from '@assets/icons/defaultAvatar.svg';
import StarEmpty from '@assets/icons/starEmpty.svg';
import StarFill from '@assets/icons/starFill.svg';
import './UserRoleCard.scss';

interface IUserRoleCard {
    user: IPhotographer | IModel;
}

export const UserRoleCard: FC<IUserRoleCard> = ({ user }) => {
    const handleSetStarRaiting = (num: number) => {
        for (let i = 0; i < 5; i++) {
            for (let j = 0; j < num; j++) {
                <img
                    className='user-role-card__stars_star'
                    src={StarFill}
                    alt='stars'
                />;
            }
            <img
                className='user-role-card__stars_star'
                src={StarEmpty}
                alt='stars'
            />;
        }
    };

    return (
        <div className='flexable-column opacity-background user-role-card__container'>
            <div className='flexable-column user-role-card__container_username'>
                <img
                    className='middle-avatar user-role-card__container_avatar'
                    src={DefaultAvatar}
                    alt='user avatar'
                />
                <p className='text-bold text-middle-size'>{user.full_name}</p>
            </div>
            <p className='text-regular text-extra-small-size user-role-card__container_description'>
                {user.description}
            </p>
            <div className='flexable-row user-role-card__container_ranks'>
                <div className='flexable-column user-role-card__ranks_rank'>
                    <div className='flexable-row user-role-card__rank_stars'>
                        <>{handleSetStarRaiting(user.average_raiting)}</>
                    </div>
                    <p className='text-bold text-extra-small-size user-role-card__rank_reviews'>
                        {`${user.count_of_reviews} reviews`}
                    </p>
                </div>
                <BaseButton btnText='Подробнее' isPurple={true} />
            </div>
        </div>
    );
};
