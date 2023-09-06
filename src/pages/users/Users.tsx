import React, { FC } from 'react';

import { Header } from '@widgets/header';
import { SearchUsers } from '@features/search-users';

import './Users.scss';

export const Users: FC = () => {
    return (
        <div className='flexable-column users__container'>
            <Header />
            <SearchUsers />
        </div>
    );
};
