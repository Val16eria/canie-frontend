import { makeAutoObservable, runInAction } from 'mobx';

import sidebarModel from '@entities/sidebar/model';

import { IUser, authLogout } from '@shared/api';

class SessionModel {
    private _isAuthChecked: boolean = false;
    private _isAuth: boolean = false;
    private _data: IUser | null = null;

    get isAuthChecked(): boolean {
        return this._isAuthChecked;
    }

    get isAuth(): boolean {
        return this._isAuth;
    }

    get data(): IUser | null {
        return this._data;
    }

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
                this._isAuth = true;
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
                    this._data = user;
                    this._isAuthChecked = true;
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
                this._isAuthChecked = false;
                this._data = null;
                this._isAuth = false;
            });
        } catch (err) {
            console.log('Ошибка выхода');
        }
    }
}

export default new SessionModel();
