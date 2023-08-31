import { makeAutoObservable, runInAction } from 'mobx';

import {
    IError,
    IModel,
    IPhotographer,
    IUserRoleParams,
    allModelsByParams,
    allPhotographersByParams,
} from '@shared/api';

class SidebarModel {
    public loading: boolean = false;
    public error: IError | null = null;
    public queryParams: IUserRoleParams = {
        price_per_hour: [100, 35000],
        types_of_photos: [],
        limit: 10,
        offset: 0,
    };
    public data: IPhotographer[] | IModel[] = [];

    constructor() {
        makeAutoObservable(this);
    }

    async getUsersByRole(role: string) {
        try {
            this.loading = true;
            if (role === 'photograph') {
                console.log('queryParams1', this.queryParams);
                const response = await allPhotographersByParams(
                    this.queryParams,
                );

                runInAction(() => {
                    this.data = response;
                    this.loading = false;
                });
            }
            if (role === 'model') {
                console.log('queryParams2', this.queryParams);
                const response = await allModelsByParams(this.queryParams);

                runInAction(() => {
                    this.data = response;
                    this.loading = false;
                });
            }
        } catch (err: any) {
            this.loading = false;
            const error = err.response.data;

            runInAction(() => {
                this.error = error;
            });
        }
    }

    resetData() {
        this.data = [];
        this.queryParams = {
            price_per_hour: [],
            types_of_photos: [],
            limit: 10,
            offset: 0,
        };
    }
}

export default new SidebarModel();
