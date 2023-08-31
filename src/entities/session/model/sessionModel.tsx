import { makeAutoObservable, runInAction } from 'mobx';

import sidebarModel from '@entities/sidebar/model';

import { IUser, authLogout } from '@shared/api';

class SessionModel {
    public isAuthChecked: boolean = false;
    public isAuth: boolean = false;
    public data: IUser | null = null;

    constructor() {
        makeAutoObservable(this);
        this.load();
    }

    public setUser(data: IUser) {
        try {
            window.localStorage.setItem(
                SessionModel.name,
                JSON.stringify({
                    user: data,
                }),
            );
            runInAction(() => {
                this.isAuth = true;
                this.load();
            });
        } catch (err) {
            console.log('Ошибка данных');
        }
    }

    public getUser() {
        return this.data;
    }

    private load() {
        try {
            const user = Object.assign(
                this,
                JSON.parse(
                    window.localStorage.getItem(SessionModel.name) || '{}',
                ),
            ).user;
            if (user) {
                runInAction(() => {
                    this.data = user;
                    this.isAuthChecked = true;
                });
            }
        } catch (err) {
            console.log('Ошибка загрузки данных');
        }
    }

    async logout(token: string) {
        try {
            await authLogout(token);
            sidebarModel.resetData();
            window.localStorage.setItem(
                SessionModel.name,
                JSON.stringify({
                    user: null,
                }),
            );
            runInAction(() => {
                this.isAuthChecked = false;
                this.data = null;
                this.isAuth = false;
            });
        } catch (err) {
            console.log('Ошибка выхода');
        }
    }
}

export default new SessionModel();
