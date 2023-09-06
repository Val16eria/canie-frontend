import React, { FC } from 'react';
import { Route, Routes } from 'react-router-dom';

import { PrivateRoute } from './privateRoute';
import { Registration, Login } from '../features/auth';
import { Users } from '../pages/users';

export const Router: FC = () => {
    return (
        <Routes>
            <Route path='/' element={<PrivateRoute />}>
                <Route path='/' element={<Users />} />
            </Route>
            <Route path='/auth/signin' element={<Login />} />
            <Route path='/auth/signup' element={<Registration />} />
        </Routes>
    );
};
