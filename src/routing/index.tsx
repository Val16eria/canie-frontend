import React, { FC } from 'react';
import { Route, Routes } from 'react-router-dom';

import { PrivateRoute } from './privateRoute';
import { Registration, Login } from '../features/auth';
import { SearchUsers } from '../pages/search-users';

export const Router: FC = () => {
    return (
        <Routes>
            <Route path='/' element={<PrivateRoute />}>
                <Route path='/' element={<SearchUsers />} />
            </Route>
            <Route path='/auth/signin' element={<Login />} />
            <Route path='/auth/signup' element={<Registration />} />
        </Routes>
    );
};
