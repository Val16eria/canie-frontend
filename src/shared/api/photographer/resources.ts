import { AxiosResponse } from 'axios';

import { api } from '../apiAxios';
import { IPhotographer } from './types';
import { IUserRoleParams } from '../user';

export const allPhotographersByParams = async (
    dto: IUserRoleParams,
): Promise<IPhotographer[]> => {
    const response = await api.get<
        IPhotographer[],
        AxiosResponse<IPhotographer[]>
    >('/photographers', {
        params: { ...dto },
    });
    return response.data;
};
