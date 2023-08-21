import React, { FC } from 'react';
import { observer } from 'mobx-react-lite';

import sessionModel from '../../entities/session/model/sessionModel';

import './Home.scss';

export const Home: FC = observer(() => {
    const handleLogout = async () => {
        if (sessionModel.data) {
            sessionModel.logout(sessionModel.data.authentication.refresh_token);
        }
    };

    return (
        <div>
            <div>It is Home</div>
            <p>{`my email is ${sessionModel.data?.user.email}`}</p>
            <button onClick={handleLogout}>Logout</button>
        </div>
    );
});
