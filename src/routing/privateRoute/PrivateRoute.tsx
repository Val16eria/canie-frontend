import React, { FC } from 'react';
import { observer } from 'mobx-react-lite';
import { Navigate, Outlet, RouteProps } from 'react-router-dom';

import sessionModel from '@entities/session/model';

export const PrivateRoute: FC<RouteProps> = observer(() => {
    return sessionModel.isAuthChecked && sessionModel.data ? (
        <Outlet />
    ) : (
        <Navigate to='/auth/signin' />
    );
});
