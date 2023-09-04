import { makeAutoObservable, runInAction } from 'mobx';
import { IUser, IError, IAuthSignUp, authSignUp } from '@shared/api';

class RegistrationModel {
    private _error: IError | null = null;
    private _loading: boolean = false;
    private _data: IUser | null = null;

    get error(): IError | null {
        return this._error;
    }

    get loading(): boolean {
        return this._loading;
    }

    get data(): IUser | null {
        return this._data;
    }

    constructor() {
        makeAutoObservable(this);
    }

    async createUser(data: IAuthSignUp) {
        try {
            this._loading = true;
            const response = await authSignUp(data);

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

export default new RegistrationModel();
