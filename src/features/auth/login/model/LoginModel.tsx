import { makeAutoObservable, runInAction } from 'mobx';
import { IAuthSignIn, IError, IUser, authSignIn } from '@shared/api';

class LoginModel {
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

    async setUser(data: IAuthSignIn) {
        try {
            this._loading = true;
            const response = await authSignIn(data);

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

export default new LoginModel();
