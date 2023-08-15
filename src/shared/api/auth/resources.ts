import { AxiosResponse } from 'axios';

import { api } from '../apiAxios';
import { IAuthSignIn, IAuthSignUp } from './types';
import { IUser } from '../user';

export const authSignUp = async (dto: IAuthSignUp): Promise<IUser> => {
    const response = await api.post<IUser, AxiosResponse<IUser>>(
        '/auth/signup',
        { ...dto },
    );
    return response.data;
};

export const authSignIn = async (dto: IAuthSignIn): Promise<IUser> => {
    const response = await api.post<IUser, AxiosResponse<IUser>>(
        '/auth/signin',
        { ...dto },
    );
    return response.data;
};

export const authLogout = async (): Promise<string> => {
    const response = await api.post<string, AxiosResponse<string>>(
        '/auth/logout',
    );
    return response.data;
};
