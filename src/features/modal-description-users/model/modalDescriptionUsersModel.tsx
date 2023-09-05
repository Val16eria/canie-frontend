import { makeAutoObservable, runInAction } from 'mobx';

import { IDescriptionUser, IError, getUserById } from '@shared/api';

class modalDescriptionUsersModel {
    private _loading: boolean = false;
    private _error: IError | null = null;
    private _data: IDescriptionUser | null = null;

    get loading(): boolean {
        return this._loading;
    }

    get error(): IError | null {
        return this._error;
    }

    get data(): IDescriptionUser | null {
        return this._data;
    }

    constructor() {
        makeAutoObservable(this);
    }

    async UserById(id: string) {
        try {
            this._loading = true;
            const response = await getUserById(id);
            runInAction(() => {
                this._data = response;
                this._loading = false;
            });
        } catch (err: any) {
            this._loading = false;
            const error = err.response.data;

            runInAction(() => {
                this._error = error;
            });
        }
    }
}

export default new modalDescriptionUsersModel();
