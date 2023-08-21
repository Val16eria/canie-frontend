import { makeAutoObservable, runInAction } from 'mobx';
import { IAuthSignIn, IError, IUser, authSignIn } from '../../../../shared/api';

class LoginModel {
    public error: IError | null = null;
    public loading: boolean = false;
    public data: IUser | null = null;

    constructor() {
        makeAutoObservable(this);
    }

    async setUser(data: IAuthSignIn) {
        try {
            this.loading = true;
            const response = await authSignIn(data);

            runInAction(() => {
                this.data = response;
                this.loading = false;
            });
        } catch (err: any) {
            this.loading = false;
            const error = err.response.data;

            runInAction(() => {
                this.error = error;
            });
        }
    }
}

export default new LoginModel();
