import { AxiosResponse } from 'axios';

import { api } from '../apiAxios';
import { IModel } from './types';
import { IUserRoleParams } from '../user';

export const allModelsByParams = async (
    dto: IUserRoleParams,
): Promise<IModel[]> => {
    const response = await api.get<IModel[], AxiosResponse<IModel[]>>(
        '/models',
        {
            params: { ...dto },
        },
    );
    return response.data;
};
