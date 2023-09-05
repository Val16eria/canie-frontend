import { AxiosResponse } from 'axios';

import { api } from '../apiAxios';
import { IDescriptionUser } from './types';

export const getUserById = async (id: string): Promise<IDescriptionUser> => {
    const response = await api.get<
        IDescriptionUser,
        AxiosResponse<IDescriptionUser>
    >(`/users/${id}`);
    return response.data;
};
