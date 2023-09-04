import { makeAutoObservable, runInAction } from 'mobx';

import {
    IError,
    IModel,
    IPhotographer,
    IUserRoleParams,
    allModelsByParams,
    allPhotographersByParams,
} from '@shared/api';
import { TRoleTypes } from '@features/search-users';
import { TTypesOfPhotos } from '../lib';

class SidebarModel {
    private _loading: boolean = false;
    private _error: IError | null = null;
    private _queryParams: IUserRoleParams = {
        price_per_hour: [100, 35000],
        types_of_photos: [],
        limit: 10,
        offset: 0,
    };
    private _data: IPhotographer[] | IModel[] = [];

    get loading(): boolean {
        return this._loading;
    }

    get error(): IError | null {
        return this._error;
    }

    get data(): IPhotographer[] | IModel[] {
        return this._data;
    }

    constructor() {
        makeAutoObservable(this);
    }

    handleChangeLimit = () => {
        if (this._queryParams.limit) {
            this._queryParams.limit += 10;
        }
    };

    handleChangePrice = (price: number[]) => {
        this._queryParams.price_per_hour = price;
    };

    handleChangeTypesOfPhotos = (
        typeOfPhotos: TTypesOfPhotos,
        isChecked: boolean,
    ) => {
        if (isChecked) {
            this._queryParams.types_of_photos?.push(typeOfPhotos);
        }
        if (!isChecked) {
            this._queryParams.types_of_photos =
                this._queryParams.types_of_photos?.filter(
                    (type) => type !== typeOfPhotos,
                );
        }
    };

    async getUsersByRole(role: TRoleTypes) {
        try {
            this._loading = true;
            if (role === 'photograph') {
                const response = await allPhotographersByParams(
                    this._queryParams,
                );

                runInAction(() => {
                    this._data = response;
                    this._loading = false;
                });
            }
            if (role === 'model') {
                const response = await allModelsByParams(this._queryParams);

                runInAction(() => {
                    this._data = response;
                    this._loading = false;
                });
            }
        } catch (err: any) {
            this._loading = false;
            const error = err.response.data;

            runInAction(() => {
                this._error = error;
            });
        }
    }

    resetData() {
        this._data = [];
        this._queryParams = {
            price_per_hour: [],
            types_of_photos: [],
            limit: 10,
            offset: 0,
        };
    }
}

export default new SidebarModel();
