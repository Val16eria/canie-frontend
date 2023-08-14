import React, { FC } from 'react';
import { Route, Routes } from 'react-router-dom';

import { Registration, Login } from '../features/auth';

export const Router: FC = () => {
    return (
        <Routes>
            <Route path='/auth/signin' element={<Login />} />
            <Route path='/auth/signup' element={<Registration />} />
        </Routes>
    );
};
