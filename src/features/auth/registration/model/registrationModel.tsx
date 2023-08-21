import { makeAutoObservable, runInAction } from 'mobx';
import { IUser, IError, IAuthSignUp, authSignUp } from '../../../../shared/api';

class RegistrationModel {
    public error: IError | null = null;
    public loading: boolean = false;
    public data: IUser | null = null;

    constructor() {
        makeAutoObservable(this);
    }

    async createUser(data: IAuthSignUp) {
        try {
            this.loading = true;
            const response = await authSignUp(data);

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

export default new RegistrationModel();
