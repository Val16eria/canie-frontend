import React, { FC } from 'react';

import StarFill from '@assets/icons/starFill.svg';
import StarEmpty from '@assets/icons/starEmpty.svg';
import './StarsRaiting.scss';

interface IStarRaiting {
    count: number;
}

export const StarsRaiting: FC<IStarRaiting> = ({ count }) => {
    const maxRaiting: number = 5;
    return (
        <>
            {[...Array(count)].map((_item, index) => (
                <img
                    key={index}
                    className='stars-raiting__container_img'
                    src={StarFill}
                    alt='star raiting'
                />
            ))}
            {[...Array(maxRaiting - count)].map((_item, index) => (
                <img
                    key={index}
                    className='stars-raiting__container_img'
                    src={StarEmpty}
                    alt='star raiting'
                />
            ))}
        </>
    );
};
