import React, { FC } from 'react';
import { observer } from 'mobx-react-lite';
import { Navigate, Outlet, RouteProps } from 'react-router-dom';

import sessionModel from '../../entities/session/model/sessionModel';

export const PrivateRoute: FC<RouteProps> = observer(() => {
    console.log('check', sessionModel.isAuthChecked);
    return sessionModel.isAuthChecked && sessionModel.data ? (
        <Outlet />
    ) : (
        <Navigate to='/auth/signin' />
    );
});
